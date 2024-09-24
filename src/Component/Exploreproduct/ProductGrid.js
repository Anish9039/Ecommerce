// components/ProductGrid.js
import React from 'react';
import ProductCard from './Productcard';
const products = [
  {
    image: 'https://i.ibb.co/hfT7fk3/t-shirt.jpg',
    title: 'Speed Dry Dog Food',
    price: 30,
    rating: 4,
    reviews: 65,
    isNew: false,
    isBestSeller: false,
  },
  {
    image: 'https://i.ibb.co/hfT7fk3/t-shirt.jpg',
    title: 'CANON EOS DSLR Camera',
    price: 280,
    rating: 5,
    reviews: 105,
    isNew: false,
    isBestSeller: true,
  },
  {
    image: 'https://i.ibb.co/hfT7fk3/t-shirt.jpg',
    title: 'ASUS ROG Gaming Laptop',
    price: 700,
    rating: 4,
    reviews: 35,
    isNew: false,
    isBestSeller: false,
  },
  {
    image: 'https://i.ibb.co/hfT7fk3/t-shirt.jpg',
    title: 'Curology Product Set',
    price: 50,
    rating: 5,
    reviews: 20,
    isNew: false,
    isBestSeller: false,
  },
  {
    image: 'https://i.ibb.co/hfT7fk3/t-shirt.jpg',
    title: 'Kids Electric Car',
    price: 200,
    rating: 4,
    reviews: 12,
    isNew: false,
    isBestSeller: false,
  },
  {
    image: 'https://i.ibb.co/hfT7fk3/t-shirt.jpg',
    title: 'Jr. Zoom Soccer Cleats',
    price: 100,
    rating: 5,
    reviews: 50,
    isNew: true,
    isBestSeller: false,
  },
  {
    image: 'https://i.ibb.co/hfT7fk3/t-shirt.jpg',
    title: 'GP11 Shooter USB Gamepad',
    price: 60,
    rating: 4,
    reviews: 10,
    isNew: true,
    isBestSeller: false,
  },
  {
    image: 'https://i.ibb.co/hfT7fk3/t-shirt.jpg',
    title: 'Quilted Satin Jacket',
    price: 150,
    rating: 5,
    reviews: 70,
    isNew: false,
    isBestSeller: false,
  },
];

const ProductGrid = () => {
  return (
    
    <div className="py-10">
    
    <div className=' rounded-sm	 h-5 w-1 p-4 m-6 bg-red-700	' >
      <div className=' ml-5 text-red-600 -mt-3  ' >
        Categories
      </div>
      </div>

        
      <h2 className="text-2xl font-bold ml-6 mb-6">Explore Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
