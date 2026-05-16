const Staff = require('../model/Mstaff.js');

// Create staff
const createStaff = async (req, res) => {
    const {
        firstName,
        lastName,
        phoneNumber,
        staffStatus
    } = req.body;

    try {
        const staff = await Staff.create({
            firstName,
            lastName,
            phoneNumber,
            staffStatus
        });

        res.status(200).json(staff);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

// Get all staff
const getAllStaff = async (req, res) => {
    try {
        const staffs = await Staff.find({});
        res.status(200).json(staffs);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

// Get staff by ID
const getStaffById = async (req, res) => {
    const { staffId } = req.params;

    try {
        const staff = await Staff.findById(staffId);

        if (!staff) {
            return res.status(404).json({ message: "Staff not found" });
        }

        res.status(200).json(staff);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

// Update staff status
const updateStaffStatus = async (req, res) => {
    const { staffId } = req.params;
    const { status } = req.body;

    try {
        const updatedStaff = await Staff.findByIdAndUpdate(
            staffId,
            { $set: { status } },
            { new: true }
        );

        if (!updatedStaff) {
            return res.status(404).json({ message: "Staff not found" });
        }

        res.status(200).json(updatedStaff);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createStaff,
    getAllStaff,
    getStaffById,
    updateStaffStatus
};