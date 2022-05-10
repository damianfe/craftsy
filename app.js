var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* Un middleware que nos permite usar verbos HTTP como PUT o DELETE en lugares donde el cliente no lo
soporta. */
const methodOverride = require('method-override');


/* Importando el archivo  a la carpeta de rutas. */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Un middleware que registra las solicitudes a la consola. */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

/* Diciéndole a la aplicación que use indexRouter para cualquier solicitud que comience con `/`. */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);


/* app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','index.html')));
app.get('/product-detail',(req,res) => res.sendFile(path.resolve(__dirname,'views','productDetail.html')));
app.get('/product-cart',(req,res) => res.sendFile(path.resolve(__dirname,'views','productCart.html')));
app.get('/register',(req,res) => res.sendFile(path.resolve(__dirname,'views','register.html')));
app.get('/login',(req,res) => res.sendFile(path.resolve(__dirname,'views','login.html'))); */

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
