const express = require('express');
const router = express.Router();

const {createCustomer, getAllCustomers, getCustomerById} = require('../controller/Ccustomer.js');

router.post('/createCustomer', createCustomer);
router.get('/getAllCustomers', getAllCustomers);
router.get('/getCustomerById/:customerId', getCustomerById);

module.exports = router;