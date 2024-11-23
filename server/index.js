require('dotenv').config();
const PORT = process.env.PORT || 8000;
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const recipes_router = require('./routers/recipes_router'); // new

mongoose.connect(process.env.MONGODB_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.log('DB Error:', err);
});

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// routes
app.use('/api', recipes_router); // new

app.get('/', (req, res) => {
  res.send('Welcome to our server');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});

module.exports = app;
