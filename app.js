
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

mongoose.connect('mongodb://localhost:27017/block');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connnection successful')
});


var index = require('./routes/index');
var login = require('./routes/login');
var signup = require('./routes/signup');
var user = require('./routes/user');
var project = require('./routes/project');
var home = require('./routes/home');
var code = require('./routes/code');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:'12345',
  resave:false,
  saveUninitialized:true,
  cookie:{maxAge:600000}      
}));

app.use('/', index);
app.use('/login', login);
app.use('/signup', signup);
app.use('/user', user);
app.use('/project', project);
app.use('/home', home);
app.use('/code', code);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

server.listen(8000,function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
})

module.exports = app;
