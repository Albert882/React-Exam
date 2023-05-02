import React from 'react'
import PeripheryItems from '../Components/ui/PeripheryItems'
import PeripheryCategories from '../Components/ui/PeripheryCategories'
import { useState } from 'react'
import Modal from '../Components/ui/Modal'

export default function Periphery() {
  const handleChangeInfo = (e) => {
    setInfo(e)
  }
  const [info, setInfo] = useState('')

  const [modal, setModal] = useState(false)
  const handleOpenModal = () => {
    setModal(!modal)
  }

  const [infoId, setInfoId] = useState('')
  const handleChangeInfoId = (e) => {
    setInfoId(e)
  }

  return (
    <section className='flex w-full bg-gray-900'>
      <PeripheryCategories info={info} handleChangeInfo={handleChangeInfo} className='flex flex-col w-[20%]'/>
      <PeripheryItems info={info} handleOpenModal={handleOpenModal} handleChangeInfoId={handleChangeInfoId} className='flex flex-col w-[60%]'/>
      <Modal modal={modal} handleOpenModal={handleOpenModal} infoId={infoId}/>
    </section>
  )
}
