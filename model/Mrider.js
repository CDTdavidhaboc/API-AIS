const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RiderSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },  
    phoneNumber: {
        type: String,
        required: true
    },
    riderStatus: {
        type: String,
        default: "Available"
    }
}, { timestamps: true });

module.exports = mongoose.model('Rider', RiderSchema);