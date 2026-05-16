const express = require('express');
const router = express.Router();

const {
    createStaff,
    getAllStaff,
    getStaffById,
  
} = require('../controller/Cstaff.js');

router.post('/AddStaff', createStaff);
router.get('/All', getAllStaff);
router.get('/:staffId', getStaffById);


module.exports = router;