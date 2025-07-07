import React, { useState } from 'react'

const Navbar = () => {

    const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className='flex justify-around text-2xl p-3 text-white bg-black/90' >
      <div className='text-3xl'>
        <h1>🏬 Your Real Estate Co.</h1>
      </div>

      <ul className='flex gap-8'>
        <li className='relative'>
            <button onClick={()=> setOpenDropdown(!openDropdown)}>
                Buy ⇓
            </button>


            {openDropdown && (
                <ul className='absolute top-8 mt-2 w-40 rounded-md shadow-lg bg-indigo-100 text-black text-xl p-2'>
                    <li className='px-3 hover:bg-blue-200 rounded-md'>Newly Constructed</li>
                    <li className='px-3 hover:bg-blue-200 rounded-md'>Resale</li>
                </ul>
            )}
        </li>
        <li>Rent</li>
        <li>Home Loan Calculator</li>
        <li>Advisories</li>
      </ul>
    </div>
  )
}

export default Navbar
