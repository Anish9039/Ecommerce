// components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  if (!product) return null; // Handle undefined product gracefully

  const { image, title, price, rating, reviews, isNew, isBestSeller } = product;

  return (
    <div className="relative bg-white shadow-md rounded-lg p-4 transition-shadow hover:shadow-lg">
      {isNew && <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">NEW</span>}
      {isBestSeller && <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">BEST SELLER</span>}
      
      <img src={image} alt={title} className="w-full h-80 object-cover rounded-md mb-4" />
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-xl font-bold text-red-500 mb-2">${price}</p>
      
      <div className="text-sm text-yellow-400 mb-2">
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        <span className="text-gray-500"> ({reviews} reviews)</span>
      </div>
      
      <button onClick={() => addToCart(product)} className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
