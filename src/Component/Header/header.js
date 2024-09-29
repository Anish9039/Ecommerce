"use server"

import React, { useState } from 'react';
import './header.css'; // External CSS file
import { IoSearch } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Ribbon from './ribbon';
import { useCart } from '../Exploreproduct/Cartcontext'
import { Link } from 'react-router-dom';



export default function Header() {
  const { cartItems } = useCart();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { name: "Home", link: "/" },
        { name: "Contact", link: "/contact" },
        { name: "About", link: "/about" },
        { name: "Sign Up", link: "/signup" }
    ];

   



    return (
      <div className=''>
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
                  <Link to="/cart">
            <CiShoppingCart />
          </Link>
                <span  >{cartItems.length}</span> {/* Display number of items */}
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
 
    </div>

        </div>
        
    );
}
