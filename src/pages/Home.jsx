import React, { useState } from 'react'
import Hero from '../Components/ui/Hero'
import Advantages from '../Components/ui/Advantages'
import ModalCart from '../Components/ui/ModalCart'
import Marquee from '../Components/ui/Marquee'

export default function Home({handleOpenCartModal, modalCart}) {

  return (
    <>
      <Hero/>
      <Advantages/>
      <Marquee/>
    </>
    // <div></div>
  )
}
