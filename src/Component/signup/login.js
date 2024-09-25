import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';
import { redirect } from 'react-router-dom';
import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      console.log('Login successful');
      toast.success('Login successful! Redirecting to admin...');

      navigate('/aadmin');

      
    } catch (err) {
      toast.error('Username or password is invalid');
      console.error('Error logging in', err);
      console.log('Email:', email, 'Password:', password);

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
      <div className="flex justify-center p-6 mt-20">
        <div>
          <h1 className="block text text-4xl p-2">Login to Exclusive</h1>
          <p className="block text-2xl p-2">Enter your details below</p>

          <div className="p-3">
            <form onSubmit={handleLogin}>
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

              {/* Buttons */}
              <div className="h-10 flex items-center space-x-4">
                <button
                  className="bg-red-600 px-4 py-2 font-mono text-white border border-black"
                  type="submit"
                >
                  Login
                </button>

                {/* <button className="px-4 py-2 ml-[-6px] font-mono text-red-600">
                  Forgot password?
                </button> */}
              </div>
            </form>
            <ToastContainer />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
