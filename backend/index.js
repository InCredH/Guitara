var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser')

// import dotenv from 'dotenv';
require('dotenv').config();

//import routes
var authRoutes = require('./routes/auth');
var db  = require('./models/User');


//app
const app = express()
app.use(express.static('public'));

//connecting to backend
const connectionParams={
  useNewUrlParser:true,
  useUnifiedTopology:true,
};
try{
  mongoose.connect(process.env.MONGO_URI,connectionParams);
  console.log("Connected to Database Sucessfully");
}
catch(error){
  console.log(error);
  console.log('Could not connect to database')
}
  
  // listen to port
  app.listen(process.env.PORT, () => {
    console.log('listening for requests on port', process.env.PORT);
  })
  

//middlewares
app.use(bodyParser.json());
app.use(cors());

//routes middleware
app.use('/api', authRoutes);

