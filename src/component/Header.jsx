import React from 'react'
import Button from './Button'
import { useState } from 'react'

const Header = () => {
    const [stroke, setStroke] = useState(false)
    const handleSubmit = () => {
        console.log("clicked")
        setStroke(!stroke)
    }
  return (
    <section className='fixed w-[100%] z-[50]'>
    <div className='bg-slate-800 flex items-center justify-between px-4 py-2'>
        <h1 className='text-white text-xl font-bold'>Cloth</h1>
        <div className='hidden md:block items-center gap-32'>
            <a href="#home" className={`text-gray-300 hover:text-white transition-col md:pr-20 lg:pr-32`}>Home</a>
            <a href="#About" className={`text-gray-300 hover:text-white transition-col md:pr-20 lg:pr-32`}>About</a>
            <a href="#contact" className={`text-gray-300 hover:text-white transition-col md:pr-20 lg:pr-32`}>Contact</a>
            <a href="#footer" className={`text-gray-300 hover:text-white transition-col md:pr-20 lg:pr-32`}>Footer</a>
        </div>
        <Button className='hidden sm:block md:block bg-gray-500 text-white px-4'>Sign In</Button>
        <button className='block md:hidden sm:block' onClick={handleSubmit}>
            <div className='w-6 h-[1.5px] bg-white my-2' />
            <div className='w-6 h-[1.5px] bg-white my-2' />
            <div className='w-6 h-[1.5px] bg-white my-2' />
        </button>
    </div>
    
    <div className={`${stroke ? 'block' : 'hidden'} bg-white mt-0 text-center mt-9 md:block items-center gap-32`}>
            <a onClick={() => setStroke(false)} href="#home" className={`text-gray-300 hover:text-gray-600 transition-col md:pr-20 lg:pr-32 ${stroke ? 'block py-5' : 'hidden'}`}>Home</a>
            <a onClick={() => setStroke(false)} href="#About" className={`text-gray-300 hover:text-gray-600 transition-col md:pr-20 lg:pr-32 ${stroke ? 'block py-5' : 'hidden'}`}>About</a>
            <a onClick={() => setStroke(false)} href="#contact" className={`text-gray-300 hover:text-gray-600 transition-col md:pr-20 lg:pr-32 ${stroke ? 'block py-5' : 'hidden'}`}>Contact</a>
            <a onClick={() => setStroke(false)} href="#footer" className={`text-gray-300 hover:text-gray-600 transition-col md:pr-20 lg:pr-32 ${stroke ? 'block py-5' : 'hidden'}`}>Footer</a>
        </div>
    </section>
  )
}

export default Header