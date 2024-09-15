const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    netRate: { type: Number, required: true },
    discountedRate: { type: Number, required: true },
    rating: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
