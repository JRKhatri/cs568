var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

//var indexRouter = require('./routes/index'); //@do not need remove
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var authRouter = require('./routes/auth');


var app = express();

// @view engine setup //@ do not need remove
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));//@do not need remove

//app.use('/', indexRouter); //@do not need remove
app.use('/login',authRouter)
app.use('/users', usersRouter);
app.use('/products', productRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // @set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // @render the error page
  // res.status(err.status || 500);
  // res.render('error');
  res.json(err)
});

//module.exports = app;
//@instead of exports 
app.listen(4000)
