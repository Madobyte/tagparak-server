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
  cottage: {
    type: String,
    required: true,
  },
  tour: {
    type: String,
    required: true,
  },
  in: {
    type: Boolean,
    default: false,
  },
  out: {
    type: Boolean,
    default: false,
  },
  paid: {
    type: Boolean,
    default: false,
  },
  notes: {
    type: String,
  },
});

module.exports = mongoose.model('Reservation', reservationSchema);
