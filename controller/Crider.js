const Rider = require('../model/Mrider.js');

// Create rider
const createRider = async (req, res) => {
    const {
        firstName,
        lastName,
        phoneNumber,
        riderStatus
    } = req.body;

    try {
        const rider = await Rider.create({
            firstName,
            lastName,
            phoneNumber,
            riderStatus
        });

        res.status(201).json(rider);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

// Get all riders
const getAllRiders = async (req, res) => {
    try {
        const riders = await Rider.find({});
        res.status(200).json(riders);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

// Get rider by ID
const getRiderById = async (req, res) => {
    const { riderId } = req.params;

    try {
        const rider = await Rider.findById(riderId);

        if (!rider) {
            return res.status(404).json({ message: "Rider not found" });
        }

        res.status(200).json(rider);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createRider,
    getAllRiders,
    getRiderById
};