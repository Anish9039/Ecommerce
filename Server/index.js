const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Products = require('./Models/product.js');
const User = require('./Models/auth.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./middleware/mid');



const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/product',{
});



// router.get('/', async (req, res) => {
//     try {
//       const products = await Product.find().populate('category', 'name');
//       const productsWithDiscount = products.map(product => {
//         const discountPercentage = Math.round(((product.netRate - product.discountedRate) / product.netRate) * 100);
//         return {
//           ...product.toObject(),
//           discountPercentage
//         };
//       });
//       res.json(productsWithDiscount);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });

 
app.post('/add', (req, res) => {
  const productData = req.body; // Directly use req.body

  // Create a new product with the data from the request body
  Products.create(productData)
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err)) // Send a 400 error if validation fails
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


app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;


  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({ username, email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token, userId: user._id });
  } catch (error) {
    alert('user created')
  }

});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with token and user ID
    return res.json({ message: 'Login successful', token, userId: user._id });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});




app.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'You have access to this route' });
});

  
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });

