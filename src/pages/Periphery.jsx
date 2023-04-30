import React from 'react'
import PeripheryItems from '../Components/ui/PeripheryItems'
import PeripheryCategories from '../Components/ui/PeripheryCategories'
import { useState } from 'react'

export default function Periphery() {
  const handleChangeInfo = (e) => {
    setInfo(e)
  }
  const [info, setInfo] = useState('')

  console.log(info);
  return (
    <section className='flex w-full bg-gray-900'>
      <PeripheryCategories info={info} handleChangeInfo={handleChangeInfo} className='flex flex-col w-[20%]'/>
      <PeripheryItems info={info} className='flex flex-col w-[60%]'/>
    </section>
  )
}
