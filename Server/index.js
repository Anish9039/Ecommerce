const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Products = require('./Models/product.js');



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
  
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });

