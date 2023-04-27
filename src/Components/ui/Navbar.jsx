import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    const activeLink = ({isActive}) => ({color: isActive ?  "red" : null})


  return (
    <header className='w-full h-[60px] flex justify-center bg-gray-800 px-24'>
        <nav className='w-full h-full grid-cols-3 grid'>
            <div className='flex items-center'>
                <NavLink to="/" className='text-2xl text-white uppercase font-medium'>
                    LOGO
                </NavLink>
            </div>
            <ul className='flex items-center justify-center gap-6 font-medium '>
                <li><NavLink to="/" className='text-white' style={activeLink}>Home</NavLink></li>
                <li><NavLink to="/shop" className='text-white' style={activeLink}>Shop</NavLink></li>
                <li><NavLink to="/about" className='text-white' style={activeLink}>About</NavLink></li>
                <li><NavLink to="/blogs" className='text-white' style={activeLink}>Blog</NavLink></li>
            </ul>
            <div className='flex items-center justify-end'>
                    <button className='px-8 py-1 bg-red-600 text-white rounded-md uppercase'>Contact</button>
            </div>
        </nav>    
    </header>
    )
}
