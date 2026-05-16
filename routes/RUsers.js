const express = require('express');
const router = express.Router();

// ===================== MODELS (FOR AGGREGATION) =====================
const Admin = require('../model/Madmin');
const Customer = require('../model/Mcustomer');
const Rider = require('../model/Mrider');
const Staff = require('../model/Mstaff');


// ===================== CONTROLLERS (FOR CRUD) =====================
const adminController = require('../controller/Cadmin.js');
const customerController = require('../controller/Ccustomer.js');
const riderController = require('../controller/Crider.js');
const staffController = require('../controller/Cstaff.js');


// ===================== BASE ROUTE (GET ALL USERS) =====================
// THIS FIXES: /api/users returning ALL data
router.get('/', async (req, res) => {
    try {
        const admins = await Admin.find();
        const customers = await Customer.find();
        const riders = await Rider.find();
        const staff = await Staff.find();

        res.json({
            message: "All users fetched successfully",
            data: {
                admins,
                customers,
                riders,
                staff
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Failed to fetch users"
        });
    }
});


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


// ===================== 404 HANDLER =====================
router.use((req, res) => {
    res.status(404).json({
        error: "Route not found inside users API"
    });
});

module.exports = router;