import React from 'react'
import { products } from './dataBase/dataBase'
import { v4 as uuidv4 } from 'uuid';
import Home from './pages/Home';
import Periphery from './pages/Periphery';
import About from './pages/About';
import Blogs from './pages/Blogs';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/ui/Navbar';

function App() {


  console.log(products);
  return (
    <div>
      <div className='h-screen flex items-center flex-col ' style={{background: 'rgb(25,28,54)  linear-gradient(90deg, rgba(25,28,54,1) 0%, rgba(90,144,154,1) 50%, rgba(36,74,101,1) 100%)'
      }}>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/periphery' element={ <Periphery/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/blogs' element={ <Blogs/> }/>
        </Routes>
      </div>
    </div>
  )
}

export default App