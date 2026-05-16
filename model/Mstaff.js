const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StaffSchema = new Schema({
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
    staffStatus: {
        type: String,
        default: "Active"
    }
}, { timestamps: true });

module.exports = mongoose.model('Staff', StaffSchema);