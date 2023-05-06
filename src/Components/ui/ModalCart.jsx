import React from 'react'
import Cart from './Cart'

export default function ModalCart({handleOpenCartModal, }) {
    return (
        <div className='w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.9)] z-[1000] fixed flex items-center justify-center gap-8' onClick={handleOpenCartModal}>
            <Cart handleOpenCartModal={handleOpenCartModal}/>  
        </div>
      )
    
}
