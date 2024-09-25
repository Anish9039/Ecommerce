import React, { useState } from 'react';
import './admin.css';
import './tailwind.css';
import axios from 'axios';

const Aadmin = () => {
    const [inputs, setInputs] = useState({

    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!inputs.name || !inputs.image || !inputs.netRate || !inputs.discountedRate || !inputs.rating) {
            console.log('All fields are required');
            return;
        }
    
        axios.post('http://localhost:5000/add', inputs)
            .then(result => {
                console.log(result);
                
            })
            .catch(err => console.log(err))
    }
    
    // const Sidebar = () => {
    //     const [isCollapsed, setIsCollapsed] = useState(false); // State to manage sidebar toggle
    
    //     const toggleSidebar = () => {
    //         setIsCollapsed(!isCollapsed); // Toggle the collapsed state
    //     };

  return (
    <div>
      <div className="dashboard">
        <div className="sidebars">
          <ul>
            <li>Product</li>
            <li>Categories</li>
            <li>Orders</li>
            <li>Users</li>
          </ul>
        </div>
        <div className="content">
          <h5>Welcome to the Dashboard</h5>
          <br></br>

          <form onSubmit={handleSubmit} className='form-container'>
            <h2 className='form-title'>Product Details</h2>

            <div className='form-group'>
                <label className='form-label'>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={inputs.name} 
                    onChange={handleChange} 
                    className='form-input'
                    required
                />
            </div>

            <div className='form-group'>
                <label className='form-label'>Images:</label>
                <input 
                    type="text" 
                    name="image" 
                    value={inputs.image} 
                    onChange={handleChange} 
                    className='form-input'
                    required
                />
            </div>

            <div className='form-group'>
                <label className='form-label'>Net Rate:</label>
                <input 
                    type="number" 
                    name="netRate" 
                    value={inputs.netRate} 
                    onChange={handleChange} 
                    className='form-input'
                    required
                />
            </div>

            <div className='form-group'>
                <label className='form-label'>Discounted Rate:</label>
                <input 
                    type="number" 
                    name="discountedRate" 
                    value={inputs.discountedRate} 
                    onChange={handleChange} 
                    className='form-input'
                />
            </div>

            <div className='form-group'>
                <label className='form-label'>Rating:</label>
                <input 
                    type="number" 
                    name="rating" 
                    value={inputs.rating} 
                    onChange={handleChange} 
                    className='form-input'
                    required
                />
            </div>

            <button type="submit" className='submit-button'>
                Submit
            </button>
        </form>

        </div>
      </div>
    </div>
  );
};

export default Aadmin;
