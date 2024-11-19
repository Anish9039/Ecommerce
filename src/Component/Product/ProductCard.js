import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductCard.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaSyncAlt, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../Exploreproduct/Cartcontext';


const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  
  return (
    
    <div 
      className="product-card" 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      <div className="product-image-container">
        {/* Display the product image */}
        <img src={product.image} alt={product.name} className="product-image" />

     
    

        {hovered && (
          <>
            <button onClick={() => addToCart(product)} className="add-to-cart-btn" >
              <FaShoppingCart   /> Add To Cart
            </button>
            <button className="icon-btn">
              <FaHeart />
            </button>
            <button className="icon-btn2">
              <FaSyncAlt />
            </button>
          </>
        )}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price"> 
          <span className="discounted-price">${product.discountedRate}</span>
          <span className="original-price">${product.originalPrice}</span>
        </p>
        <div className="rating">
          {Array.from({ length: product.rating }).map((_, i) => (
            <span key={i}>⭐</span>
          ))}
          <span>({product.reviews} reviews)</span>
        </div>
      </div>
      <div className="discount-badge">{product.discountedRate}% OFF</div>
    </div>
  );
};
const ProductList = () => {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/get')
      .then(result => {
        console.log(result.data); // Check if data is fetched correctly
        setFetchedProducts(result.data); // Store all the products in state
        setLoading(false); // Data fetched, stop loading
      })
      .catch(err => {
        console.log(err);
        setLoading(false); // Stop loading in case of an error
      });
  }, []);

  // If still loading, show a loading message
  if (loading) return <div>Loading products...</div>;

  // If no products are available, show a message
  if (!fetchedProducts.length) return <div>No products available</div>;

  return (
    <div className="product-list">
      {/* Map over the fetched products and render a ProductCard for each */}
      {fetchedProducts.map((product, _id) => (
        <ProductCard key={_id} product={product}   />
      ))}
    </div>
  );
};


export default ProductList;
