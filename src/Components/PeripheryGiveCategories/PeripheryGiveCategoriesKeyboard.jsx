import React from 'react'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'

export default function PeripheryGiveCategoriesKeyboard({handleOpenSizeInterface,giveSize,sortRugsFromBrand,handleRugSort, handleOpenPriceInterface, givePrice, handleOpenBrandInterface, giveBrand}) {
  return (
    <div className='win-h-screen h-auto bg-[#1a223f] flex flex-col gap-10 w-[23%] p-8'>
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
                <input type="text" placeholder='1700' className=' border-none bg-[#1a223f] h-[39px] rounded-lg p-3 w-[40%]' />
                    <div className='w-[30px] h-[3px] bg-[#343a52]'></div>
                <input type="text" placeholder='15600' className='border-none bg-[#1a223f] h-[39px] rounded-lg p-3 w-[40%]' />
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
                <div className='flex gap-3' onClick={() => handleRugSort('Asus')}>
                    <input  type="checkbox" name="asus" className='bg-[#0F162F]' id="asus" />
                    <label htmlFor="" className='text-[#8190ca] font-medium'>Asus</label>
                </div>
                <div className='flex gap-3'>
                    <input  type="checkbox" name="blizzard"  className='bg-[#0F162F]' id="blizzard"/>
                    <label htmlFor="" className='text-[#8190ca] font-medium'>Gigabyte</label>
                </div>
                <div className='flex gap-3'>
                    <input  type="checkbox" name="Corsair" className='bg-[#0F162F]' id="Corsair" />
                    <label htmlFor="" className='text-[#8190ca] font-medium'>Corsair</label>
                </div>
                <div className='flex gap-3'>
                    <input  type="checkbox" name="HyperX" className='bg-[#0F162F]' id="HyperX" />
                    <label htmlFor="" className='text-[#8190ca] font-medium'>HyperX</label>
                </div>
                <div className='flex gap-3'>
                    <input  type="checkbox" name="Logitech" className='bg-[#0F162F]' id="Logitech" />
                    <label htmlFor="" className='text-[#8190ca] font-medium'>Logitech</label>
                </div>
                <div className='flex gap-3'>
                    <input  type="checkbox" name="Razer" className='bg-[#0F162F]' id="Razer" />
                    <label htmlFor="" className='text-[#8190ca] font-medium'>Razer</label>
                </div>
                <div className='flex gap-3'>
                    <input type="checkbox" name="Thermaltake" className='bg-[#0F162F]' id="Thermaltake" />
                    <label htmlFor="" className='text-[#8190ca] font-medium'>ZET</label>
                </div>
            </div>
        </div>



        <div className='w-full min-h-[64px] h-auto gap-5 bg-[#1d2645] rounded-xl flex flex-col p-5'>
            <div className='flex justify-between'>
                <span className='text-white text-lg font-medium'>Тип Подключения</span>
                <button onClick={handleOpenSizeInterface} className='bg-[#263159] w-7 h-7 flex items-center justify-center rounded-lg'>
                    {
                        giveBrand ? <AiOutlineUp className='text-[#8190ca]'/> :<AiOutlineDown className='text-[#8190ca]'/> 
                    }
                </button>
            </div>
            <div className='flex justify-center gap-2 flex-col' style={{display: giveSize ? 'flex' : 'none'}}>
                <div className='flex gap-3'>
                    <input  type="checkbox" name="asus" className='bg-[#0F162F]' id="asus" />
                    <label htmlFor="" className='text-[#8190ca] font-medium'>Беспровдной</label>
                </div>
                <div className='flex gap-3'>
                    <input  type="checkbox" name="blizzard"  className='bg-[#0F162F]' id="blizzard"/>
                    <label htmlFor="" className='text-[#8190ca] font-medium'>Проводной</label>
                </div>
            </div>
        </div>
    </div>
  )
}
