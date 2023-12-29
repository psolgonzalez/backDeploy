const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const usersRouter = require('./routes/users');
require('./models/conexion');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors()); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
  res.send('Hola Mundo');
});

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {
  console.error('Error en el manejo de errores:', err);
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;
