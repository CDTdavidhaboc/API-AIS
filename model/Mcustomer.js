const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
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
    address: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Customer', CustomerSchema);