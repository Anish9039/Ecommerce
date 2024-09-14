import React from 'react';
import './Sidebar.css';
import Banner from './Banner';

const Sidebar = () => {


  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="container">
    <div className="sidebar">
      <ul style={{marginLeft:"21px"}} >
        {categories.map((category, index) => (
          <li key={index}>
            {category}
            {(category === "Woman's Fashion" || category === "Men's Fashion") && (
              <span className="arrow"> &gt; </span>
            )}
          </li>
        ))}
      </ul>
    </div>
    <Banner />
  </div>

  );
};

export default Sidebar;
