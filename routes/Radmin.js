const express = require('express');
const router = express.Router();

const {
    createAdmin,
    getAllAdmins,
    getAdminById,
} = require('../controller/Cadmin.js');

router.post('/AddAdmin', createAdmin);
router.get('/All', getAllAdmins);
router.get('/:adminId', getAdminById);


module.exports = router;