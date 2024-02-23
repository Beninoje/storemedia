//! required node modules
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//! Additional Dependencies 
const mongoose = require('mongoose');
//? const dotenv = require('dotenv');

const hbs = require('hbs');

//! Routing modules
const indexRouter = require('../Routes/index');
const mediaRouter = require('../Routes/media');
const providerRouter = require('../Routes/provider');

const app = express();

//! link to .env file if not in production mode
if(process.env.NODE_ENV !== 'production')
{
  require('dotenv').config();
}


//! db connection - must be after express app instantiated
mongoose.connect(process.env.MONGO_DB,{})
.then((res)=>{console.log('Connected to MongoDB')})
.catch((err)=>{console.log(`Error connecting: ${err}`)})


//! view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, '../Views/components/'));
hbs.registerPartials(path.join(__dirname, '../Views/content/'));


hbs.registerHelper('loadPage', function (pageName) {
  console.log(pageName);
  return pageName;
});

//! middleware configuration
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

//! HBS custom helpers functions

hbs.registerHelper('selectOption', (currentValue, selectedValue) =>{
  
  let selectedProperty = '';

  if(currentValue === selectedValue){

    selectedProperty = 'selected';

  }

  return new hbs.SafeString(`<option${selectedProperty}>${currentValue}</option>`);
});
app.use('/provider', providerRouter);
app.use('/media', mediaRouter);
app.use('/', indexRouter);

//! catch 404 and forward to error handler
app.use(function(req, res, next) 
{
  next(createError(404));
});

//! error handler
app.use(function(err, req, res, next) 
{
  //! set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //! render the error page
  res.status(err.status || 500);
  res.render('error', {title: `Error: ${err.status}`, page: 'error'});
});

module.exports = app;