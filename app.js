require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

//Routers
const adminRoute = require('./routes/Radmin.js');
const customerRoute = require('./routes/Rcustomer.js');
const riderRoute = require('./routes/Rrider.js');
const staffRoute = require('./routes/Rstaff.js');

//init app
const app = express();

//middleware 
app.use(express.json());
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        app.listen(process.env.PORT || 10000, () =>{
            console.log(`Connected to database and listening to port ${process.env.PORT}`)
        })
    }).catch(error =>{
        console.log(error)
    })

const requestMapper = '/api'
app.use(requestMapper+'/users', adminRoute);
app.use(requestMapper+'/customers', customerRoute);
app.use(requestMapper+'/riders', riderRoute);
app.use(requestMapper+'/staff', staffRoute);


//if no request match
app.use((req, res) =>{
    res.status(404).json({error: 'No such endpoint exists'})
})