const express = require('express');
const router = express.Router();

const {createStaff, getAllStaff, getStaffById} = require('../controller/Cstaff.js');

router.post('/createStaff', createStaff);
router.get('/getAllStaff', getAllStaff);
router.get('/getStaffById/:staffId', getStaffById);

module.exports = router;