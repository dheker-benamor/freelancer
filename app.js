var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


var logger = require('morgan');
var cors = require('cors');


var indexRouter = require('./routes/index');
var ProjectRouter = require('./routes/Project');
var FreelancerRouter = require('./routes/Freelancer');


var app = express();
app.use(cors());
app.use(bodyParser.json());




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");

    next();
});


app.use('/', indexRouter);
app.use('/project', ProjectRouter);
app.use('/freelancer', FreelancerRouter);



module.exports = app;
