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


  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(9999999999999)

  const handleChangeMaxPrice = (e) => {
    setMaxPrice(Number(e.target.value))
  }
  const handleChangeMinPrice = (e) => {
    setMinPrice(Number(e.target.value))
  }


  useEffect(() => {
    setMinPrice(0)
    setMaxPrice(9999999999999)
  }, [info])

  useEffect(() => {
    maxPrice === 0 && setMaxPrice(9999999999999)
  }, [maxPrice])


  return (
    <section className='flex items-start w-full bg-gray-900'>
      <PeripheryCategories info={info} handleChangeInfo={handleChangeInfo} className='flex flex-col w-[20%] h-auto'/>
      <PeripheryCategoriesGiver givePrice={givePrice} info={info} handleChangeMinPrice={handleChangeMinPrice} handleChangeMaxPrice={handleChangeMaxPrice} handleOpenPriceInterface={handleOpenPriceInterface} handleOpenBrandInterface={handleOpenBrandInterface} uniqueFuncBrands={uniqueFuncBrands} giveBrand={giveBrand} handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} brands={brands} setBrands={setBrands} handleBrandsChange={handleBrandsChange} />
      <PeripheryItems minPrice={minPrice} maxPrice={maxPrice} info={info} handleOpenModal={handleOpenModal} handleChangeInfoId={handleChangeInfoId} brands={brands} className='flex flex-col w-[60%]'/>
      <div className='w-[40%] 2xl:block hidden'>
      <Cart className=" 2xl:block hidden"/>
      </div>
      <Modal modal={modal} handleOpenModal={handleOpenModal} infoId={infoId} info={info}/>
    </section>
  )
}
