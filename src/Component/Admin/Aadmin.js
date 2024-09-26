import React, { useState } from 'react';
import './admin.css';
import './tailwind.css';
import { Link } from 'react-router-dom';
import {  Outlet } from 'react-router-dom';


const Aadmin = () => {
   

    return (
        <div className="dashboard">
            {/* Header */}
            <div className="header">
                <nav className="header-nav">
                    <div className='logo'   >
                    <img src="https://i.imghippo.com/files/jwWlC1725962285.png" alt="img"  />
                    </div>

                    <div className='Home'>

                        

                        <a href='http://localhost:3000/' > Home </a>

                    </div>
          
                    <ul>
                        <li><a href="/">Logout</a></li>
                       
                    </ul>
                
                </nav>
            </div>

            {/* Sidebar and Content */}
            <div className="dashboard-body">
                <div className="sidebars">
                    <ul>
                <li>
                <Link to="/aadmin/product">Product</Link>
                </li>                        
                <li>Categories</li>
                        <li>Orders</li>
                        <li>Users</li>
                    </ul>
                </div>

                <div className="content">
                    <h5>Welcome to the Dashboard</h5>

                    <Outlet /> 
                 

                  

                </div>
            </div>
        </div>
    );
};

export default Aadmin;
