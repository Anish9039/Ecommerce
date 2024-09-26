// components/ProductGrid.js
import React from 'react';
import ProductCard from './Productcard';
import { useCart } from './Cartcontext';

const products = [
  {
    id: 1, // Add a unique ID
    image: 'https://i.ibb.co/hfT7fk3/t-shirt.jpg',
    title: 'Speed Dry Dog Food',
    price: 30,
    rating: 4,
    reviews: 65,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 2, // Add a unique ID
    image: 'https://i.ibb.co/hfT7fk3/t-shirt.jpg',
    title: 'CANON EOS DSLR Camera',
    price: 280,
    rating: 5,
    reviews: 105,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 3, // Add a unique ID
    image: 'https://i.ibb.co/hfT7fk3/t-shirt.jpg',
    title: 'ASUS ROG Gaming Laptop',
    price: 700,
    rating: 4,
    reviews: 35,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 4, // Add a unique ID
    image: 'https://i.ibb.co/hfT7fk3/t-shirt.jpg',
    title: 'Curology Product Set',
    price: 50,
    rating: 5,
    reviews: 20,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 5, // Add a unique ID
    image: 'https://i.ibb.co/hfT7fk3/t-shirt.jpg',
    title: 'Kids Electric Car',
    price: 200,
    rating: 4,
    reviews: 12,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 6, // Add a unique ID
    image: 'https://i.ibb.co/hfT7fk3/t-shirt.jpg',
    title: 'Jr. Zoom Soccer Cleats',
    price: 100,
    rating: 5,
    reviews: 50,
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 7, // Add a unique ID
    image: 'https://i.ibb.co/hfT7fk3/t-shirt.jpg',
    title: 'GP11 Shooter USB Gamepad',
    price: 60,
    rating: 4,
    reviews: 10,
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 8, // Add a unique ID
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

  const { addToCart } = useCart();

  return (
    // <div className='relative mx-auto max-w-[1170px] h-[768px] pt-[60px'>

    <div className="py-10">
    
    <div className=' w-5 h-10 bg-red-600 rounded m-5	' >
      <div className=' ml-5 text-red-600 -mt-3  ' >
        Categories
      </div>
      </div>

        
      <h2 className="text-2xl font-bold ml-6 mb-6">Explore Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      {products.map((product) => (
  <ProductCard key={product.id} product={product} addToCart={addToCart} />
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
