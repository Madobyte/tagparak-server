"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const Reservation = require('../models/reservation');
/* gets all reservation */
router.get('/', async (req, res) => {
    const reservations = await Reservation.find();
    res.json(reservations);
});
/* add new reservation */
router.post('/', async (req, res, next) => {
    const reservation = new Reservation(req.body);
    reservation
        .save()
        .then((newReservation) => res.json(newReservation))
        .catch((error) => next(error));
});
module.exports = router;
