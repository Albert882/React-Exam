import React from "react";
import { products } from "../../dataBase/dataBase";
import { v4 as uuidv4 } from "uuid";  
import { MdBalance } from "react-icons/md";

export default function PeripheryItems({
  info,
  handleChangeInfoId,
  handleOpenModal,
  brands
}) {


  console.log(brands);

  return (
      <div className=" rounded-xl w-full p-8">
      {
        products?.filter(item => brands?.length > 0 && item?.type === info ? item?.brand === brands.find((elem) => elem === item?.brand) : item.type === info)?.map((item) => {
          return (
            <div
            className="w-full bg-[#1a223f] h-[104px] p-[20px] border-b border-[#34406a] flex"
            key={item?.id}
            >
            <div
              className="w-[75%] h-full flex gap-3 cursor-pointer"
              onClick={() => {
                handleChangeInfoId(item?.id);
                handleOpenModal();
              }}
              >
                {
                  item?.type === "HeadPhone" && <img src={item?.image} className="w-[72px] h-[72px]" alt="" />
                }
                {
                  item?.type === "Rug" && <img src={item?.image} alt="" className="w-[80px] h-[64px]" />
                }
                {
                  item?.type === "GraphTable" && <img src={item?.image} alt="" className="w-[80px] h-[64px]" />
                }
                {
                  item?.type === "Microphone" && <img src={item?.image} alt="" className="w-[40px] h-[64px]" />
                }
                {
                  item?.type === "Mouse" && <img src={item?.image} alt="" className="w-[45px] h-[60px]" />
                }
                {
                  item?.type === "AudioSpeaker" && <img src={item?.image} alt="" className="w-[80px] h-[64px]" />
                }
                {
                  item?.type === "WebCamera" && <img src={item?.image} alt="" className="w-[65px]" />
                }
                {
                  item?.type === "Keyboard" && <img src={item?.image} alt="" className="h-[50px] w-[125px]" />
                }
              <span className="text-white py-2 font-medium">{item?.title}</span>
            </div>
            <div className="w-[25%] h-full flex justify-end flex-col">
              <div className="flex gap-3 items-center">
                <span className="text-white text-base font-medium">
                  {item?.price} $
                </span>
                <button className="bg-[#62dcff] font-semibold text-sm text-[#181f39] py-[8px] px-[12px] rounded-md  ">
                  ДОБАВИТЬ
                </button>
              </div>
              <div>
                <a href="" className=" flex gap-3 text-[#8190ca]">
                  <MdBalance className="w-6 h-6" />В Сравнение
                </a>
              </div>
            </div>
          </div>
        )
      })
    }
    </div>
      );
}
