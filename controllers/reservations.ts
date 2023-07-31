const router = require('express').Router();
const Reservation = require('../models/reservation');

/* gets all reservation */
router.get('/', async (req, res) => {
  const reservations = await Reservation.find();
  res.json(reservations);
});

/* gets a reservation */
router.get('/:id', async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);
  res.json(reservation);
});

/* modifies a reservation */
router.put('/:id', async (req, res) => {
  const reservation = await Reservation.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body,
    },
    { returnDocument: 'after' }
  );
  res.json(reservation);
});

/* removes a reservation */
router.delete('/:id', async (req, res) => {
  await Reservation.findByIdAndDelete(req.params.id);
});

/* adds new reservation */
router.post('/', async (req, res, next) => {
  const reservation = new Reservation(req.body);

  reservation
    .save()
    .then((newReservation) => res.json(newReservation))
    .catch((error) => next(error));
});

module.exports = router;
