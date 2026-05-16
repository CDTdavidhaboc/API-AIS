const Customer = require('../model/Mcustomer.js');

// Create customer
const createCustomer = async (req, res) => {
    const {
        FirstName,
        LastName,
        contactNumber,
        address
    } = req.body;

    try {
        const customer = await Customer.create({
            FirstName,
            LastName,
            contactNumber,
            address
        });

        res.status(201).json(customer);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

// View all customers
const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({});
        res.status(200).json(customers);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

// View customer by ID
const getCustomerById = async (req, res) => {
    const { customerId } = req.params;

    try {
        const customer = await Customer.findById(customerId);

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(200).json(customer);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomerById
};