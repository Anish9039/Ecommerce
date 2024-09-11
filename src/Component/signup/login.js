import React from 'react'

const login = () => {
  return (
<div class=" bg-slate-200 grid xl:grid-cols-2 gap-2 p-3">

 

<div class="hidden lg:block text-base			">
<img class="block mx-auto h-screen sm:mx-0 sm:shrink-0 ml-3 p-1 " src="https://i.imghippo.com/files/jwWlC1725962285.png" alt="Woman's Face" />

</div>

  <div className='flex justify-center p-6 mt-18'>
    <div>
    <h1 className='block text text-4xl p-2' >Create an Account</h1>
    <p  className='block text-2xl p-2' >Enter your details</p>

 <div className='p-3'>
    <form>


    <label class="relative block mb-4">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
  </span>
  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Name" type="text" name="search"/>
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

<div className='  bg-red-600 h-10 block mb-3 '>
    <button className=" justify-center ml-[80px] p-2 font-mono	text-white		 ">Create Account</button>
    </div>

    <div className="bg-slate-50 h-10 flex items-center border border-black ">
  <button className="flex items-center justify-center ml-[60px] p-2 font-mono">
    <FaGoogle className="mr-2" /> {/* Adds margin to the right of the icon */}
    Signup with Google
  </button>
  
</div>

<div className='mt-2' >Already Have an Account? <span className='underline underline-offset-1 cursor-pointer		 ' >Login</span></div>



    </div>

    </div>
  </div>
</div>
  )
}

export default login