const express = require('express');
const router = express.Router();

// import all controllers
const adminController = require('../controller/Cadmin.js');
const customerController = require('../controller/Ccustomer.js');
const riderController = require('../controller/Crider.js');
const staffController = require('../controller/Cstaff.js');


// ===================== BASE ROUTE =====================
// FIX: this makes /api/users work
router.get('/', (req, res) => {
    res.json({
        message: "Users API is working",
        availableRoutes: {
            admin: {
                create: "POST /admin",
                getAll: "GET /admin",
                getById: "GET /admin/:adminId"
            },
            customer: {
                create: "POST /customer",
                getAll: "GET /customer",
                getById: "GET /customer/:customerId"
            },
            rider: {
                create: "POST /rider",
                getAll: "GET /rider",
                getById: "GET /rider/:riderId"
            },
            staff: {
                create: "POST /staff",
                getAll: "GET /staff",
                getById: "GET /staff/:staffId"
            }
        }
    });
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


// 404 inside router (optional but good practice)
router.use((req, res) => {
    res.status(404).json({ error: "Route not found inside users API" });
});

module.exports = router;