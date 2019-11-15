const config = require('./config')
const express = require('express')
const bodyParser = require('body-parser')
const routesAdmin = require('./routes/admin')
const routesProfessional = require('./routes/professional')
const routesPatient = require('./routes/patient')
const routesMeasures = require('./routes/measures')


//-------------------------------------------------------

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'public')));

//Use routes
app.use('/admin',routesAdmin )
app.use('/measures',routesMeasures )
app.use('/patient',routesPatient )
app.use('/professional',routesProfessional )

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
