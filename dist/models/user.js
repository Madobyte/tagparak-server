"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const { URI } = require('../utils/config');
mongoose.set('strictQuery', false);
mongoose
    .connect(URI)
    .then(() => console.log('connected to MongoDB'))
    .catch((error) => console.log('error connecting to MongoDB', error));
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 8,
    },
    passwordHash: {
        type: String,
        required: true,
        minLength: 8,
    },
    firstName: {
        type: String,
        required: true,
        minLength: 2,
    },
    lastName: {
        type: String,
        required: true,
        minLength: 2,
    },
    contact: {
        type: String,
    },
});
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.passwordHash;
    },
});
module.exports = mongoose.model('User', userSchema);
