//creating sessions
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
var activityRouter = require('./routes/activity');
var contactRouter = require('./routes/contact');
var logoutRouter = require('./routes/logout');
var newuserRouter = require('./routes/newuser');
var termsRouter = require('./routes/terms');
var loginRouter = require('./routes/login');

var dashboardRouter = require('./routes/dashboard');
// var inviteRouter = require('./routes/invite_friend'); ////this is commented out for test purposes, please leave alone - jw

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'LONG_RANDOM_STRING_HERE',
    resave: true,
    saveUninitialized:true
}));

app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/activity', activityRouter);
app.use('/contact', contactRouter);
// app.use('/contact', inviteRouter); //this is commented out for test purposes, please leave alone - jw
app.use('/logout', logoutRouter);
app.use('/newuser', newuserRouter );
app.use('/terms', termsRouter);
app.use('/dashboard', dashboardRouter);
app.use('/login', loginRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
