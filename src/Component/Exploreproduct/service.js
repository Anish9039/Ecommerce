import React from 'react';

const service = ({ title, description, IconComponent }) => {
  return (
    <div className="flex flex-col items-center gap-6 w-[249px] h-auto relative">
      {/* Ellipse background */}
      <div className="absolute inset-0 rounded-full bg-[#2F2E30] opacity-30"></div>
      <div className="absolute inset-4 rounded-full bg-black"></div>
      {/* Service Icon */}
      <div className="absolute inset-12">
        <IconComponent className="w-20 h-20 text-white" />
      </div>
      {/* Text Content */}
      <div className="flex flex-col items-center gap-2 z-10">
        <h2 className="text-2xl font-semibold text-black">{title}</h2>
        <p className="text-base text-center">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-auto py-16 bg-gray-50">
      <div className="flex flex-row justify-center items-center gap-8">
        {/* Free and Fast Delivery */}
        <Service
          title="FREE AND FAST DELIVERY"
          description="Free delivery for all orders over $140"
          IconComponent={() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Your icon content here */}
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
            >
              {/* Your icon content here */}
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
            >
              {/* Your icon content here */}
            </svg>
          )}
        />
      </div>
    </div>
  );
};

export default ServicesSection;
