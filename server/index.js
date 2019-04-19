const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tien1106:tien1106@cluster0-ezwgy.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }))

//Error custom handler 
// var methodOverride = require('method-override')
// app.use(methodOverride());
function errorHandler (err, req, res, next) {
    res.status(500|| res.statusCode)
    res.json({
        message: err.message,
        stack: err.stack
    });
  }
app.use(errorHandler)


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/', require('./routers/index'));
app.use('/api', require('./routers/api'));
const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log('Your app is running at '+port);
})