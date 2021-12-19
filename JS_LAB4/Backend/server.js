const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const bookRoute = require('./routes/book');

const app = express();

const url ="<Enter Mongo URL>";
app.use(bodyParser.json());


app.use(cors())

app.use('/book', bookRoute)

mongoose.connect(url,)   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
 app.listen(3001,()=>{
     console.log("app running ")
 })

