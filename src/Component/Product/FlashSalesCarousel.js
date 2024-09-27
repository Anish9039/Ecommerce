import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import ProductCard from './ProductCard';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 import { useCart } from '../Exploreproduct/Cartcontext';



const ProductCarousel = () => {

  const { addToCart } = useCart();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const products = [
    {  name: "HAVIT HV-G92 Gamepad", price: 120, originalPrice: 160, imgSrc: "https://i.ibb.co/fxJxzDH/0-02-03-4ec24aefd0a7bb4c6ec6956a0dc0019c4224bb9f10f866a0f7029861df30c7ed-d018eb042fbbd2ac.jpg", discount: "-40%", rating: 4, reviews: 88 },
    {  name: "AK-900 Wired Keyboard", price: 960, originalPrice: 1160, imgSrc: "https://i.ibb.co/fxJxzDH/0-02-03-4ec24aefd0a7bb4c6ec6956a0dc0019c4224bb9f10f866a0f7029861df30c7ed-d018eb042fbbd2ac.jpg", discount: "-35%", rating: 4, reviews: 75 },
    {  name: "IPS LCD Gaming Monitor", price: 370, originalPrice: 400, imgSrc: "https://i.ibb.co/fxJxzDH/0-02-03-4ec24aefd0a7bb4c6ec6956a0dc0019c4224bb9f10f866a0f7029861df30c7ed-d018eb042fbbd2ac.jpg", discount: "-30%", rating: 5, reviews: 99 },
    {  name: "S-Series Comfort Chair", price: 375, originalPrice: 400, imgSrc: "https://i.ibb.co/fxJxzDH/0-02-03-4ec24aefd0a7bb4c6ec6956a0dc0019c4224bb9f10f866a0f7029861df30c7ed-d018eb042fbbd2ac.jpg", discount: "-25%", rating: 4, reviews: 99 },
    // Add more products as needed
  ];

  return (
    <div class="">
    <div className="product-carousel">
 
      <Slider {...settings}> 
        {products.map(product => (
          <ProductCard key={product._id} product={product} addToCart={addToCart}  />
         
        ))}
      </Slider>
      <div className="view-all-button">
        <button>View All Products</button>
      </div>
    </div>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default ProductCarousel;
