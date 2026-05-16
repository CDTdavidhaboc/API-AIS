require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

console.log("MONGO_URI =", process.env.MONGO_URI);
console.log("PORT =", process.env.PORT);

// Routers
const adminRoutes = require('./routes/Radmin.js');
const customerRoutes = require('./routes/Rcustomer.js');
const riderRoutes = require('./routes/Rrider.js');
const staffRoutes = require('./routes/Rstaff.js');

const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Base API route
const requestMapper = '/api';

app.use(requestMapper + '/customers', customerRoutes);
app.use(requestMapper + '/admins', adminRoutes);
app.use(requestMapper + '/riders', riderRoutes);
app.use(requestMapper + '/staff', staffRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'No such endpoint exists' });
});

// 🔥 FIXED MONGODB CONNECTION (IMPORTANT)
const PORT = process.env.PORT || 10000;
const MONGO_URI = process.env.MONGO_URI;

// Hard safety check (THIS WILL SHOW REAL ERROR)
if (!MONGO_URI) {
    console.error("❌ MONGO_URI is missing in environment variables!");
    process.exit(1);
}

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error("❌ MongoDB connection error:");
        console.error(error);
        process.exit(1);
    });