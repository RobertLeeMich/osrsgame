const express = require('express');
const mongoose = require('mongoose');
const Player = require('./models/Player');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
