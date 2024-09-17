import React from 'react'
import { FaGoogle } from "react-icons/fa";


const login = () => {
  return (
<div class=" bg-slate-200 grid xl:grid-cols-2 gap-2 p-3">

 

<div class="hidden lg:block text-base">
<img class="block mx-auto h-screen sm:mx-0 sm:shrink-0 ml-3 p-1 " src="https://i.ibb.co/bBmWHvY/aaaa.png" alt="Woman's Face" />

</div>

  <div className='flex justify-center p-6 mt-20'>
    <div>
    <h1 className='block text text-4xl p-2' >Login to Exclusive</h1>
    <p  className='block text-2xl p-2' >Enter your details below</p>

 <div className='p-3'>
    <form>


    <label class="relative block mb-4">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
  </span>
</label>

  <label class="relative block mb-4">
  <span class="sr-only"></span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
  </span>
  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Email Phone" type="email" name="search"/>
</label>


<label class="relative block mb-4">
  <span class="sr-only">dfsf</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
  </span>
  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="password" type="password" name="search"/>
</label>
  
  

    </form>


    <div className="h-10 flex items-center space-x-4">
  <button className="bg-red-600 px-4 py-2 font-mono text-white border border-black">
    Login
  </button>

  <button className="px-4 py-2 ml-[-6px] font-mono text-red-600">
    forgot password?
  </button>
</div>









    </div>

    </div>
  </div>
</div>
  )
}

export default login