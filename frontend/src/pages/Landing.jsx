import React from 'react'
import landing2 from '../assets/landing2.jpg';
import Navbar from '../components/Navbar';
const Landing = () => {
  return (
  
        <div className='relative w-full  px-5 flex items-center justify-center pb-10'>
            <div className='relative w-full h-[70vh]'>
                <img src={landing2} alt="Landing" className='w-full h-full object-cover rounded-2xl' />
                <div className='absolute inset-0 rounded-2xl bg-blue-950/40'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
                    <h1 className='text-7xl font-bold mb-4'>Welcome to Your Real Estate Co.</h1>
                    <p className='text-2xl mb-6 font-thin'>Find the perfect property in Mumbai, sell with confidence, or rent with ease.</p>
                    <button className='bg-orange-400 text-white text-xl px-20 py-2 mt-5 rounded-3xl hover:bg-orange-500 transition duration-300'>Search</button>  
                </div>
            </div>
        </div>
  )
}

export default Landing
