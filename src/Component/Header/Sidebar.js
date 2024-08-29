import React from 'react';
import './Sidebar.css';

const Sidebar = ({ categories }) => {



  return (
    <div className="sidebar">
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category}
            {category === "Woman's Fashion" || category === "Men's Fashion" ? (
              <span className="arrow"> &gt; </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
