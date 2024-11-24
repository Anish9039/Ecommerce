const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Products = require('./Models/product.js');
const User = require('./Models/auth.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./middleware/mid');
const billing = require('./Routes/Billing.js');  // Correct import of the billing route
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/product', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


// Routes
app.use('/api/auth', require('./Routes/auth.js'));  // Your authentication routes
app.use('/api/billing', billing); // Ensure this is correct

// Example: Add product route
app.post('/add', (req, res) => {
  const { name, image, netRate, discountedRate, rating } = req.body;

  if (!name || typeof name !== 'string' || !image || typeof image !== 'string' || 
      !netRate || netRate <= 0 || !discountedRate || discountedRate <= 0 || 
      discountedRate > netRate || !rating || rating < 0 || rating > 5) {
    return res.status(400).json({ message: 'Invalid product data' });
  }

  // Proceed to save product if validation passes
  Products.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
});

// Example: Get products route
app.get('/get', (req, res) => {
  const productData = req.body; // Directly use req.body

  Products.find(productData)
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err)); // Send a 400 error if validation fails
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
