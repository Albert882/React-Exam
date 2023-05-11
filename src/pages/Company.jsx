import React from 'react'

export default function Company() {
  return (
    <section className='w-full py-28 bg-[#0F162F] flex items-center justify-center flex-col gap-5'>
      <h1 className='text-[#c9cbffb3] font-semibold text-2xl'>О КОМПАНИИ</h1>
      <div className='w-[65%] bg-[#141B35] text-[#c9cbffb3] font-semibold text-lg flex flex-col gap-8 p-8 rounded-lg'>
          <p>Продавец:</p>
        <div>
          <p>ОГРН: 319784700398357</p>
          <p>ИНН: 781020087770</p>
          <p>Банковские реквизиты</p>
          <p>Р/с: 40802810400001299073</p>
          <p>К/с: 30101810145250000974</p>
          <p>Бик: 044525974</p>
        </div>
        <div>
          <p>Адрес: Санкт-Петербург, Свеаборгская 15.</p>
          <p>Телефон: <span className='text-white'>+7(812)565-00-69</span></p>
          <p>e-mail: <span className='text-white'>admin@lightflightpc.ru</span></p>
        </div>
      </div>
    </section>
  )
}
