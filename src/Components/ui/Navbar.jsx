import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiShoppingBasket, CiUser }from 'react-icons/ci'

export default function Navbar() {

    const activeLink = ({isActive}) => ({color: isActive ?  "red" : null})


  return (
    <header className='w-[75%] h-[90px] flex justify-center px-24'>
        <nav className='w-full h-full grid-cols-3 grid'>
            <div className='flex items-center'>
                <NavLink to="/" className='text-2xl text-white uppercase font-medium'>
                    <img src="https://lightflightpc.ru/build/assets/logo-light.7c2bd46f.webp" className=' w-[225px] ' alt="" />
                </NavLink>
            </div>
            <ul className='flex items-center justify-center gap-6 font-medium '>
                <li><NavLink to="/" className='text-white' style={activeLink}>КОМПЮТЕРЫ</NavLink></li>
                <li><NavLink to="/periphery" className='text-white' style={activeLink}>ПЕРИФЕРИЯ</NavLink></li>
                <li><NavLink to="/about" className='text-white' style={activeLink}>ПОМОЩЬ</NavLink></li>
                <li><NavLink to="/blogs" className='text-white' style={activeLink}>О НАС</NavLink></li>
            </ul>
            <div className='flex items-center justify-end'>
                <button className='px-8 py-1 text-white font-medium'>Contact</button>
                <button><CiShoppingBasket className='text-white w-7 h-7'/></button>
                <button><CiUser className='text-white w-7 h-7'/></button>
            </div>
        </nav>    
    </header>
    )
}
