"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
router.post('/', async (res, req) => {
    const { username, password } = res.body;
    if (!(username || password))
        req.status(401).json({ error: 'Username or password is missing' });
    const user = await User.findOne({ username });
    if (!user)
        req.status(404).json({ error: 'User not found' });
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch)
        req.status(401).json({ error: 'Password is incorrect' });
    else
        req.status(200).json(user);
});
module.exports = router;
