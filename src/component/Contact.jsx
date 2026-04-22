import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='float bg-slate-900 text-center scroll-m-16 overflow-hidden text-white'>
      <div className='pt-3 text-gray-600 font-bold'>
        <h1>Contact me</h1>
      </div>
      <div className='pt-10 lg:float-left text-slate-950 lg:flexpb-8 font-semibold md:font-bold text-2xl md:text-3xl md:mx-auto lg:ml-20 md:flex-row lg:w-full w-4/5 md:mt-16'>
        <input type="text" placeholder='Your name' className='rounded-lg my-5 pl-2 md:block ml-10'/>
        <input type="email" placeholder='Your email' className='rounded-lg my-5 pl-2 md:block ml-10'/>
        <input type="text" placeholder='Your message' className='rounded-lg my-5 pl-2 h-20 md:block ml-10'/>
        
      </div>
      <div className='pt-10 block text-white pb-20 text-2xl font-semibold ml-auto'>
          <p>Reach out to me anytime</p>
          <p>I will be here for you</p>
          <p>Till we meet then</p>
        </div>  
    </div>
  )
}

export default Contact