import React, { useEffect, useState } from "react";
import { products } from "../../dataBase/dataBase";
import { BsNutFill } from "react-icons/bs";
import { BiRuble } from "react-icons/bi";

export default function Hero() {
  const [infoReadyBulids, setInfoReadyBulids] = useState("NEWBIE");

  const handleChangeBuilds = (e) => {
    setInfoReadyBulids(e);
  };

  const styleActive = () => {
    color: "#ec4f7e";
  };

  return (
    <section className="w-full h-screen flex justify-center items-center mt-20">
      <div className="w-[65%] h-full ">
        <div className="min-w-[60%] w-[60%] h-[500px] rounded-2xl flex flex-col gap-4 bg-[#f0f0f4] p-10">
          <div className="flex justify-between items-center">
            <h2 className="text-[#ec4e7f] font-bold text-3xl">
              ГОТОВЫЕ СБОРКИ
            </h2>
            <button className="text-[#34406c] font-bold text-lg">
              ВСЕ СБОРКИ
            </button>
          </div>
          <ul className="w-full flex justify-center gap-3 text-[#34406a] font-bold">
            <li
              onClick={() => handleChangeBuilds("NEWBIE")}
              className={
                infoReadyBulids === "NEWBIE"
                  ? "text-[#ec4f7e] underline decoration-2"
                  : null
              }
            >
              <a href="#">NEWBIE</a>
            </li>
            <li
              onClick={() => handleChangeBuilds("STANDART")}
              className={
                infoReadyBulids === "STANDART"
                  ? "text-[#ec4f7e] underline decoration-2"
                  : null
              }
            >
              <a href="#">STANDART</a>
            </li>
            <li
              onClick={() => handleChangeBuilds("PRO")}
              className={
                infoReadyBulids === "PRO"
                  ? "text-[#ec4f7e] underline decoration-2"
                  : null
              }
            >
              <a href="#">PRO</a>
            </li>
            <li
              onClick={() => handleChangeBuilds("ULTIMATE")}
              className={
                infoReadyBulids === "ULTIMATE"
                  ? "text-[#ec4f7e] underline decoration-2"
                  : null
              }
            >
              <a href="#">ULTIMATE</a>
            </li>
            <li
              onClick={() => handleChangeBuilds("INFINITY")}
              className={
                infoReadyBulids === "INFINITY"
                  ? "text-[#ec4f7e] underline decoration-2"
                  : null
              }
            >
              <a href="#">INFINITY</a>
            </li>
          </ul>
          <div className="w-[100%] touch-none relative">
            <button>fhfhd</button>
            <div className="mt-[13px overflow-x-hidden relative]">
              <div
                className="grid grid-flow-col gap-[30px] transition-[0.2s] w-full"
                style={{ transform: "translateX(0px)" }}
              >
                {products
                  ?.filter((item) => item?.typebuilds === infoReadyBulids)
                  ?.map((item) => {
                    return (
                      <div
                        className="relative pt-[23px] cursor-pointer"
                        key={item?.id}
                      >
                        <div className="mt-[4px] bg-white w-[200px] gap-5 rounded-[10px] flex items-center flex-col">
                          <div className="flex items-center justify-center flex-col border-b border-[#34406c6c] pb-4">
                            <img
                              src={item?.windowimage}
                              className=" mt-[-23px] w-[188px] h-[200px] transition-[2s] hover:translate-x-3"
                              alt=""
                            />
                            <p className="text-[#34406a] text-lg font-bold">
                              {item?.title}
                            </p>
                            <p className="flex items-center font-bold text-lg text-[#ec4f7e]">
                              {item?.price}
                              <BiRuble />
                            </p>
                          </div>
                          <div className="flex flex-col gap-3">
                            <p className="flex items-center leading-4 gap-2 text-sm text-[#34406c] font-bold">
                              <img
                                className="w-8"
                                src="https://lightflightpc.ru/build/assets/cpu.179be4c0.svg"
                                alt=""
                              />
                              {item?.processor}
                            </p>
                            <p className="flex items-center leading-4 gap-2 text-sm text-[#34406c] font-bold">
                              <img
                                className="w-8"
                                src="https://lightflightpc.ru/build/assets/gpu.7226ce40.svg"
                                alt=""
                              />
                              {item?.videoCart}
                            </p>
                            <p className="flex items-center leading-4 gap-2 text-sm text-[#34406c] font-bold">
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
              </div>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
