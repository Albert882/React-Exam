import React from 'react'
import { products } from '../../dataBase/dataBase'
import { v4 as uuidv4 } from 'uuid';


export default function PeripheryItems() {
  return (
    <div className='flex flex-col w-[60%]'>
        {
        products.map((item) => {
            return (
                <div className='w-[65%] bg-[#1a223f] h-[65px]' key={item?.id}>
                    <div className='w-[65%] h-full flex'>
                        <img src={item?.image} alt="" />
                        <p className='text-white'>{item?.title}</p>
                    </div>
                    <div className='w-[25%] h-full'>

                    </div>
                </div>
            )
        })
        }
    </div>
  )
}
