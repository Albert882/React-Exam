import React, { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { CiShoppingBasket, CiUser }from 'react-icons/ci'
import {FaUserFriends} from "react-icons/fa"
import { useSelector } from 'react-redux';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

export default function Navbar({handleOpenCartModal, handleOpenLogModal }) {

    const {pathname} = useLocation();
    const activeLink = ({isActive}) => ({color: isActive ?  "#EC4F7E" : null})
    const [compHover,setCompHover] = useState(false)
    const [helpHover,setHelpHover] = useState(false)
    const [menu,setMenu] = useState(false)

    function handleMenu () {
        setMenu(!menu)
        console.log(menu);
    }

    function handleHover() {
        setCompHover(!compHover)
    }
    function handleHelpHover () {
        setHelpHover(!helpHover)
    }

    const { cartItems } = useSelector(state => state.cart)


  return (
    <header className='w-full h-[90px] flex justify-center px-12' style={{background: pathname === "/readybuilds" || pathname === "/company" || pathname === "/about" ? "#0F162F" : null}}>
        <nav className=' xl:w-[75%] w-full h-full sm:grid-cols-3 sm:grid flex justify-between '>
            <div className='flex items-center w-[170px]'>
                <NavLink to="/" className='text-2xl text-white uppercase font-medium'>
                    <img src="https://lightflightpc.ru/build/assets/logo-light.7c2bd46f.webp" className='min-w-[120px] ' alt="" />
                </NavLink>
            </div>
            <ul className='flex items-center justify-center vsm:gap-6 gap-1 font-medium '>
                <li onMouseEnter={() => handleHover()} onMouseLeave={() => handleHover()}><NavLink to="/" 
                className='hidden text-white relativ lg:block' style={activeLink}>КОМПЮТЕРЫ</NavLink>
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
                <li><NavLink to="/periphery" className='text-white hidden lg:block' style={activeLink}>ПЕРИФЕРИЯ</NavLink></li>
                <li onMouseEnter={() => handleHelpHover()} onMouseLeave={() => handleHelpHover()}><NavLink to="/about" className='text-white hidden lg:block' style={activeLink}>ПОМОЩЬ</NavLink>
                </li>
                <li><NavLink to="/company" className='text-white hidden lg:block' style={activeLink}>О НАС</NavLink></li>
            </ul>
            <div className='flex items-center justify-end gap-3'>
                <button className='px-8 py-1 text-white hidden font-medium lg:block'>Contact</button>
                <div onClick={handleOpenCartModal} className='relative vsm:block hidden'>
                    <CiShoppingBasket className='text-white w-7 h-7 cursor-pointer'/>
                    {
                    cartItems.length > 0 ? <div className='w-4 h-4 bg-red-500 rounded-md absolute top-0 right-0 flex items-center justify-center text-white text-sm cursor-pointer'>{cartItems.length}</div> : null
                    }
                </div>
                <button onClick={handleOpenLogModal}><CiUser className='text-white vsm:block hidden w-7 h-7'/></button>

                <div onClick={handleMenu} className='relative'>{menu ? <AiOutlineClose className='text-white text-4xl block lg:hidden'/> : <AiOutlineMenu className='text-white text-4xl block lg:hidden'/>}
                    <ul className={menu ? 'absolute flex flex-col gap-4 lg:hidden bg-[#0F162F] p-2 -left-8 z-50' : "hidden"}>
                    <li><NavLink to="/periphery" className='text-white font-medium block lg:hidden border-b border-[#34406c]' style={activeLink}>ПЕРИФЕРИЯ</NavLink></li>
                <li onMouseEnter={() => handleHelpHover()} onMouseLeave={() => handleHelpHover()}><NavLink to="/about" className='text-white block font-medium lg:hidden border-b border-[#34406c]' style={activeLink}>ПОМОЩЬ</NavLink>
                </li>
                <li><NavLink to="/company" className='text-white block font-medium lg:hidden border-b border-[#34406c]'>О НАС</NavLink></li>
                <div onClick={handleOpenCartModal} className='relative vsm:hidden flex gap-3 border-b border-[#34406c]'>
                    <CiShoppingBasket className='text-white w-7 h-7 cursor-pointer'/>
                    {
                    cartItems.length > 0 ? <div className='w-4 h-4 bg-red-500 rounded-md absolute top-0 right-0 flex items-center justify-center text-white text-sm cursor-pointer'>{cartItems.length}</div> : null
                    }
                <button onClick={handleOpenLogModal}><CiUser className='text-white w-7 z-50 vsm:hidden block  h-7'/></button>
                </div>
                    </ul>
                </div>
            </div>
        </nav>    
    </header>
    )
}
