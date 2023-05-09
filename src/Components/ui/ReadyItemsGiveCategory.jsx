import React from 'react'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'
import { products } from '../../dataBase/dataBase'

export default function ReadyItemsGiveCategory({handleOpenNucleiInterface, handleOpenPriceInterface, givePrice, giveNuclei, uniqueFuncBrands, handleNucleiChange}) {

    const uniqueNucleis = uniqueFuncBrands('Readybuild')

  return (
    <div className='h-auto max-h-[500px] bg-[#1a223f] flex flex-col gap-10 w-[300px] p-8 rounded-xl'>
        <div className='w-full min-h-[48px] h-auto bg-[#ec4f7e] rounded-xl flex items-center justify-center text-lg font-semibold text-white'>
            Готовые Сборки
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
                <input type="text" placeholder='3500' className=' border-none bg-[#1a223f] h-[39px] rounded-lg p-3 w-[40%]' />
                    <div className='w-[30px] h-[3px] bg-[#343a52]'></div>
                <input type="text" placeholder='69500' className='border-none bg-[#1a223f] h-[39px] rounded-lg p-3 w-[40%]' />
            </div>
        </div>


        <div className='w-full min-h-[64px] h-auto gap-5 bg-[#1d2645] rounded-xl flex flex-col p-5'>
            <div className='flex justify-between'>
                <span className='text-white text-lg font-medium'>Кол-во ядер</span>
                <button onClick={handleOpenNucleiInterface} className='bg-[#263159] w-7 h-7 flex items-center justify-center rounded-lg'>
                    {
                        giveNuclei ? <AiOutlineUp className='text-[#8190ca]'/> :<AiOutlineDown className='text-[#8190ca]'/> 
                    }
                </button>
            </div>
            <div className='flex justify-center gap-2 flex-col' style={{display: giveNuclei ? 'flex' : 'none'}}>
            {
                    uniqueNucleis?.map((item, index) => {
                        return (
                            <div className='flex gap-3' key={index}>
                                <input  type="checkbox" value={item} onChange={handleNucleiChange} className='bg-[#0F162F]' id={index} />
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
