import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CiShoppingBasket, CiUser }from 'react-icons/ci'
import {FaUserFriends} from "react-icons/fa"

export default function Navbar({handleOpenCartModal}) {

    const activeLink = ({isActive}) => ({color: isActive ?  "red" : null})
    const  [hover,setHover] = useState("")
  return (
    <header className='w-[75%] h-[90px] flex justify-center px-24'>
        <nav className='w-full h-full grid-cols-3 grid'>
            <div className='flex items-center'>
                <NavLink to="/" className='text-2xl text-white uppercase font-medium'>
                    <img src="https://lightflightpc.ru/build/assets/logo-light.7c2bd46f.webp" className=' w-[225px] ' alt="" />
                </NavLink>
            </div>
            <ul className='flex items-center justify-center gap-6 font-medium '>
                <li><NavLink to="/" className='text-white relative' style={activeLink}>КОМПЮТЕРЫ</NavLink>
                    <ul>
                        <li>
                            <div className='bg-white rounded-2xl p-3 pb-0 z-10 w-[350px] flex flex-col gap-3 items-start h-[235px] absolute' style={{display: 'none'}}>
                                <h2 className='text-[#ff2f6d] text-2xl'>Готовые Сборки</h2>
                                <p className='text-gray-500'> Готовые компьютеры, собранные <br />  профессионалами LightFlight </p>
                                <img className='w-[200px] h-[200px] absolute -bottom-12' src="https://lightflightpc.ru/build/assets/dropdown-pc-1.583c9bad.svg" alt="" />
                            </div> 
                        </li>
                    </ul>
                </li>
                <li><NavLink to="/periphery" className='text-white' style={activeLink}>ПЕРИФЕРИЯ</NavLink></li>
                <li><NavLink to="/about" className='text-white' style={activeLink}>ПОМОЩЬ</NavLink></li>
                <li><NavLink to="/blogs" className='text-white' style={activeLink}>О НАС</NavLink></li>
            </ul>
            <div className='flex items-center justify-end'>
                <button className='px-8 py-1 text-white font-medium'>Contact</button>
                <button onClick={handleOpenCartModal}><CiShoppingBasket className='text-white w-7 h-7'/></button>
                <button><CiUser className='text-white w-7 h-7'/></button>
            </div>
        </nav>    
    </header>
    )
}
