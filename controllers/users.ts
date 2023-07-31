const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

/* gets all user */
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

/* gets a user */
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

/* modifies a user */
router.put('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: 'after', // return edited user
  });
  res.json(user);
});

/* deletes a user */
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).json({});
});

/* registers a user */
router.post('/', async (req, res, next) => {
  const { password } = req.body;
  const { saltRounds } = require('../utils/constants');

  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({ ...req.body, passwordHash });
  user
    .save()
    .then((newUser) => res.json(newUser))
    .catch((error) => next(error));
});

module.exports = router;
