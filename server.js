var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var session = require('express-session');
var log4js = require('log4js');
var db = require('./config/db');

var app = express();
/**
 * ===============================@description:配置文件的设定====================================
 */
/*设置session*/
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('.html', ejs.__express);

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*设置Api的版本*/
var apiUrl = "/api/v1";

/**
 * ===============================@description:router路由路径的设定====================================
 */
//view router
var login = require('./routes/login');
var routes = require('./routes/index');
//api router
var curse = require('./routes/api/curse');
var student = require('./routes/api/student');
app.use('/login', login);
app.use('/', routes);
app.use(apiUrl + '/student', student);
app.use(apiUrl + '/curse', curse);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
