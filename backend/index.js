var express = require('express');
//app
const app = express()
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser')

var morgan = require('morgan')
morgan.format('myFormat', '[:date[clf]] ":method :url" :status :res[content-length] - :response-time ms');
app.use(morgan('tiny'));

'use strict';

// import dotenv from 'dotenv';
require('dotenv').config();


//import routes
var db  = require('./models/User');
var authRoutes = require('./routes/auth');
var blogRoutes = require('./routes/crawl');

var dbpost  = require('./models/Post');
var postRoutes = require('./routes/createPost');



app.use(express.static('public'));
const corsOptions = {
  origin: "*",
};

//middlewares
app.use(bodyParser.json());
app.use(cors(corsOptions));


//routes middleware
app.use('/api', authRoutes);
app.use('/api', blogRoutes);
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
  console.log("Error connecting");
  console.log('Could not connect to database')
}
  
  // listen to port
  app.listen(process.env.PORT, () => {
    console.log('listening for requests on port', process.env.PORT);
  })


