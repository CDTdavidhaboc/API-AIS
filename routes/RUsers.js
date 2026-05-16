const express = require('express');
const router = express.Router();

// import all controllers
const adminController = require('../controller/Cadmin.js');
const customerController = require('../controller/Ccustomer,js');
const riderController = require('../controller/Crider.js');
const staffController = require('../controller/Cstaff.js');


// ===================== ADMIN =====================
router.post('/admin', adminController.createAdmin);
router.get('/admin', adminController.getAllAdmins);
router.get('/admin/:adminId', adminController.getAdminById);


// ===================== CUSTOMER =====================
router.post('/customer', customerController.createCustomer);
router.get('/customer', customerController.getAllCustomers);
router.get('/customer/:customerId', customerController.getCustomerById);


// ===================== RIDER =====================
router.post('/rider', riderController.createRider);
router.get('/rider', riderController.getAllRiders);
router.get('/rider/:riderId', riderController.getRiderById);


// ===================== STAFF =====================
router.post('/staff', staffController.createStaff);
router.get('/staff', staffController.getAllStaff);
router.get('/staff/:staffId', staffController.getStaffById);


module.exports = router;