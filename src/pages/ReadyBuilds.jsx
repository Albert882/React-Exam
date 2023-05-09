import React, { useState } from 'react'
import NavReadyBuilds from '../Components/ui/NavReadyBuilds'
import ReadyBuildsItem from '../Components/ui/ReadyBuildsItem'
import ReadyBuildsModal from '../Components/ui/ReadyBuildsModal'
import ReadyItemsGiveCategory from '../Components/ui/ReadyItemsGiveCategory'
import { products } from '../dataBase/dataBase'

export default function ReadyBuilds() {

  const [readyBuildInfo, setReadyBuildInfo] = useState('')
  const handleChangeReadyBuildInfo = (e) => {
    setReadyBuildInfo(e)
  }

  const [infoId, setInfoId] = useState('')
  const handleChangeInfoId = (e) => {
    setInfoId(e)
  }

  const [modal, setModal] = useState(false)

  const handleOpenModal = () => {
    setModal(!modal)
  }


  const [giveNuclei, setGiveNuclei] = useState(true)

  const handleOpenNucleiInterface = () => {
    setGiveNuclei(!giveNuclei)
  }

  const [nucleis, setNucleis] = useState([])

  const uniqueFuncBrands = (elem) => {
    return [...new Set(products?.filter(item => item?.type === elem).map(item => item?.nuclei))]
  }


  const [givePrice, setGivePrice] = useState(true)

  const handleOpenPriceInterface = () => {
    setGivePrice(!givePrice)
  }

  const handleNucleiChange = (e) => {
      let {value, checked } = e.target
      checked ? setNucleis ((prev) => [...prev, value]) : setNucleis(nucleis.filter(item => item !== value))
  }

  return (
    <section className='w-full h-auto bg-[#0F162F] flex items-center justify-center'>
      <ReadyBuildsModal infoId={infoId} modal={modal} handleOpenModal={handleOpenModal} />
      <div className='w-[65%] h-auto flex flex-col justify-center gap-12'>
          <NavReadyBuilds handleChangeReadyBuildInfo={handleChangeReadyBuildInfo}/>
        <div className='w-full flex gap-24'>
          <ReadyBuildsItem readyBuildInfo={readyBuildInfo} nucleis={nucleis} handleOpenModal={handleOpenModal} handleChangeInfoId={handleChangeInfoId}/>
          <ReadyItemsGiveCategory handleOpenNucleiInterface={handleOpenNucleiInterface} giveNuclei={giveNuclei} givePrice={givePrice} handleOpenPriceInterface={handleOpenPriceInterface} handleNucleiChange={handleNucleiChange} uniqueFuncBrands={uniqueFuncBrands} />
        </div>
        </div>
    </section>
  )
}
