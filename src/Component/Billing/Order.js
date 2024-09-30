import React from 'react'

const Order = () => {
  return (
    <div className="w-full md:w-[527px] flex flex-col gap-8 mt-[199px]">
    {/* Item 1 */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-200"></div> {/* Product Image */}
        <span className="text-lg font-normal">LCD Monitor</span>
      </div>
      <span className="text-lg font-normal">$650</span>
    </div>

    {/* Item 2 */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-200"></div> {/* Product Image */}
        <span className="text-lg font-normal">H1 Gamepad</span>
      </div>
      <span className="text-lg font-normal">$1100</span>
    </div>

    {/* Subtotal */}
    <div className="flex justify-between">
      <span className="text-lg font-normal">Subtotal:</span>
      <span className="text-lg font-normal">$1750</span>
    </div>

    {/* Shipping */}
    <div className="flex justify-between">
      <span className="text-lg font-normal">Shipping:</span>
      <span className="text-lg font-normal">Free</span>
    </div>

    {/* Total */}
    <div className="flex justify-between">
      <span className="text-lg font-normal">Total:</span>
      <span className="text-lg font-normal">$1750</span>
    </div>
  </div>
  )
}

export default Order