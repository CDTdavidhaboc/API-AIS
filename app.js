require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

console.log("APP STARTED");
console.log("MONGO_URI =", process.env.MONGO_URI);

// REMOVE ALL ROUTES TEMPORARILY

const PORT = process.env.PORT || 10000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.get("/", (req, res) => {
            res.send("API is running");
        });

        app.listen(PORT, () => {
            console.log("Server running on", PORT);
        });
    })
    .catch(err => {
        console.error("MONGO ERROR:");
        console.error(err);
        process.exit(1);
    });