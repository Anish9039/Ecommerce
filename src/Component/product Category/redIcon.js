import React from 'react'
import Catageory from './catageory'

const redIcon = () => {
  return (
    <div className='row-span-3 md:row-span-4  '>
      <div className=' rounded-sm	 h-5 w-1 p-4 m-2 bg-red-700	' >
      <div className=' ml-5 text-red-600 -mt-3  ' >
        Categories
      </div>
      </div>
        <div className='text-4xl font-bold	' >
            Browse By category
        </div>
        <div>
        <Catageory/>

        </div>
            </div>
  
  
  )
}

export default redIcon
