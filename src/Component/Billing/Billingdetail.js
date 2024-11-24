import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const Billingdetail = ({ onSubmit }) => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phone: '',
    email: '',
    saveInfo: false,
  });

  const [orderInfo, setOrderInfo] = useState(null); // State to store order information (order ID and message)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send POST request to the backend with billing details
      const response = await axios.post('http://localhost:5000/api/billing/', billingDetails);
  
      if (response.status === 201) {
        console.log('Billing details submitted successfully:', response.data);
  
        // Set the order information
        setOrderInfo({
          orderId: response.data.orderId, // Get the order ID from response
          message: 'Your order has been placed! Payment method will be added later.',
        });
  
        // Display success toast notification
        toast.success(`Your order has been placed! Order ID: ${response.data.orderId}`);
  
        // Optionally, you can call onSubmit if needed
        if (onSubmit) {
          onSubmit(billingDetails);
        }
      }
    } catch (error) {
      console.error('Error submitting billing details:', error);
      toast.error('Failed to submit billing details.');
    }
  };
  

  return (
    <div>
      <form
        className="w-full flex flex-col gap-9 p-4 justify-between items-center"
        onSubmit={handleSubmit}
      >
        {/* Billing Details */}
        <div className="flex flex-col justify-between items-center gap-9">
          <h2 className="text-2xl md:text-4xl font-medium leading-none text-black">
            Billing Details
          </h2>
        </div>

        {/* Form */}
        <div className="flex flex-col w-full md:w-3/4 gap-3">
          {/* First Name */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-normal text-black opacity-40">
              First Name*
            </label>
            <input
              type="text"
              name="firstName"
              value={billingDetails.firstName}
              onChange={handleChange}
              className="w-full h-12 p-2 bg-gray-100 rounded-md focus:outline-none"
              required
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-normal text-black opacity-40">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={billingDetails.companyName}
              onChange={handleChange}
              className="w-full h-12 p-2 bg-gray-100 rounded-md focus:outline-none"
            />
          </div>

          {/* Street Address */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-normal text-black opacity-40">
              Street Address*
            </label>
            <input
              type="text"
              name="streetAddress"
              value={billingDetails.streetAddress}
              onChange={handleChange}
              className="w-full h-12 p-2 bg-gray-100 rounded-md focus:outline-none"
              required
            />
          </div>

          {/* Apartment, floor, etc. */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-normal text-black opacity-40">
              Apartment, floor, etc. (optional)
            </label>
            <input
              type="text"
              name="apartment"
              value={billingDetails.apartment}
              onChange={handleChange}
              className="w-full h-12 p-2 bg-gray-100 rounded-md focus:outline-none"
            />
          </div>

          {/* Town/City */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-normal text-black opacity-40">
              Town/City*
            </label>
            <input
              type="text"
              name="city"
              value={billingDetails.city}
              onChange={handleChange}
              className="w-full h-12 p-2 bg-gray-100 rounded-md focus:outline-none"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-normal text-black opacity-40">
              Phone Number*
            </label>
            <input
              type="text"
              name="phone"
              value={billingDetails.phone}
              onChange={handleChange}
              className="w-full h-12 p-2 bg-gray-100 rounded-md focus:outline-none"
              required
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-normal text-black opacity-40">
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              value={billingDetails.email}
              onChange={handleChange}
              className="w-full h-12 p-2 bg-gray-100 rounded-md focus:outline-none"
              required
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              name="saveInfo"
              checked={billingDetails.saveInfo}
              onChange={handleChange}
              className="w-6 h-6 bg-red-500 rounded-md"
            />
            <label className="text-lg font-normal text-black">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>

      {/* Display order confirmation after successful submission */}
      {orderInfo && (
        <div className="mt-4">
          <p className="text-xl font-bold text-green-600">Order ID: {orderInfo.orderId}</p>
          <p className="text-lg">{orderInfo.message}</p>

        
        </div>
      )}
    </div>
  );
};

export default Billingdetail;
