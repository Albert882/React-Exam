import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/ui/Navbar'
import Footer from '../Components/ui/Footer'

export default function Layout({handleOpenCartModal, handleOpenLogModal}) {
  return (
    <>
        <Navbar  handleOpenCartModal={handleOpenCartModal} handleOpenLogModal={handleOpenLogModal}/>
        <Outlet/>
        <Footer/>
    </>
    )
}
