const express = require('express');
const router = express.Router();

const {createRider, getAllRiders, getRiderById} = require('../controller/Crider.js');

router.post('/createRider', createRider);
router.get('/users', getAllRiders);
router.get('/getRiderById/:riderId', getRiderById);

module.exports = router;