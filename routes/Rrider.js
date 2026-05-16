const express = require('express');
const router = express.Router();

const {createRider, getAllRiders, getRiderById} = require('../controller/Crider.js');

router.post('/', createRider);
router.get('/', getAllRiders);
router.get('/:riderId', getRiderById)

module.exports = router;