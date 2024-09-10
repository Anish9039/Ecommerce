import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../Product/ProductCard';

function Productp() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
 
      };
    
      const products = [
        { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, originalPrice: 160, imgSrc: "https://i.ibb.co/hfT7fk3/t-shirt.jpg", discount: "-40%", rating: 4, reviews: 88 },
        { id: 2, name: "AK-900 Wired Keyboard", price: 960, originalPrice: 1160, imgSrc: "https://i.ibb.co/hfT7fk3/t-shirt.jpg", discount: "-35%", rating: 4, reviews: 75 },
        { id: 3, name: "IPS LCD Gaming Monitor", price: 370, originalPrice: 400, imgSrc: "https://i.ibb.co/hfT7fk3/t-shirt.jpg", discount: "-30%", rating: 5, reviews: 99 },
        { id: 4, name: "S-Series Comfort Chair", price: 375, originalPrice: 400, imgSrc: "https://i.ibb.co/hfT7fk3/t-shirt.jpg", discount: "-25%", rating: 4, reviews: 99 },
        // Add more products as needed
      ];
    
  return (
    <div class="">
    <div className="product-carousel">
 
      <Slider {...settings}> 
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
   
    </div>
    </div>
  )
}

export default Productp