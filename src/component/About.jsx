import React from 'react'

const About = () => {
  return (
    <div id='About' className='bg-slate-500 text-center scroll-m-16 text-white'>
      <h1 className='text-gray-600 font-bold pt-3'>About me</h1>
      <h1 className='font-mono pt-10 pb-8 font-semibold md:font-bold text-2xl md:text-3xl'>I'm a type of person who sells <span className='text-gray-400'>cloth</span>, <span className='lg:block'>I use to sell it in wholesale or retail</span></h1>
      <p className='text-xl mb-5'>Don't forget guys,I also do home dilivery.</p>
      <p>You can find any type of cloth with me,</p>
      <p className='pb-10'>Just message me on Whatsapp or email,there will be provided in the footer section</p>
      <div>
        <p className='text-xl text-semi-bold'>These are some clothes I have for sale:</p>
        <div className='flex items-center justify-center gap-5 flex-wrap lg:gap-48 py-20'>
          <img src="/cloth1.jpg" className='rounded-lg' width={200} height={200} alt="" />
          <img src="/cloth2.jpg" className='rounded-lg' width={200} height={200} alt="" />
          <img src="/cloth3.jpg" className='rounded-lg' width={200} height={200} alt="" />
          <img src="/cloth4.jpg" className='rounded-lg' width={200} height={200} alt="" />
          <img src="/cloth5.jpg" className='rounded-lg' width={200} height={200} alt="" />
          <img src="/cloth6.jpg" className='rounded-lg' width={200} height={200} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About