import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
const Navbar = () => {


  return (
    <div className='flex justify-between text-2xl p-5 text-black ' >
      <div className='text-3xl text-bold flex items-center justify-center gap-1'>
        <img src={logo} alt="" className='w-15 h-10'/>
        <h1>Your Real Estate Co.</h1>
      </div>

      <ul className='flex gap-9 items-center justify-center text-xl'>
        <li>Buy</li>
        <li>Rent</li>
        <li>Home Loan Calculator</li>
        <li>Advisories</li>
      </ul>
    </div>
  )
}

export default Navbar
