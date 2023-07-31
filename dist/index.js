"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const { PORT } = require('./utils/config');
const app = express();
/* routers */
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const reservationsRouter = require('./controllers/reservations');
/* middlewares */
const errorHandler = require('./middlewares/errorHandler');
app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/reservations', reservationsRouter);
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
