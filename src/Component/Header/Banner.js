import React from 'react';
import './Banner.css';

const Banner = () => {


  const bannerData = {
    logo:"https://i.ibb.co/fxJxzDH/0-02-03-4ec24aefd0a7bb4c6ec6956a0dc0019c4224bb9f10f866a0f7029861df30c7ed-d018eb042fbbd2ac.jpg", // Placeholder logo URL
    series: "iPhone 14 Series",
    offer: "Up to 10% off Voucher",
    link: "/shop",
    image: "/", // Placeholder product image URL
    pagination: [
      { active: false },
      { active: false },
      { active: true },
      { active: false },
    ],
  };


  return (
  <div className="banner">
      <div className="banner-content">
        <img src={bannerData.logo} alt="Logo" className="banner-logo" />
        <h2>{bannerData.series}</h2>
        <h1>{bannerData.offer}</h1>
        <a href={bannerData.link} className="banner-button">
          Shop Now &rarr;
        </a>
      </div>
      <div className="banner-image">
        <img src={bannerData.image} alt="Product" />
      </div>
      <div className="pagination">
        {bannerData.pagination.map((dot, index) => (
          <span key={index} className={`dot ${dot.active ? 'active' : ''}`}></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
