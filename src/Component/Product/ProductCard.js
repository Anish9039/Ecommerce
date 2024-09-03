import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductCard.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaSyncAlt, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [fetchedProduct, setFetchedProduct] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/get')
      .then(result => {
        console.log(result.data); // Check if data is fetched correctly
        setFetchedProduct(result.data);
      })
      .catch(err => console.log(err));
  }, []);

  const productData = fetchedProduct?.[0] || product; // Access the first item in the array or use props

  if (!productData) return <div>Loading...</div>;

  return (
    <div 
      className="product-card" 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      <div className="product-image-container">
        <img src={productData.imgSrc} alt={productData.name} className="product-image" />
        {hovered && (
          <>
            <button className="add-to-cart-btn">
              <FaShoppingCart /> Add To Cart
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
        <h3>{productData.name}</h3>
        <p className="price">
          <span className="discounted-price">${productData.price}</span>
          <span className="original-price">${productData.originalPrice}</span>
        </p>
        <div className="rating">
          {Array.from({ length: productData.rating }).map((_, i) => (
            <span key={i}>⭐</span>
          ))}
          <span>({productData.reviews})</span>
        </div>
      </div>
      <div className="discount-badge">{productData.discount}</div>
    </div>
  );
};

export default ProductCard;
