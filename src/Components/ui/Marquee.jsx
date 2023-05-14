import React from 'react'

export default function Marquee() {
  return (
    <section className='w-full flex flex-col gap-8 justify-center items-center bg-[#151C36] h-[202px] border-b border-[#34406c] md:h-[404px] bg-50% p-10 bg-[url("https://lightflightpc.ru/build/assets/backdrop.d70523f7.png")] mt-10'>
      <div className='text-white text-xl md:text-3xl font-semibold'>
        <p>НАШИ ПАРТНЁРЫ</p>
      </div>
      <div>
        <img src="https://lightflightpc.ru/build/assets/partners-sprite.9473356f.png" alt="" />
      </div>
    </section>
  )
}
