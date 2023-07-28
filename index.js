// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Connect to the database
require('dotenv').config();
const connectToDatabase = require('./db');
connectToDatabase();

// Mount the task routes
const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);
