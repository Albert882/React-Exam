import React, { useEffect, useState } from 'react'
import { products } from '../../dataBase/dataBase'

export default function Hero() {
    const [infoReadyBulids, setInfoReadyBulids] = useState('NEWBIE')

    const handleChangeBuilds = (e) => {
        setInfoReadyBulids(e)
    }



  return (
    <section className='w-full h-screen flex justify-center items-center'>
        <div className='w-[65%] h-full'>
            <div className='w-[40%] h-[400px] rounded-2xl bg-white p-5'>
                <div className='flex justify-between items-center'>
                    <h2>ГОТОВЫЕ СБОРКИ</h2>
                    <button>ВСЕ СБОРКИ</button>
                </div>
                <ul className='flex gap-3'>
                    <li onClick={handleChangeBuilds('NEWBIE')}><a href="#" className="">NEWBIE</a></li>
                    <li onClick={handleChangeBuilds('STANDART')}><a href="#" className="">STANDART</a></li>
                    <li onClick={handleChangeBuilds('PRO')}><a href="#" className="">PRO</a></li>
                    <li onClick={handleChangeBuilds('ULTIMATE')}><a href="#" className="">ULTIMATE</a></li>
                    <li onClick={handleChangeBuilds('INFINITY')}><a href="#" className="">INFINITY</a></li>
                </ul>
                <div>
                {
                    products.map((item) => {
                        
                    })
                }
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    </section>
  )
}
