import React from "react";
import { products } from "../../dataBase/dataBase";
import { BiRuble } from "react-icons/bi";

export default function ReadyBuildsItem({
  nucleis,
  readyBuildInfo,
  handleOpenModal,
  handleChangeInfoId,
  minPrice,
  maxPrice
}) {


  console.log(minPrice);
  console.log(maxPrice);
  return (
    <section className=" w-full grid md:grid-cols-4 sm:grid-cols-3 osm:grid-cols-2 grid-cols-1 p-0 osm:place-content-start place-content-center gap-4 mb-48">
      {products
        ?.filter((item) =>
          readyBuildInfo
          ? item?.typebuilds === readyBuildInfo
          : nucleis?.length ? String(item?.nuclei) === nucleis.find((elem) => elem === String(item?.nuclei) && item?.price > minPrice && item?.price < maxPrice)
          : Number(minPrice) ||  Number(maxPrice) ? item?.price > minPrice && item?.type === "Readybuild" && item?.price < maxPrice 
          : item.type === "Readybuild"  
        )?.map((item) => {
          return (
            <div
              className="relative flex"
              key={item?.id}
            >
              <div className="mt-[4px] bg-[#1F2848] cursor-pointer sm:w-[200px] w-full gap-5 rounded-[10px] flex items-center flex-col" onClick={() => {
                handleChangeInfoId(item?.id);
                handleOpenModal();
              }}>
                <div className="flex items-center justify-center flex-col border-b border-[#34406c6c] pb-4">
                  <img
                    src={item?.windowimage}
                    className=" w-[188px] h-[200px] transition-[2s] hover:translate-x-3"
                    alt=""
                  />
                  <p className="text-white text-lg font-bold">{item?.title}</p>
                  <p className="flex items-center font-bold text-lg text-[#ec4f7e]">
                    {item?.price}
                    <BiRuble />
                  </p>
                </div>
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
          );
        })}
    </section>
  );
}
