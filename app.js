const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

// app.set('view engine', 'hbs');
// app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/build')));
// ... other app.use middleware 

app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
  
  app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
  
  const gif = require('./routes/gif');
    app.use('/', gif);
  
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
    
      res.status(err.status || 500);
    });

    if (process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'));
      
        app.get('*', (req, res) => {
          res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
      }
      
  
    app.listen(process.env.PORT || 5000, function() {
      console.log("Server started on port 5000 :)");
    });
    
    
    module.exports = app;