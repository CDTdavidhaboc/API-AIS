const express = require('express');
const router = express.Router();

const {createAdmin, getAllAdmins, getAdminById} = require('../controller/Cadmin.js');

router.post('/createAdmin', createAdmin);
router.get('/getAllAdmins', getAllAdmins);
router.get('/getAdminById/:adminId', getAdminById);

module.exports = router;