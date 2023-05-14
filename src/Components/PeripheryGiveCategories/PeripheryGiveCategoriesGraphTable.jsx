import React, { useState } from 'react'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'
import { products } from '../../dataBase/dataBase';

export default function PeripheryGiveCategoriesGraphTable({handleOpenSizeInterface,giveSize,sortRugsFromBrand,handleRugSort, handleOpenPriceInterface, givePrice, handleOpenBrandInterface, handleBrandsChange, giveBrand, uniqueFuncBrands,  handleChangeMaxPrice, handleChangeMinPrice}) {
    const uniqueBrands =  uniqueFuncBrands('GraphTable')

    const uniqueConectionType = [...new Set(products?.filter(item => item?.type === "GraphTable").map(item => item?.conectiontype))]


  return (
    <div className='min-h-screen h-auto bg-[#1a223f] hidden xl:flex flex-col gap-10 w-auto p-8'>
        <div className='w-full min-h-[48px] h-auto bg-[#ec4f7e] rounded-xl flex items-center justify-center text-lg font-semibold text-white'>
            ПЕРИВЕРИЯ
        </div>
        <div className='w-full min-h-[64px] h-auto gap-5 bg-[#1d2645] rounded-xl flex flex-col p-5'>
            <div className='flex justify-between'>
                <span className='text-white text-lg font-medium'>Цена</span>
                <button onClick={handleOpenPriceInterface} className='bg-[#263159] w-7 h-7 flex items-center justify-center rounded-lg'>
                    {
                        givePrice ? <AiOutlineUp className='text-[#8190ca]'/> :<AiOutlineDown className='text-[#8190ca]'/> 
                    }
                </button>
            </div>
            <div className='flex items-center justify-center gap-2' style={{display: givePrice ? 'flex' : 'none'}}>
            <input type="number" placeholder='1700' onChange={handleChangeMinPrice}  className=' border-none text-white outline-none bg-[#1a223f] h-[39px] rounded-lg p-3 w-[40%]' />
                    <div className='w-[30px] h-[3px] bg-[#343a52]'></div>
                <input type="number" placeholder='15600' onChange={handleChangeMaxPrice} className='border-none text-white outline-none bg-[#1a223f] h-[39px] rounded-lg p-3 w-[40%]' />
            </div>
        </div>


        <div className='w-full min-h-[64px] h-auto gap-5 bg-[#1d2645] rounded-xl flex flex-col p-5'>
            <div className='flex justify-between'>
                <span className='text-white text-lg font-medium'>Производитель</span>
                <button onClick={handleOpenBrandInterface} className='bg-[#263159] w-7 h-7 flex items-center justify-center rounded-lg'>
                    {
                        giveBrand ? <AiOutlineUp className='text-[#8190ca]'/> :<AiOutlineDown className='text-[#8190ca]'/> 
                    }
                </button>
            </div>
            <div className='flex justify-center gap-2 flex-col' style={{display: giveBrand ? 'flex' : 'none'}}>
            {
                    uniqueBrands?.map((item, index) => {
                        return (
                            <div className='flex gap-3' key={index}>
                                <input  type="checkbox" value={item} onChange={handleBrandsChange} className='bg-[#0F162F]' id={index} />
                                <label htmlFor={index} className='text-[#8190ca] font-medium'>{item}</label>
                            </div>
                        ) 
                    })
                }
            </div>
        </div>
    </div>
  )
}
