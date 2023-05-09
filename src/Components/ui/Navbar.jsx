import React, { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { CiShoppingBasket, CiUser }from 'react-icons/ci'
import {FaUserFriends} from "react-icons/fa"
import { useSelector } from 'react-redux';

export default function Navbar({handleOpenCartModal, handleOpenLogModal }) {

    const {pathname} = useLocation();
    const activeLink = ({isActive}) => ({color: isActive ?  "" : null})
    const [compHover,setCompHover] = useState(false)
    const [helpHover,setHelpHover] = useState(false)
    function handleHover() {
        setCompHover(!compHover)
    }
    function handleHelpHover () {
        setHelpHover(!helpHover)
    }

    const { cartItems } = useSelector(state => state.cart)

    console.log(cartItems);


  return (
    <header className='w-full h-[90px] flex justify-center px-24' style={{background: pathname === "/readybuilds" ? "#0F162F" : null}}>
        <nav className='w-[75%] h-full grid-cols-3 grid'>
            <div className='flex items-center'>
                <NavLink to="/" className='text-2xl text-white uppercase font-medium'>
                    <img src="https://lightflightpc.ru/build/assets/logo-light.7c2bd46f.webp" className=' w-[225px] ' alt="" />
                </NavLink>
            </div>
            <ul className='flex items-center justify-center gap-6 font-medium '>
                <li onMouseEnter={() => handleHover()} onMouseLeave={() => handleHover()}><NavLink to="/" className='text-white relative'>КОМПЮТЕРЫ</NavLink>
                    <ul>
                        <li>
                            <Link to="/readybuilds">
                            <div className={compHover ? 'bg-white hover:bg-slate-200 rounded-2xl p-3 pb-0 z-10 w-[350px] flex flex-col gap-3 items-start h-[235px] absolute' : "hidden"}>
                                <h2 className='text-[#ff2f6d] text-2xl'>Готовые Сборки</h2>
                                <p className='text-gray-500'> Готовые компьютеры, собранные <br />  профессионалами LightFlight </p>
                                <img className='w-[200px] h-[200px] absolute -bottom-12' src="https://lightflightpc.ru/build/assets/dropdown-pc-1.583c9bad.svg" alt="" />
                            </div> 
                            </Link>
                        </li>
                    </ul>
                </li>
                <li><NavLink to="/periphery" className='text-white' style={activeLink}>ПЕРИФЕРИЯ</NavLink></li>
                <li onMouseEnter={() => handleHelpHover()} onMouseLeave={() => handleHelpHover()}><NavLink to="/about" className='text-white' style={activeLink}>ПОМОЩЬ</NavLink>
                    <ul className='z-20 w-auto h-auto'>
                    <li>
                        <div className={helpHover ? 'bg-white hover:bg-slate-200 rounded-2xl p-3 pb-0 z-10 w-[350px] flex flex-col gap-3 items-start h-[235px] absolute' : "hidden"}>
                        <div>
                            <div></div>
                        </div>
                        </div>
                    </li>
                    </ul>
                </li>
                <li><NavLink to="/blogs" className='text-white' style={activeLink}>О НАС</NavLink></li>
            </ul>
            <div className='flex items-center justify-end gap-3'>
                <button className='px-8 py-1 text-white font-medium'>Contact</button>
                <div onClick={handleOpenCartModal} className=' relative'>
                    <CiShoppingBasket className='text-white w-7 h-7 cursor-pointer'/>
                    {
                    cartItems.length > 0 ? <div className='w-4 h-4 bg-red-500 rounded-md absolute top-0 right-0 flex items-center justify-center text-white text-sm cursor-pointer'>{cartItems.length}</div> : null
                    }
                </div>
                <button onClick={handleOpenLogModal}><CiUser className='text-white w-7 h-7'/></button>
            </div>
        </nav>    
    </header>
    )
}
