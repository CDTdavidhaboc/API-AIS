const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RiderSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },  
    contactNumber: {
        type: String,
        required: true
    },
    riderStatus: {
        type: String,
        default: "Available"
    }
}, { timestamps: true });

module.exports = mongoose.model('Rider', RiderSchema);