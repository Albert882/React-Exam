import React from 'react'

export default function NavReadyBuilds({handleChangeReadyBuildInfo}) {

  // const activeLink = ({isActive}) => ({border: isActive ? 'cyan' : '#1F2848'})

  return (
    <nav className='flex mt-14 bg-[#1F2848] rounded-lg overflow-y-hidden'>
        <ul className='flex gap-10 text-xl text-white p-5'>
            <li className='border-b-2' onClick={() => handleChangeReadyBuildInfo("")}><a href="#">Все</a></li>
            <li className='border-b-2' onClick={() => handleChangeReadyBuildInfo('NEWBIE')}><a href="#">NewBie</a></li>
            <li className='border-b-2' onClick={() => handleChangeReadyBuildInfo('STANDART')}><a href="#">Standart</a></li>
            <li className='border-b-2' onClick={() => handleChangeReadyBuildInfo('PRO')}><a href="#">Pro</a></li>
            <li className='border-b-2' onClick={() => handleChangeReadyBuildInfo('ULTIMATE')}><a href="#">Ultimate</a></li>
            <li className='border-b-2' onClick={() => handleChangeReadyBuildInfo('INFINITY')}><a href="#">Infinity</a></li>
        </ul>
    </nav>
  )
}
