import React from 'react';
import Billingdetail from './Billingdetail';
import Order from './Order';

function Maindetail() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="w-full"> 
        <Billingdetail />
      </div>
      <div className="w-full">
        <Order />
      </div>
    </div>
  );
}

export default Maindetail;
