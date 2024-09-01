import React from 'react';
import './Banner.css';

const Banner = ({ bannerData }) => {
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
