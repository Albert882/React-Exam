import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/ui/Navbar'
import Footer from '../Components/ui/Footer'

export default function Layout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
    )
}
