import React, { useState } from 'react';  // Import useState
import { FaGoogle } from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', { username, email, password });
      localStorage.setItem('token', res.data.token);
      console.log('Signup successful');
      toast.success('Login successful! Redirecting to admin...');

      navigate('/login');

    } catch (err) {
      // Display more details of the error for debugging
      console.error('Error signing up:', err.response ? err.response.data : err.message);
    }
  };
  
  

  return (
    <div className="bg-slate-200 grid xl:grid-cols-2 gap-2 p-3">
      {/* Left Side Image */}
      <div className="hidden lg:block text-base">
        <img 
          className="block mx-auto h-screen sm:mx-0 sm:shrink-0 ml-3 p-1" 
          src="https://i.ibb.co/bBmWHvY/aaaa.png" 
          alt="Woman's Face" 
        />
      </div>

      {/* Right Side Form */}
      <div className='flex justify-center p-6 mt-18'>
        <div>
          <h1 className='block text-4xl p-2'>Create an Account</h1>
          <p className='block text-2xl p-2'>Enter your details</p>

          <div className='p-3'>
            <form onSubmit={handleSignup}>
              {/* Username Input */}
              <label className="relative block mb-4">
                <span className="sr-only">Username</span>
                <input 
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                  placeholder="Name" 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} 
                  required 
                />
              </label>

              {/* Email Input */}
              <label className="relative block mb-4">
                <span className="sr-only">Email</span>
                <input 
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                  placeholder="Email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </label>

              {/* Password Input */}
              <label className="relative block mb-4">
                <span className="sr-only">Password</span>
                <input 
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                  placeholder="Password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </label>

              {/* Submit Button */}
              <div className='bg-red-600 h-10 block mb-3'>
                <button 
                  className="justify-center ml-[80px] p-2 font-mono text-white" 
                  type="submit"
                >
                  Create Account
                </button>
              </div>
            </form>

            {/* Google Signup Button */}
            <div className="bg-slate-50 h-10 flex items-center border border-black">
              <button className="flex items-center justify-center ml-[60px] p-2 font-mono">
                <FaGoogle className="mr-2" /> {/* Adds margin to the right of the icon */}
                Signup with Google
              </button>
            </div>

            {/* Login Link */}
            <div className='mt-2'>
              Already Have an Account? 
              <Link to="/login" className='underline underline-offset-1 cursor-pointer'>
                Login
              </Link>
            </div>
            <ToastContainer />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
