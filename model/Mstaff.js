const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StaffSchema = new Schema({
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
    staffStatus: {
        type: String,
        default: "Active"
    }
}, { timestamps: true });

module.exports = mongoose.model('Staff', StaffSchema);