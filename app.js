require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');


console.log("MONGO_URI =", process.env.MONGO_URI);
// Routers


const adminRoutes = require('./routes/Radmin.js');
const customerRoutes = require('./routes/Rcustomer.js');
const riderRoutes = require('./routes/Rrider.js');
const staffRoutes = require('./routes/Rstaff.js');

// Init app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server running on port ${process.env.PORT || 5000}`);
        });
    })
    .catch(error => {
        console.log("MongoDB connection error:", error);
    });

// Base API route
const requestMapper = '/api';

// Routes
app.use(requestMapper + '/customers', customerRoutes);
app.use(requestMapper + '/admins', adminRoutes);
app.use(requestMapper + '/riders', riderRoutes);
app.use(requestMapper + '/staff', staffRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'No such endpoint exists' });
});