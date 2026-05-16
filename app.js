require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());

console.log("APP STARTED");
console.log("MONGO_URI =", process.env.MONGO_URI);

// Routes (IMPORTS)
const adminRoutes = require('./routes/Radmin.js');
const customerRoutes = require('./routes/Rcustomer.js');
const riderRoutes = require('./routes/Rrider.js');
const staffRoutes = require('./routes/Rstaff.js');

// Base API route
const requestMapper = '/api';

// TEST ROUTE (always keep this)
app.get("/", (req, res) => {
    res.send("API is running");
});

// ROUTES
app.use(requestMapper + '/customers', customerRoutes);
app.use(requestMapper + '/admins', adminRoutes);
app.use(requestMapper + '/riders', riderRoutes);
app.use(requestMapper + '/staff', staffRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'No such endpoint exists' });
});

// PORT
const PORT = process.env.PORT || 10000;

// MONGODB CONNECTION
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(PORT, () => {
            console.log("Server running on", PORT);
        });
    })
    .catch(err => {
        console.error("MONGO ERROR:");
        console.error(err);
        process.exit(1);
    });