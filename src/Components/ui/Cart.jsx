import React from 'react'
import {RiEmotionSadLine} from "react-icons/ri"
import {CiShoppingBasket} from "react-icons/ci"

export default function Cart({handleOpenCartModal}) {
  return (
    <div className='w-[40%] h-[25vh] mt-8 p-5 text-white bg-[#1a223f] rounded-xl'>
        <div className='flex items-center h-[30%] justify-between border-b border-[#34406a] pb-5'>
            <div className='flex items-center'>
                <CiShoppingBasket className='w-9 h-9'/>
                <p className=' text-xl font-semibold'>Корзина</p>
            </div>
            <div className='w-8 flex items-center justify-center rounded-lg h-8 bg-[#293254]' >
                <button onClick={handleOpenCartModal}>X</button>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center h-[70%]'>
            <div>
                <RiEmotionSadLine className=' w-20 h-20 text-[#3f4b7a]'/>
            </div>
            <div>
                <p className=' text-lg font-semibold '>Корзина Пуста</p>
            </div>
        </div>
    </div>
  )
}
