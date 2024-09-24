import React from 'react'

export const Newarrival = () => {
  return (
    

<div className="m-3">

{/* Section Header */}
<div className="grid grid-cols-1 gap-5">
  {/* Badge with rectangle */}
  <div className="flex items-center gap-4">
    <div className="w-5 h-10 bg-red-600 rounded"></div>
    <p className="text-red-600 text-[16px] font-semibold">Featured</p>
  </div>
  <h1 className="text-[36px] font-semibold tracking-wide text-black">New Arrival</h1>
</div>

{/* Main Grid Layout for Images */}
<div className="grid grid-cols-2 gap-8 mt-12">
  
  {/* First Item (PS5 Image Block) */}
  <div className="relative bg-black rounded-lg h-[600px]">
    {/* PS5 Image */}
    <div 
      className="absolute left-6 top-24 w-[511px] h-[511px] bg-cover bg-center" 
      style={{ backgroundImage: "url('ps5-image.png')" }} // React-style inline style
    ></div>
    
    {/* Text Block Inside PS5 Image */}
    <div className="absolute left-6 bottom-16 space-y-4 text-white">
      <h2 className="text-[24px] font-semibold">PlayStation 5</h2>
      <p className="text-sm leading-5">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
      <a href="#" className="text-[16px] font-medium underline">Shop Now</a>
    </div>
  </div>
  
  {/* Second Column (Nested Grid for Two Blocks) */}
  <div className="grid grid-rows-2 gap-8">
    
    {/* Woman's Collection Block */}
    <div className="relative bg-[#0D0D0D] rounded-lg h-[284px]">
      {/* Woman Image (mirrored) */}
      <div 
        className="absolute top-0 right-0 w-[432px] h-[286px] bg-cover bg-center transform scale-x-[-1]"
        style={{ backgroundImage: "url('attractive-woman.jpg')" }} // React-style inline style
      ></div>

      {/* Text Block for Woman's Collection */}
      <div className="absolute left-6 bottom-10 space-y-4 text-white">
        <h2 className="text-[24px] font-semibold">Women's Collection</h2>
        <p className="text-sm leading-5">Featured woman collections for all styles.</p>
      </div>
    </div>

    {/* Bottom Grid with Two Small Blocks */}
    <div className="grid grid-cols-2 gap-8">
      
      {/* Amazon Echo Block */}
      <div className="relative bg-black rounded-lg h-[284px]">
        {/* Amazon Echo Image */}
        <div 
          className="absolute inset-0 m-auto w-[190px] h-[221px] bg-cover bg-center"
          style={{ backgroundImage: "url('amazon-echo.png')" }} // React-style inline style
        ></div>
        
        {/* Amazon Echo Text */}
        <div className="absolute left-6 bottom-6 space-y-2 text-white">
          <h2 className="text-[24px] font-semibold">Speakers</h2>
          <p className="text-sm leading-5">Amazon wireless speakers with modern design.</p>
        </div>
      </div>
      
      {/* Gucci Perfume Block */}
      <div className="relative bg-black rounded-lg h-[284px]">
        {/* Circular Gradient */}
        <div className="absolute inset-0 w-[196px] h-[196px] rounded-full bg-gray-300 opacity-90 blur-[150px] m-auto"></div>
        
        {/* Perfume Text */}
        <div className="absolute left-6 bottom-6 space-y-2 text-white">
          <h2 className="text-[24px] font-semibold">Perfume</h2>
          <p className="text-sm leading-5">Gucci perfume for women.</p>
        </div>
      </div>
    </div>
    
  </div>
  
</div>
</div>

    
  )
}
