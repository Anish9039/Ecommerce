import React from 'react'

const Billingdetail = () => {
  return (
    <div className=" w-full  flex flex-col gap-9 p-4 ml-[4px] justify-between items-center ">
    {/* Billing Details */}
    <div className="flex flex-col justify-between items-center gap-9">
      <h2 className="text-4xl font-medium leading-none text-black">Billing Details</h2>
    </div>

    {/* Form */}
    <div className="flex flex-col  gap-3  ">
      {/* First Name */}
      <div className="flex flex-col gap-2">
        <label className="text-lg font-normal text-black opacity-40">First Name*</label>
        <input
          type="text"
          className="w-full h-12 p-2 bg-gray-100 rounded-md focus:outline-none"
        />
      </div>

      {/* Company Name */}
      <div className="flex flex-col gap-2">
        <label className="text-lg font-normal text-black opacity-40">Company Name</label>
        <input
          type="text"
          className="w-full h-12 p-2 bg-gray-100 rounded-md focus:outline-none"
        />
      </div>

      {/* Street Address */}
      <div className="flex flex-col gap-2">
        <label className="text-lg font-normal text-black opacity-40">Street Address*</label>
        <input
          type="text"
          className="w-full h-12 p-2 bg-gray-100 rounded-md focus:outline-none"
        />
      </div>

      {/* Apartment, floor, etc. */}
      <div className="flex flex-col gap-2">
        <label className="text-lg font-normal text-black opacity-40">
          Apartment, floor, etc. (optional)
        </label>
        <input
          type="text"
          className="w-full h-12 p-2 bg-gray-100 rounded-md focus:outline-none"
        />
      </div>

      {/* Town/City */}
      <div className="flex flex-col gap-2">
        <label className="text-lg font-normal text-black opacity-40">Town/City*</label>
        <input
          type="text"
          className="w-full h-12 p-2 bg-gray-100 rounded-md focus:outline-none"
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-2">
        <label className="text-lg font-normal text-black opacity-40">Phone Number*</label>
        <input
          type="text"
          className="w-full h-12 p-2 bg-gray-100 rounded-md focus:outline-none"
        />
      </div>

      {/* Email Address */}
      <div className="flex flex-col gap-2">
        <label className="text-lg font-normal text-black opacity-40">Email Address*</label>
        <input
          type="email"
          className="w-full h-12 p-2 bg-gray-100 rounded-md focus:outline-none"
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-4">
        <input type="checkbox" className="w-6 h-6 bg-red-500 rounded-md" />
        <label className="text-lg font-normal text-black">Save this information for faster check-out next time</label>
      </div>
    </div>

    {/* Cart Details Section */}

  </div>
  )
}

export default Billingdetail