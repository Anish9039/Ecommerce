const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Products = require('./Models/product.js');
const User = require('./Models/auth.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./middleware/mid');

require('dotenv').config();




const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/product',{
});



 
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


 
app.get('/get', (req, res) => {
  const productData = req.body; // Directly use req.body

  // Create a new product with the data from the request body
  Products.find(productData)
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err)) // Send a 400 error if validation fails
});

// app.get('/products', async (req, res) => {
//     const products = await Product.find();
//     res.json(products);
//   });

// Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/auth', require('./Routes/auth.js'));



  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });

