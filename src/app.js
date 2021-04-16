const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express');
const userRouter = require('./routers/user');
const bitacoraRouter = require('./routers/puntorec');
const port = process.env.PORT;
require('./db/db');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(userRouter);
app.use(bitacoraRouter);

app.listen(port, () => {
   console.log(`Server running on port ${port}`);
})