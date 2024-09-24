import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-white">
      <div className="container mx-auto py-16 px-6">
        {/* Main Content */}
        <div className="flex justify-between items-start gap-24">
          {/* Logo and Subscribe */}
          <div className="flex flex-col items-start space-y-6">
            {/* Logo */}
            <div className="text-2xl font-bold">Exclusive</div>
            {/* Subscribe */}
            <div className="flex flex-col space-y-4">
              <p className="text-lg">Get 10% off your first order</p>
              <div className="flex items-center border border-white rounded p-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none placeholder-white text-white opacity-60 px-2"
                />
                <button className="ml-4 bg-transparent text-white">
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          {/* Support */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-medium">Support</h3>
            <div className="space-y-2">
              <p>111 Bijoy sarani, Dhaka, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>
          {/* Account */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-medium">Account</h3>
            <div className="space-y-2">
              <p>My Account</p>
              <p>Login / Register</p>
              <p>Cart</p>
              <p>Wishlist</p>
              <p>Shop</p>
            </div>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-medium">Quick Link</h3>
            <div className="space-y-2">
              <p>Privacy Policy</p>
              <p>Terms Of Use</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
          </div>
          {/* Download App */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-medium">Download App</h3>
            <p className="text-sm opacity-70">Save $3 with App New User Only</p>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white flex justify-center items-center">
                {/* QR Code */}
                <img src="path-to-qr-code" alt="QR Code" />
              </div>
              <div className="flex flex-col gap-2">
                <img src="path-to-googleplay" alt="Google Play" />
                <img src="path-to-appstore" alt="App Store" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="w-full h-px bg-white opacity-50 my-8"></div>
      {/* Bottom Bar */}
      <div className="flex justify-center items-center opacity-60 py-4">
        <div className="flex gap-4">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
        </div>
        <p className="ml-4">© Rimel 2022. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
