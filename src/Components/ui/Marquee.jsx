import React from 'react'

export default function Marquee() {
  return (
    <div className='flex items-center flex-col h-[52vh] w-full bg-[]'>
      <h2 className='text-white text-2xl mb-16'>РАБОТАЕМ С ЛИДЕРАМИ МНЕНИЙ</h2>
      <div className=' h-[73%] flex relative blur-sm'>
          <img src="https://lightflightpc.ru/build/assets/leaders-sprite.c266e45b.png" className='absolute left-2 top-3' alt="" />
          <img src="https://lightflightpc.ru/build/assets/leaders-sprite.c266e45b.png" alt="" />
      </div>
    </div>
  )
}
