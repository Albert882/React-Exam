import React, { useEffect } from "react";
import { RiEmotionSadLine } from "react-icons/ri";
import { CiShoppingBasket } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { clearCartItems, incrementItemQuantity, removeFromCart } from "../../redux/features/cart-slice";
import { BiRuble } from "react-icons/all"
import { useLocation } from "react-router-dom";

export default function Cart({ handleOpenCartModal, modalCart }) {
  const dispatch = useDispatch();
  const { cartItems, cartTotal } = useSelector((state) => state.cart);

  const {pathname} = useLocation()

  return (
    <div
      className={pathname === "/periphery" ? "w-full mt-8 p-5 text-white bg-[#1a223f] rounded-xl" : " w-full lg:w-[40%] mt-8 p-5 text-white bg-[#1a223f] rounded-xl"}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center h-[80px] justify-between border-b border-[#34406a] pb-5">
        <div className="flex items-center">
          <CiShoppingBasket className="w-9 h-9" />
          <p className=" text-xl font-semibold">Корзина</p>
        </div>
        <div className="w-8 flex items-center justify-center rounded-lg h-8 bg-[#293254]">
          <button onClick={handleOpenCartModal}>X</button>
        </div>
      </div>
      <div className="flex flex-col items-start h-[200px] py-4 px-2 gap-4 overflow-y-auto border-b border-[#293254] mb-5">
        {cartItems.length ? (
          cartItems?.map((item) => {
            return (
              <div
                key={item?.id}
                className=' w-full h-[80px] grid grid-cols-[1fr_3fr_1fr]'
              >
                <div className=" h-full flex items-center">
                    {item?.type === "HeadPhone" && (
                      <img src={item?.image} className="w-[72px] h-[72px]" alt="" />
                    )}
                    {item?.type === "Rug" && (
                      <img src={item?.image} alt="" className="w-[80px] h-[64px]" />
                    )}
                    {item?.type === "GraphTable" && (
                      <img src={item?.image} alt="" className="w-[80px] h-[64px]" />
                    )}
                    {item?.type === "Microphone" && (
                      <img src={item?.image} alt="" className="w-[40px] h-[64px]" />
                    )}
                    {item?.type === "Mouse" && (
                      <img src={item?.image} alt="" className="w-[45px] h-[60px]" />
                    )}
                    {item?.type === "AudioSpeaker" && (
                      <img src={item?.image} alt="" className="w-[80px] h-[64px]" />
                    )}
                    {item?.type === "WebCamera" && (
                      <img src={item?.image} alt="" className="w-[65px]" />
                    )}
                    {item?.type === "Keyboard" && (
                      <img src={item?.image} alt="" className="h-[50px] w-[125px]" />
                    )}
                    {item?.type === "Readybuild" && (
                      <img src={item?.windowimage} alt="" className="w-[80px]" />
                    )}
                </div>
                <div className=" flex justify-center flex-col gap-1 pt-1">
                  <div>
                    <p className=" text-sm">{item?.title}</p>
                  </div>
                  <div className=" flex items-center gap-2 font-medium">
                    <p>{item?.quantity}</p>
                    <p>x</p>
                    <p className="text-[#62DCFF] flex items-center">{item?.price?.toLocaleString()}<BiRuble className="text-white w-5 h-5"/></p>
                  </div>
                </div>
                <div className=" flex justify-end items-center">
                  <div className=" rounded-md w-7 overflow-hidden bg-[#263159] flex items-center flex-col">
                    <button className=" w-full border-b py-1 border-[#2F3960] text-xl" onClick={() => dispatch(incrementItemQuantity(item))}>
                      +
                    </button>
                    <button className=" w-full py-1 flex items-center justify-center" onClick={() => dispatch(removeFromCart(item?.id))}>
                      <MdOutlineDelete className=" text-xl text-red-500"/>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className=" w-full h-full flex flex-col items-center justify-center">
            <div>
              <RiEmotionSadLine className=" w-20 h-20 text-[#3f4b7a]" />
            </div>
            <div>
              <p className=" text-lg font-semibold ">Корзина Пуста</p>
            </div>
          </div>
        )}
        <div>
        </div>
      </div>
          {
            cartItems.length ? (
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="text-white text-lg font-semibold">{cartTotal.toLocaleString()}</p>
                  <p><BiRuble className="w-5 h-5 text-[#62DCFF]"/></p>
                </div>
                <div className="flex items-center cursor-pointer" onClick={() => dispatch(clearCartItems())}>
                  <div><p className="text-lg font-semibold">Очистить карзину</p></div>
                  <div><MdOutlineDelete className="w-6 h-6 text-xl text-red-500"/></div>
                </div>
              </div>
            ) : null
          }
    </div>
  );
}
