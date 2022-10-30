var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser')

// import dotenv from 'dotenv';
require('dotenv').config();

//import routes
var db  = require('./models/User');
var authRoutes = require('./routes/auth');

var dbpost  = require('./models/Post');
var postRoutes = require('./routes/createPost');

//app
const app = express()
app.use(express.static('public'));
  
  const corsOptions = {
    origin: "*",
  };

//middlewares
app.use(bodyParser.json());
app.use(cors(corsOptions));


//routes middleware
app.use('/api', authRoutes);
app.use('/api/community', postRoutes);
// app.use('/api/community', allpostRoutes)

app.get("/", (req, res) => {
  res.send("Backend is setup and running!");
});

//connencting to backend
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

