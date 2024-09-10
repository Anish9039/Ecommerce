'use server'

import React from 'react'

const signup = () => {
  return (
<div class=" bg-slate-200 grid xl:grid-cols-2 gap-2 p-3">

 

<div class="hidden lg:block">
<img class="block mx-auto h-screen sm:mx-0 sm:shrink-0 ml-3 p-1 " src="https://i.imghippo.com/files/jwWlC1725962285.png" alt="Woman's Face" />

</div>

  <div className='flex justify-center p-10 mt-18'>
    <div>
    <h1 className='block text text-4xl p-2' >Create an Account</h1>
    <p  className='block text-2xl p-2' >Enter your details</p>

 <div className='p-3'>
    <form>
    <label class="block p-4">
    <input class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 "/>

  </label>

  <label class="block">
    <input class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>

  </label>
    </form>
    </div>

    </div>
  </div>
</div>
  )
}

export default signup