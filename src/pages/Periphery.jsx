import React from 'react'
import PeripheryItems from '../Components/ui/PeripheryItems'
import PeripheryCategories from '../Components/ui/PeripheryCategories'
import { useState } from 'react'
import Modal from '../Components/ui/Modal'
import PeripheryCategoriesGiver from '../Components/ui/PeripheryCategoriesGiver'

export default function Periphery() {
  const handleChangeInfo = (e) => {
    setInfo(e)
  }
  const [info, setInfo] = useState('Rug')

  const [modal, setModal] = useState(false)

  const handleOpenModal = () => {
    setModal(!modal)
  }

  const [infoId, setInfoId] = useState('')

  const handleChangeInfoId = (e) => {
    setInfoId(e)
  }

  const [givePrice, setGivePrice] = useState(true)

  const handleOpenPriceInterface = () => {
    setGivePrice(!givePrice)
  }
  const [giveBrand, setGiveBrand] = useState(true)

  const handleOpenBrandInterface = () => {
    setGiveBrand(!giveBrand)
  }
  const [giveSize, setGiveSize] = useState(true)

  const handleOpenSizeInterface = () => {
    setGiveSize(!giveSize)
  }

  const [sortRugsFromBrand, setSortRugsFromBrand] = useState([])
  const handleRugSort = (e) => {
    setSortRugsFromBrand([
      ...sortRugsFromBrand,
      e
    ])
  }

  console.log(sortRugsFromBrand);

  return (
    <section className='flex w-full bg-gray-900'>
      <PeripheryCategories info={info} handleChangeInfo={handleChangeInfo} className='flex flex-col w-[20%] h-auto'/>
      <PeripheryCategoriesGiver givePrice={givePrice} info={info} handleOpenPriceInterface={handleOpenPriceInterface} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand} sortRugsFromBrand={sortRugsFromBrand} handleRugSort={handleRugSort} handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} />
      <PeripheryItems info={info} handleOpenModal={handleOpenModal} handleChangeInfoId={handleChangeInfoId} sortRugsFromBrand={sortRugsFromBrand} className='flex flex-col w-[60%]'/>
      <Modal modal={modal} handleOpenModal={handleOpenModal} infoId={infoId}/>
    </section>
  )
}
