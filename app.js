require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());

console.log("APP STARTED");
console.log("MONGO_URI =", process.env.MONGO_URI);
console.log("PORT =", process.env.PORT);

// Routes
const adminRoutes = require('./routes/Radmin.js');
const customerRoutes = require('./routes/Rcustomer.js');
const riderRoutes = require('./routes/Rrider.js');
const staffRoutes = require('./routes/Rstaff.js');

const requestMapper = '/api';

// Test route
app.get("/", (req, res) => {
    res.send("API is running");
});

// Routes
app.use('/users', require('./routes/RUsers.js'));

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'No such endpoint exists' });
});

// 🚨 CRITICAL FIX FOR RENDER
const PORT = process.env.PORT;

// Safety check (prevents silent crash)
if (!PORT) {
    console.error("❌ PORT is missing in environment variables");
    process.exit(1);
}

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        // 🚨 IMPORTANT: bind to 0.0.0.0 for Render
        app.listen(PORT, '0.0.0.0', () => {
            console.log("Server running on port", PORT);
        });
    })
    .catch(err => {
        console.error("MONGO ERROR:");
        console.error(err);
        process.exit(1);
    });