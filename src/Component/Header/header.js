import React, { useState } from 'react';
import './header.css'; // External CSS file
import { IoSearch } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Ribbon from './ribbon';
import Sidebar from './Sidebar';
import Banner from './Banner';



export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { name: "Home", link: "/" },
        { name: "Contact", link: "/contact" },
        { name: "About", link: "/about" },
        { name: "Admin", link: "/Aadmin" },
        { name: "Sign Up", link: "/signup" }
    ];

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
      <div className='container'>
        <Ribbon />
        
        <nav className="navbar">
            <div className="navbar__logo">Exclusive</div>
            <div className="navbar__toggle" onClick={toggleMenu}>
                <span className="navbar__toggle-line"></span>
                <span className="navbar__toggle-line"></span>
                <span className="navbar__toggle-line"></span>
            </div>
            <div className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
                {menuItems.map((item, index) => (
                    <a key={index} href={item.link} className="navbar__link">
                        {item.name}
                    </a>
                ))}
            </div>

            <div className='Search__bar'>
          
            <input
              type="text"
              placeholder="What are you looking for?"
              className="search-input"
            />
              <IoSearch className='search__icon' />
      

              <div className="icon-container">
              <div className="icon-wrapper cart-icon">
                <CiShoppingCart />
              </div>
              <div className="icon-wrapper favorite-icon">
                <MdOutlineFavoriteBorder />
              </div>
            </div>


            </div>
           
         

           <div>


           </div>


        </nav>

        <div style={{ display: 'flex', margin: '7px' }}>
      <Sidebar categories={categories} />
      <Banner bannerData={bannerData} />
    </div>

        </div>
        
    );
}
