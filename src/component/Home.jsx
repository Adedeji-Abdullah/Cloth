import React from 'react'

const Home = () => {
  return (
    <div id='home' className='bg-[url("/hero.jpg")] bg-cover bg-center pt-10 md:-mt-10 h-[92.2vh] mx-auto'>
        <h1 className='text-6xl lg:text-7xl font-bold text-white text-center'>Welcome to Our Store</h1>
        <p className='text-3xl lg:font-semibold lg:text-4xl lg:text-slate-600 text-gray-100 text-center pt-14'>Discover the latest textile trends</p>
        <button className='inline ml-5 bg-blue-500 hover:bg-blue-700 items-center mt-40 py-4 rounded-2xl box- text-white font-bold py-2 px-4 rounded'>
          Check out our collection
        </button>
        <p className='inline text-3xl pl-32'>⬇️</p>
    </div>
  )
}

export default Home