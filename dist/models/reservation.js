"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const reservationSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        minLength: [10, 'Contact number should have 10 digits'],
        maxLength: [10, 'Contact number should have 10 digits'],
        match: [/\d{10}/, 'Contact number should only have numbers'],
        required: true,
    },
    hut: {
        type: String,
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
});
module.exports = mongoose.model('Reservation', reservationSchema);
