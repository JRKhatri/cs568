 /**
 * @ author Jyoti R. Khatri
 * @ since Sept 10 2021
 */
 
 const express = require('express');
 //const cors = require('cors');
 
 const movieRouter = require('./routes/movieRouter')
 const userRouter = require('./routes/usersRouter')
 const authRouter = require('./routes/authRouter')
 const mongoConnect = require('./utils/database').mongoConnect;

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

//app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use(authRouter);
app.use('/movies', movieRouter);
app.use('/users', userRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.json("error :could not find")
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
mongoConnect(() =>{
  app.listen(4040, () => console.log('Listening to 4040'));
})


