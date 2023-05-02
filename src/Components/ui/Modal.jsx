import React from 'react'
import { products } from '../../dataBase/dataBase'
import { RxCube } from 'react-icons/rx'

export default function Modal({handleOpenModal, modal, infoId}) {
  return (
    <div className='w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.9)] z-[1000] fixed flex items-center justify-center gap-8' style={{display: modal ? 'flex' : 'none'}} onClick={handleOpenModal}>
        {
            products.map((item) => {
                if (item?.id === infoId) {
                    return (
                        <div className='w-[45%] h-full bg-[#293254] p-4 rounded-xl ' onClick={e => e.stopPropagation()}>
                            <div className='flex justify-between border-b border-white h-[60px]'>
                                <div className='text-white flex gap-4 p-2'>
                                    <RxCube className='w-8 h-8'/>
                                    <p className=' font-medium text-lg'>{item?.title}</p>
                                </div>
                                <button className='text-white w-8 h-8 bg-[#34406a] rounded-lg' onClick={handleOpenModal}>X</button>
                            </div>
                            <div className='flex justify-between p-4 gap-16 h-[400px]'>
                                <div className='w-[200px] flex flex-col gap-6'>
                                    <img src={item?.image} alt="" className='w-200px h-auto' />
                                    <p className='text-white font-semibold text-base'>{item?.title}</p>
                                    <p className='text-white font-semibold text-base'>{item?.price} $</p>
                                </div>
                                <div className=' w-3/5 bg-[#34406a] rounded-xl overflow-auto bg-scroll'>
                                    <p className='text-white p-4 font-medium'>{item?.description}</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4 bg-[#34406a] rounded-lg p-4'>
                                <div className='border-b border-[#8190ca] flex flex-col p-2'>
                                    <p className='text-[#8190Ca] text-base font-medium '>Основной Цвет</p>
                                    <p className='text-white font-semibold text-[17px]'>{item?.color === null ? '----' : item?.color}</p>
                                </div>
                                <div className='border-b border-[#8190ca] flex flex-col  p-2'>
                                    <p className='text-[#8190Ca] text-base font-medium '>Подсцветка</p>
                                    <p className='text-white font-semibold text-[17px]'>{item?.backlight ? 'ЕСТЬ' : 'НЕТ'}</p>
                                </div>
                                <div className='border-b border-[#8190ca] flex flex-col  p-2'>
                                    <p className='text-[#8190Ca] text-base font-medium '>Размер Коврика</p>
                                    <p className='text-white font-semibold text-[17px]'>{item?.size === null ? '----' : item?.size}</p>
                                </div>
                                <div className='border-b border-[#8190ca] flex flex-col  p-2'>
                                    <p className='text-[#8190Ca] text-base font-medium '>Тип Покрытия</p>
                                    <p className='text-white font-semibold text-[17px]'>{item?.coating === null ? '----' : item?.coating}</p>
                                </div>
                                <div className='border-b border-[#8190ca] flex flex-col  p-2'>
                                    <p className='text-[#8190Ca] text-base font-medium '>Материал покрытия</p>
                                    <p className='text-white font-semibold text-[17px]'>{item?.material === null ? '----' : item?.material}</p>
                                </div>
                                <div className='border-b border-[#8190ca] flex flex-col  p-2'>
                                    <p className='text-[#8190Ca] text-base font-medium '>Материал основания</p>
                                    <p className='text-white font-semibold text-[17px]'>{item?.baseMaterial === null ? '----' : item?.baseMaterial}</p>
                                </div>
                                <div className='border-b border-[#8190ca] flex flex-col  p-2'>
                                    <p className='text-[#8190Ca] text-base font-medium '>Габариты (ДхШ)</p>
                                    <p className='text-white font-semibold text-[17px]'>{item?.dimensions === null ? '----' : item?.dimensions}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        }
    </div>
  )
}
