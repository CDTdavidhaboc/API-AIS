const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Admin', AdminSchema);