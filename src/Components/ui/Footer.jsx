import React from 'react'
import { SlSocialVkontakte } from "react-icons/all";

export default function Footer() {
  return (
    <footer className='w-full h-[60vh] bg-[#141B35]'>
        <div>
          <div>
            <h2 className='text-white text-lg'>ДЕЛОВЫЕ ПРЕДЛОЖЕНИЯ</h2>
            <p className='text-white w-[300px]'>Есть предложение по сотрудничеству или Вы решили создать сборку на основе личных предпочтений?</p>
            <button className='flex gap-2'><SlSocialVkontakte className='text-white text-3xl bg-blue-600 w-[30px] h-[30px] rounded-[10%]'/>Пишите Нам</button>
          </div>
        </div>
    </footer>
  )
}
