const express = require('express');
const router = express.Router();

const {
    createCustomer,
    getAllCustomers,
    getCustomerById,
  
} = require('../controller/Ccustomer.js');

router.post('/AddCustomer', createCustomer);
router.get('/All', getAllCustomers);
router.get('/:customerId', getCustomerById);

module.exports = router;