import React from 'react'
import { products } from './dataBase/dataBase'
import { v4 as uuidv4 } from 'uuid';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Blogs from './pages/Blogs';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/ui/Navbar';

function App() {


  console.log(products);
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/shop' element={ <Shop/> }/>
        <Route path='/about' element={ <About/> }/>
        <Route path='/blogs' element={ <Blogs/> }/>
      </Routes>
    </div>
  )
}

export default App