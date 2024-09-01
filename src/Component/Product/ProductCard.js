import React, { useState } from 'react';
import './ProductCard.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaSyncAlt, FaShoppingCart } from 'react-icons/fa';



const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="product-card" 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
       
      <div className="product-image-container">
        <img src={product.imgSrc} alt={product.name} className="product-image" />
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
        <h3>{product.name}</h3>
        <p className="price">
          <span className="discounted-price">${product.price}</span>
          <span className="original-price">${product.originalPrice}</span>
        </p>
        <div className="rating">
          {Array.from({ length: product.rating }).map((_, i) => (
            <span key={i}>⭐</span>
          ))}
          <span>({product.reviews})</span>
        </div>
      </div>
      <div className="discount-badge">{product.discount}</div>
    </div>
  );
};

export default ProductCard;
