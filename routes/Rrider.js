const express = require('express');
const router = express.Router();

const {
    createRider,
    getAllRiders,
    getRiderById,

} = require('../controller/Crider.js');

router.post('/AddRider', createRider);
router.get('/All', getAllRiders);
router.get('/:riderId', getRiderById);

module.exports = router;