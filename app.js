require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// ===================== MIDDLEWARE =====================
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// ===================== LOG ENV =====================
console.log("APP STARTED");
console.log("MONGO_URI =", process.env.MONGO_URI);
console.log("PORT =", process.env.PORT);

// ===================== ROUTES =====================
const adminRoutes = require('./routes/Radmin.js');
const customerRoutes = require('./routes/Rcustomer.js');
const riderRoutes = require('./routes/Rrider.js');
const staffRoutes = require('./routes/Rstaff.js');

// Base route (health check)
app.get("/", (req, res) => {
    res.send("API is running");
});

// Main API router
const requestMapper = '/api';

app.use(requestMapper + '/admins', adminRoutes);
app.use(requestMapper + '/customers', customerRoutes);
app.use(requestMapper + '/riders', riderRoutes);
app.use(requestMapper + '/staff', staffRoutes);


// ===================== 404 HANDLER =====================
app.use((req, res) => {
    res.status(404).json({ error: 'No such endpoint exists' });
});

// ===================== PORT SAFETY =====================
const PORT = process.env.PORT || 9000;

if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is missing");
    process.exit(1);
}

// ===================== DATABASE CONNECTION =====================
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(PORT, '0.0.0.0', () => {
            console.log("Server running on port", PORT);
        });
    })
    .catch((error) => {
        console.error("MONGO ERROR:");
        console.error(error);
        process.exit(1);
    });