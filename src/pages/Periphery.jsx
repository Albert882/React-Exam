import React, { useEffect } from 'react'
import PeripheryItems from '../Components/ui/PeripheryItems'
import PeripheryCategories from '../Components/ui/PeripheryCategories'
import { useState } from 'react'
import Modal from '../Components/ui/Modal'
import PeripheryCategoriesGiver from '../Components/ui/PeripheryCategoriesGiver'
import { products } from '../dataBase/dataBase'
import Cart from '../Components/ui/Cart'


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

  const [brands, setBrands] = useState([])

  useEffect(() => {
    setBrands([])
  }, [info])

  console.log(brands);

  const uniqueFuncBrands = (elem) => {
    return [...new Set(products?.filter(item => item?.type === elem).map(item => item?.brand))]
  }


  const uniqueFuncSizes = (elem) => {
    return [...new Set(products?.filter(item => item?.type === elem).map(item => item?.size))]
  }


  const handleBrandsChange = (e) => {
      let {value, checked } = e.target
      checked ? setBrands ((prev) => [...prev, value]) : setBrands(brands.filter(item => item !== value))
  }

  return (
    <section className='flex w-full bg-gray-900'>
      <PeripheryCategories info={info} handleChangeInfo={handleChangeInfo} className='flex flex-col w-[20%] h-auto'/>
      <PeripheryCategoriesGiver givePrice={givePrice} info={info} handleOpenPriceInterface={handleOpenPriceInterface} handleOpenBrandInterface={handleOpenBrandInterface} uniqueFuncBrands={uniqueFuncBrands} giveBrand={giveBrand} handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} brands={brands} setBrands={setBrands} handleBrandsChange={handleBrandsChange} />
      <PeripheryItems info={info} handleOpenModal={handleOpenModal} handleChangeInfoId={handleChangeInfoId} brands={brands} className='flex flex-col w-[60%]'/>
      <Cart className="flex w-[30%] p-8"/>
      <Modal modal={modal} handleOpenModal={handleOpenModal} infoId={infoId} info={info}/>
    </section>
  )
}
