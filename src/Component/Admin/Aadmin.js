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
                location.reload();  
            })
            .catch(err => console.log(err))
    }
    

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
          <h1>Welcome to the Dashboard</h1>

     <form onSubmit={handleSubmit} className='container'>
    <label> Name:
        <input 
            type="text" 
            name="name" 
            value={inputs.name} 
            onChange={handleChange} 
            className='from'
        />
    </label>

    <label> Images:
        <input 
            type="text" 
            name="image" 
            value={inputs.image} 
            onChange={handleChange} 
        />
    </label>

    <label>Net Rate:
        <input 
            type="number" 
            name="netRate" 
            value={inputs.netRate} 
            onChange={handleChange} 
        />
    </label>

    <label>Discounted rate:
        <input 
            type="number" 
            name="discountedRate" 
            value={inputs.discountedRate} 
            onChange={handleChange} 
        />
    </label>

    <label>Rating:
        <input 
            type="number" 
            name="rating" 
            value={inputs.rating} 
            onChange={handleChange} 
        />
    </label>

    <button type="submit" >
        Submit
    </button>
</form>

        </div>
      </div>
    </div>
  );
};

export default Aadmin;
