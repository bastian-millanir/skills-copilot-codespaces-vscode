// Create web server application
const express = require('express');
const app = express();
const port = 3000;

// Setup body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/itdb', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Setup comment schema
const Schema = mongoose.Schema;
const commentSchema = new Schema({