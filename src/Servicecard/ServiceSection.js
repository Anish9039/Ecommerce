import React from 'react';

// Reusable service card component
const ServiceCard = ({ title, description, IconComponent }) => {
  return (
    <div className="flex flex-col items-center gap-4  h-auto">
      {/* Ellipse background and icon */}
      <div className="relative">
        {/* Gray circle */}
        <div className="absolute inset-0 rounded-full  opacity-30 w-24 h-24"></div>
        {/* Black circle */}
        <div className="absolute inset-1 rounded-full bg-black w-20 h-20"></div>
        {/* Icon in the center */}
        <div className="relative z-10 w-16 h-16 ml-4 mt-4 flex items-center justify-center text-white">
          <IconComponent className="w-10 h-10" />
        </div>
      </div>
      {/* Text Content */}
      <h2 className="text-lg font-semibold text-black text-center">{title}</h2>
      <p className="text-sm text-center text-gray-600">{description}</p>
    </div>
  );
};

// Services section that contains all cards
const ServicesSection = () => {
  return (
    <div className="flex justify-center items-center gap-12 py-16 bg-white">
      {/* Free and Fast Delivery */}
      <ServiceCard
        title="FREE AND FAST DELIVERY"
        description="Free delivery for all orders over $140"
        IconComponent={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 17v-6H3v6h6zm2 0h6v-6h-6v6zm0-8h6V3H11v6zm0 8V9h6v8h-6zm-2-8V3H3v6h6z"
            />
          </svg>
        )}
      />

      {/* 24/7 Customer Service */}
      <ServiceCard
        title="24/7 CUSTOMER SERVICE"
        description="Friendly 24/7 customer support"
        IconComponent={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 15a4 4 0 014-4h4a4 4 0 014 4v4h5v-4a4 4 0 00-4-4h-2V7a4 4 0 00-4-4H7a4 4 0 00-4 4v8z"
            />
          </svg>
        )}
      />

      {/* Money Back Guarantee */}
      <ServiceCard
        title="MONEY BACK GUARANTEE"
        description="We return money within 30 days"
        IconComponent={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      />
    </div>
  );
};

export default ServicesSection;
