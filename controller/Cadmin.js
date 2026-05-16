const Admin = require('../model/Madmin.js');

// Create admin
const createAdmin = async (req, res) => {
    const {
        FirstName,
        LastName,
        phoneNumber,
        address
    } = req.body;

    try {
        const admin = await Admin.create({
            FirstName,
            LastName,
            phoneNumber,
            address
        });

        res.status(201).json(admin);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

// View all admins
const getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find({});
        res.status(200).json(admins);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

// View admin by ID
const getAdminById = async (req, res) => {
    const { adminId } = req.params;

    try {
        const admin = await Admin.findById(adminId);

        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        res.status(200).json(admin);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createAdmin,
    getAllAdmins,
    getAdminById
};