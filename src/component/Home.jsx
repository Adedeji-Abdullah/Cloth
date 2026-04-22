import React from 'react'

const Home = () => {
  return (
    <div id='home' className='h-[110vh] bg-slate-900 bg-cover bg-center pt-10 mx-auto'>
      <img src="/hero.jpg" className='block mt-10 items-center mx-auto' width={124} height={80} alt="" />
        <h1 className='text-6xl lg:text-7xl font-bold text-white text-center'>Welcome to Our Store</h1>
        <p className='text-3xl lg:font-semibold lg:text-4xl lg:text-slate-600 text-gray-100 text-center pt-14'>Discover the latest textile trends</p>
        <div id='btnfake' className='mx-auto items-center flex justify-center'>
        <button className='inline ml-5 bg-blue-500 hover:bg-blue-700 items-center mt-40 py-4 rounded-2xl box- text-white font-bold py-2 px-4 rounded'>
          Check out our collection
        </button>
        <p className='inline text-3xl pl-32 pt-40'>⬇️</p>
        </div>
    </div>
  )
}

export default Home