import React from 'react'
import Cart from './Cart'

export default function ModalCart({handleOpenCartModal, modalCart }) {
    return (
        <div className='w-[100vw] h-[100vh] bg-[rgba(16,22,48,0.9)] backdrop-blur-md z-[1000] fixed flex items-center justify-center gap-8' onClick={handleOpenCartModal}>
            <Cart handleOpenCartModal={handleOpenCartModal} modalCart={modalCart}/> 
        </div>
      )
    
}
