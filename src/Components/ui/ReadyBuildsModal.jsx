import React from "react";
import { RxCube } from "react-icons/rx";
import { products } from "../../dataBase/dataBase";
import { BsCheckLg } from "react-icons/bs";
import { BiRuble } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/features/cart-slice";

export default function ReadyBuildsModal({ infoId, handleOpenModal, modal }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div
      className="w-full h-full bg-[rgba(16,22,48,0.9)] backdrop-blur-md z-[1000] top-0 fixed flex items-center justify-center gap-8"
      style={{ display: modal ? "flex" : "none" }}
      onClick={handleOpenModal}
    >
      {products.map((item) => {
        if (item?.id === infoId) {
          return (
            <div
              className="lg:w-[45%] md:w-[80%] w-full h-full bg-[#293254] p-4 rounded-xl "
              onClick={(e) => e.stopPropagation()}
              key={infoId}
            >
              <div className="flex justify-between border-b border-white h-[60px]">
                <div className="text-white flex gap-4 p-2">
                  <RxCube className="w-8 h-8" />
                  <p className=" font-medium text-lg">{item?.title}</p>
                </div>
                <button
                  className="text-white w-8 h-8 bg-[#34406a] rounded-lg"
                  onClick={handleOpenModal}
                >
                  X
                </button>
              </div>
              <div className="flex justify-between p-4 gap-16 h-auto">
                <div className="w-[260px] flex flex-col gap-6">
                  <img src={item?.windowimage} alt="" className="w-[400px]" />
                  <p className="text-white font-semibold text-base">
                    {item?.title}
                  </p>
                  <p className="text-white font-semibold text-base flex items-center">
                    {item?.price} <BiRuble className="text-white w-5 h-5" />
                  </p>
                </div>
                <div className=" w-auto bg-[#34406a] rounded-xl h-[320px] overflow-auto bg-scroll">
                  <div className="flex flex-col gap-5 p-5">
                    <p className="flex items-center leading-4 gap-2 text-sm text-white font-bold">
                      <img
                        className="w-8"
                        src="https://lightflightpc.ru/build/assets/cpu.179be4c0.svg"
                        alt=""
                      />
                      {item?.processor}
                    </p>
                    <p className="flex items-center leading-4 gap-2 text-sm text-white font-bold">
                      <img
                        className="w-8"
                        src="https://lightflightpc.ru/build/assets/gpu.7226ce40.svg"
                        alt=""
                      />
                      {item?.videoCart}
                    </p>
                    <p className="flex items-center leading-4 gap-2 text-sm text-white font-bold">
                      <img
                        className="w-8"
                        src="https://lightflightpc.ru/build/assets/ram.7705e900.svg"
                        alt=""
                      />
                      {item?.videoCart}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 bg-[#34406a] rounded-lg p-4">
                <div className="border-b border-[#8190ca] flex flex-col p-2">
                  <p className="text-[#8190Ca] text-base font-medium "></p>
                  <p className="text-[#8190Ca] font-semibold text-[18px] flex gap-3">
                    <BsCheckLg className=" w-7    h-7 text-red-900" />
                    {item?.description1}
                  </p>
                </div>
                <div className="border-b border-[#8190ca] flex flex-col  p-2">
                  <p className="text-white font-semibold text-[18px] flex gap-3">
                    <BsCheckLg className=" w-7    h-7 text-red-900" />
                    {item?.description2}
                  </p>
                </div>
                <div className="border-b border-[#8190ca] flex flex-col  p-2">
                  <p className="text-[#8190Ca] font-semibold text-[18px] flex gap-3">
                    <BsCheckLg className=" w-7    h-7 text-red-900" />
                    {item?.description3}
                  </p>
                </div>
                <div className="border-b border-[#8190ca] flex flex-col  p-2">
                  <p className="text-[#8190Ca] text-base font-medium "></p>
                  <p className="text-white font-semibold text-[18px] flex gap-3">
                    <BsCheckLg className=" w-7    h-7 text-red-900" />
                    {item?.description4}
                  </p>
                </div>
                <div className="border-b border-[#8190ca] flex flex-col  p-2">
                  <p className="text-[#8190Ca] text-base font-medium "></p>
                  <p className="text-[#8190Ca] font-semibold text-[18px] flex gap-3">
                    <BsCheckLg className=" w-7    h-7 text-red-900" />
                    {item?.description5}
                  </p>
                </div>
                <div className="border-b border-[#8190ca] flex flex-col  p-2">
                  <p className="text-[#8190Ca] text-base font-medium "></p>
                  <p className="text-white font-semibold text-[18px] flex gap-3">
                    <BsCheckLg className=" w-7    h-7 text-red-900" />
                    {item?.description6}
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center h-auto">
                {cartItems?.find((addedItem) => addedItem?.id === item?.id) ? (
                  <button
                    className="w-[260px] py-3 px-10 bg-[#EC4F7E] text-[#181F39] uppercase font-semibold rounded-md"
                    onClick={() => dispatch(removeFromCart(item?.id))}
                  >
                    Убрать с Корзины
                  </button>
                ) : (
                  <button
                    className=" w-[260px] py-3 px-10 bg-[#62DCFF] text-[#181F39] uppercase font-semibold rounded-md"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Добавить в Корзину
                  </button>
                )}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
