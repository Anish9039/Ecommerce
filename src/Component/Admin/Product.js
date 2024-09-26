import React, { useState } from 'react';
import axios from 'axios';

function Product() {

    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputs.name || !inputs.image || !inputs.netRate || !inputs.discountedRate || !inputs.rating) {
            console.log('All fields are required');
            return;
        }

        axios.post('http://localhost:5000/add', inputs)
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err));
    };
  return (
    <form onSubmit={handleSubmit} className="form-container">
    <h2 className="form-title">Product Details</h2>

    <div className="form-group">
        <label className="form-label">Name:</label>
        <input 
            type="text" 
            name="name" 
            value={inputs.name || ''} 
            onChange={handleChange} 
            className="form-input"
            required
        />
    </div>

    <div className="form-group">
        <label className="form-label">Images:</label>
        <input 
            type="text" 
            name="image" 
            value={inputs.image || ''} 
            onChange={handleChange} 
            className="form-input"
            required
        />
    </div>

    <div className="form-group">
        <label className="form-label">Net Rate:</label>
        <input 
            type="number" 
            name="netRate" 
            value={inputs.netRate || ''} 
            onChange={handleChange} 
            className="form-input"
            required
        />
    </div>

    <div className="form-group">
        <label className="form-label">Discounted Rate:</label>
        <input 
            type="number" 
            name="discountedRate" 
            value={inputs.discountedRate || ''} 
            onChange={handleChange} 
            className="form-input"
        />
    </div>

    <div className="form-group">
        <label className="form-label">Rating:</label>
        <input 
            type="number" 
            name="rating" 
            value={inputs.rating || ''} 
            onChange={handleChange} 
            className="form-input"
            required
        />
    </div>

    <button type="submit" className="submit-button">
        Submit
    </button>
</form>
  )
}

export default Product