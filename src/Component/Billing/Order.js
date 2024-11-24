import React from 'react';
import { useCart } from '../Exploreproduct/Cartcontext';
import Product from '../Admin/Product';

const Order = () => {
  const { cartItems } = useCart();

  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.netRate * item.quantity, 0);

  const subtotal = calculateSubtotal();
  const shipping = 0; // Assume free shipping for now
  const total = subtotal + shipping;

  return (
    <div className="w-full md:w-[527px] flex flex-col gap-8 mt-[50px] md:mt-[199px]">
      {cartItems.map((item, index) => (
        <div key={index} className="flex justify-between items-center flex-wrap">
  <div className="flex items-center gap-4">
  {/* Render product image */}
  <div className="w-12 h-12 bg-gray-200 flex items-center justify-center overflow-hidden rounded">
    {item.image ? (
      <img
        src={item.image}
        alt="Product"
        className="w-full h-full object-cover"
      />
    ) : (
      <span className="text-gray-500 text-sm">No Image</span> // Fallback text
    )}
  </div>
  {/* Product Name */}
  <span className="text-lg font-normal">{item.name}</span>
</div>

          <span className="text-lg font-normal">${item.netRate}</span>
        </div>
      ))}

      {/* Subtotal */}
      <div className="flex justify-between">
        <span className="text-lg font-normal">Subtotal:</span>
        <span className="text-lg font-normal">${subtotal}</span>
      </div>
   
   <hr></hr>

      {/* Shipping */}
      <div className="flex justify-between">
        <span className="text-lg font-normal">Shipping:</span>
        <span className="text-lg font-normal">Free</span>
      </div>
      <hr></hr>
      {/* Total */}
      <div className="flex justify-between">
        <span className="text-lg font-normal">Total:</span>
        <span className="text-lg font-normal">${total}</span>
      </div>
    </div>
  );
};

export default Order;
