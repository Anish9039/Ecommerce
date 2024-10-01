import React from 'react'
import { FaHeart, FaSyncAlt, FaShoppingCart } from 'react-icons/fa';
import { CiMobile3 } from "react-icons/ci";



const catageory = () => {

    const products = [
        {imgSrc: "https://i.ibb.co/fxJxzDH/0-02-03-4ec24aefd0a7bb4c6ec6956a0dc0019c4224bb9f10f866a0f7029861df30c7ed-d018eb042fbbd2ac.jpg"}
    ]
  return (


    
    <div className='grid grid-cols sm:grid-cols-5 gap-[-44px]  ' >

<div className=" border rounded-1xl	 h-41	 w-400  p-5 m-5  ">
     <CiMobile3 style={{width: "187px", height: "192px"}} />
  
     <span className='text-center	' style={{marginLeft: "65px" }} >Phones</span>
    
     </div>

   
     <div className=" border rounded-1xl	 h-41	 w-400  p-5 m-5  ">
     <CiMobile3 style={{width: "187px", height: "192px"}} />
  
     <span className='text-center	' style={{marginLeft: "65px" }} >Phones</span>
    
     </div>

  
     <div className=" border rounded-1xl	 h-41	 w-400  p-5 m-5  ">
     <CiMobile3 style={{width: "187px", height: "192px"}} />
  
     <span className='text-center	' style={{marginLeft: "65px" }} >Phones</span>
    
     </div>

  
     <div className=" border rounded-1xl	 h-41	 w-400  p-5 m-5  ">
     <CiMobile3 style={{width: "187px", height: "192px"}} />
  
     <span className='text-center	' style={{marginLeft: "65px" }} >Phones</span>
    
     </div>

     <div className=" border rounded-1xl	 h-41	 w-400  p-5 m-5  ">
     <CiMobile3 style={{width: "187px", height: "192px"}} />
  
     <span className='text-center	' style={{marginLeft: "65px" }} >Phones</span>
    
     </div>
            


      </div>

  )
}

export default catageory
