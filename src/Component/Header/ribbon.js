import './ribbon.css'; // Create this file for styling
import React, { useState, useEffect } from "react";


const Ribbon = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("English");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all") // Example API endpoint
          .then(response => response.json())
          .then(data => {
            const countryNames = data.map(country => country.name.common);
            setCountries(countryNames);
          })
          .catch(error => console.error("Error fetching countries:", error));
      }, []);

      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

      const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
      };

  return (
    <div className="ribbon-container">
      <div className="ribbon-content">
        <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </span>
        <a href="/shop" className="shop-now">Shop Now</a>
      </div>
    
      <div className="language-selector">
      <div onClick={toggleDropdown}>
        {selectedCountry} <span className="dropdown-icon">▼</span>
      </div>
      {isOpen && (
        <ul className="dropdown">
          {loading && <li>Loading...</li>}
          {error && <li>Error loading countries</li>}
          {!loading && !error && countries.map((country, index) => (
            <li
              key={index}
              onClick={() => handleCountrySelect(country)}
              className="dropdown-item"
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>


  );
};

export default Ribbon;
