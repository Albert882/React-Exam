import React from 'react'
import { NavLink } from 'react-router-dom';
import { TbPictureInPicture } from 'react-icons/tb'

export default function PeripheryCategories() {

  const handleBorderChange = () => {
    
  }

  return (
    <div className='h-full w-[13%] bg-[#1a223f] flex flex-col gap-8 p-5'>
      <NavLink to="/" className='text-2xl text-white uppercase font-medium'>
        <img src="https://lightflightpc.ru/build/assets/logo-light.7c2bd46f.webp" className=' w-[200px] ' alt="" />
      </NavLink>
      <ul>
      <li className='flex items-center gap-3'><div className='w-[55px] h-[55px]' style={{border: 'rgb(100,217,252) linear-gradient(165deg, rgba(100,217,252,1) 0%, rgba(233,81,128,1) 100%)'}}><TbPictureInPicture className='text-white w-[80%] h-[80%]'/></div><a href="" className='text-white font-semibold'>КОВРИКИ</a></li>
      </ul>
    </div>
  )
}
