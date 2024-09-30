import React from 'react'
import Billingdetail from './Billingdetail'
import Order from './Order'

function Maindetail() {
  return (
    <div className=" grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 "> <Billingdetail /></div>
        <div class="row-span-3 ">   <Order /></div>

  
  </div>
  )
}

export default Maindetail