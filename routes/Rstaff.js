const express = require('express');
const router = express.Router();

const {
    createStaff,
    getAllStaff,
    getStaffById,
  
} = require('../controller/Cstaff.js');

router.post('/', createStaff);
router.get('/', getAllStaff);
router.get('/:staffId', getStaffById);


module.exports = router;