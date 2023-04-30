import React from 'react'
import PeripheryItems from '../Components/ui/PeripheryItems'
import PeripheryCategories from '../Components/ui/PeripheryCategories'

export default function Periphery() {
  return (
    <section className='flex w-full bg-gray-900'>
      <PeripheryCategories className='flex flex-col w-[20%]'/>
      <PeripheryItems className='flex flex-col w-[60%]'/>
    </section>
  )
}
