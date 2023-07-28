// db.js
const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/task_manager', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
  }
}

module.exports = connectToDatabase;
