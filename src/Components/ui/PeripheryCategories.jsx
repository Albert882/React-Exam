import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbPictureInPicture } from "react-icons/tb";
import {HiOutlinePencil, } from 'react-icons/hi';
import {FaHeadphonesAlt,} from 'react-icons/fa';
import {RxSpeakerLoud} from 'react-icons/rx'
import {FiMonitor} from 'react-icons/fi';
import {BsMouse, BsKeyboard, BsMic, BsWebcam} from 'react-icons/bs'

export default function PeripheryCategories({info, handleChangeInfo,clearBrandsList}) {
  const borderStyleButtomRight = {
    background: 'rgb(236,79,126)',
  };
  const borderStyleTopLeft = {
    background: 'rgb(98,220,225)',
  };

  const itemBg = {
    background: 'rgb(65,77,120)',
    background: 'linear-gradient(150deg, rgba(65,77,120,1) 0%, rgba(35,43,75,1) 100%)'
  }

  return (
    <div className="h-auto min-h-screen w-[20%] border-r border-[#34406a] bg-[#1a223f] flex flex-col gap-8 p-5">
        <NavLink to="/" className="text-2xl text-white uppercase font-medium">
          <img
            src="https://lightflightpc.ru/build/assets/logo-light.7c2bd46f.webp"
            className=" w-[200px] "
            alt=""
          />
        </NavLink>
        <ul className="flex flex-col items-start gap-1">
          <li
            className="grid grid-cols-[1fr_2fr] pr-8 items-center cursor-pointer z-[999] "
            onClick={() => {
              handleChangeInfo('Rug'),
              clearBrandsList
            }}
            >
            <div className="w-[90px] h-[90px] flex justify-start items-center relative">
              <div className="w-[45px] h-[45px] rounded-full absolute right-2 bottom-2 blur-[26px]" style={info === 'Rug' ? borderStyleButtomRight : null}></div>
              <div className="w-[45px] h-[45px] absolute left-2 top-2 rounded-full blur-[26px]" style={info === 'Rug' ? borderStyleTopLeft : null}></div>
              <div className="w-[50px] h-[50px] z-[2] flex justify-center items-center rounded-xl"
              style={itemBg} >
                <TbPictureInPicture
                  className="text-white w-[80%] h-[80%] rounded-xl z-[2]"
                />
              </div>
            </div>
              <a className="text-white flex justify-self-start font-semibold text-sm z-[0]">
                КОВРИКИ
              </a>
          </li>
          <li
            className="grid grid-cols-2 place-items-center cursor-pointer z-[999] "
            onClick={() => {
              handleChangeInfo('GraphTable')
              clearBrandsList
            }}
            >
            <div className="w-[90px] h-[90px] flex justify-start items-center relative">
              <div className="w-[45px] h-[45px] rounded-full absolute right-2 bottom-2 blur-[26px]" style={info === 'GraphTable' ? borderStyleButtomRight : null}></div>
              <div className="w-[45px] h-[45px] absolute left-2 top-2 rounded-full blur-[26px]" style={info === 'GraphTable' ? borderStyleTopLeft : null}></div>
              <div className="w-[50px] h-[50px] z-[2] flex justify-center items-center rounded-xl " 
              style={itemBg}>
                <HiOutlinePencil
                  className="text-white w-[80%] h-[80%] rounded-xl z-[2]"
                />
              </div>
            </div>
              <a className="text-white flex justify-self-start font-semibold text-sm z-[0]">
                ГРАФ. ПЛАНШЕТЫ
              </a>
          </li>
          <li
            className="grid grid-cols-2 place-items-center cursor-pointer z-[999] "
            onClick={() => {
              handleChangeInfo('HeadPhone')
              clearBrandsList
            }}
            >
            <div className="w-[90px] h-[90px] flex justify-start items-center relative">
              <div className="w-[45px] h-[45px] rounded-full absolute right-2 bottom-2 blur-[26px]" style={info === 'HeadPhone' ? borderStyleButtomRight : null}></div>
              <div className="w-[45px] h-[45px] absolute left-2 top-2 rounded-full blur-[26px]" style={info === 'HeadPhone' ? borderStyleTopLeft : null}></div>
              <div className="w-[50px] h-[50px] z-[2] flex justify-center items-center rounded-xl "
              style={itemBg} >
                <FaHeadphonesAlt
                  className="text-white w-[80%] h-[80%] rounded-xl z-[2]"
                />
              </div>
            </div>
              <a className="text-white flex justify-self-start font-semibold text-sm z-[0]">
                НАУШНИКИ
              </a>
          </li>
          <li
            className="grid grid-cols-2 place-items-center cursor-pointer z-[999] "
            onClick={() => {
              handleChangeInfo('Keyboard')
              clearBrandsList
            }}
            >
            <div className="w-[90px] h-[90px] flex justify-start items-center relative">
              <div className="w-[45px] h-[45px] rounded-full absolute right-2 bottom-2 blur-[26px]" style={info === 'Keyboard' ? borderStyleButtomRight : null}></div>
              <div className="w-[45px] h-[45px] absolute left-2 top-2 rounded-full blur-[26px]" style={info === 'Keyboard' ? borderStyleTopLeft : null}></div>
              <div className="w-[50px] h-[50px] z-[2] flex justify-center items-center rounded-xl "
              style={itemBg} >
                <BsKeyboard
                  className="text-white w-[80%] h-[80%] rounded-xl z-[2]"
                />
              </div>
            </div>
              <a className="text-white flex justify-self-start font-semibold text-sm z-[0]">
                КЛАВИАТУРЫ
              </a>
          </li>
          <li
            className="grid grid-cols-2 place-items-center cursor-pointer z-[999] "
            onClick={() => {
              handleChangeInfo('Microphone')
              clearBrandsList
            }}
            >
            <div className="w-[90px] h-[90px] flex justify-start items-center relative">
              <div className="w-[45px] h-[45px] rounded-full absolute right-2 bottom-2 blur-[26px]" style={info === 'Microphone' ? borderStyleButtomRight : null}></div>
              <div className="w-[45px] h-[45px] absolute left-2 top-2 rounded-full blur-[26px]" style={info === 'Microphone' ? borderStyleTopLeft : null}></div>
              <div className="w-[50px] h-[50px] z-[2] flex justify-center items-center rounded-xl "
              style={itemBg} >
                <BsMic
                  className="text-white w-[80%] h-[80%] rounded-xl z-[2]"
                />
              </div>
            </div>
              <a className="text-white flex justify-self-start font-semibold text-sm z-[0]">
                МИКРОФОНЫ
              </a>
          </li>
          <li
            className="grid grid-cols-2 place-items-center cursor-pointer z-[999] "
            onClick={() => {
              handleChangeInfo('Mouse')
              clearBrandsList
            }}
            >
            <div className="w-[90px] h-[90px] flex justify-start items-center relative">
              <div className="w-[45px] h-[45px] rounded-full absolute right-2 bottom-2 blur-[26px]" style={info === 'Mouse' ? borderStyleButtomRight : null}></div>
              <div className="w-[45px] h-[45px] absolute left-2 top-2 rounded-full blur-[26px]" style={info === 'Mouse' ? borderStyleTopLeft : null}></div>
              <div className="w-[50px] h-[50px] z-[2] flex justify-center items-center rounded-xl "
              style={itemBg} >
                <BsMouse
                  className="text-white w-[80%] h-[80%] rounded-xl z-[2]"
                />
              </div>
            </div>
              <a className="text-white flex justify-self-start font-semibold text-sm z-[0]">
                МЫШИ
              </a>
          </li>
          <li
            className="grid grid-cols-2 place-items-center cursor-pointer z-[999] "
            onClick={() => {
              handleChangeInfo('AudioSpeaker')
              clearBrandsList
            }}
            >
            <div className="w-[90px] h-[90px] flex justify-start items-center relative">
              <div className="w-[45px] h-[45px] rounded-full absolute right-2 bottom-2 blur-[26px]" style={info === 'AudioSpeaker' ? borderStyleButtomRight : null}></div>
              <div className="w-[45px] h-[45px] absolute left-2 top-2 rounded-full blur-[26px]" style={info === 'AudioSpeaker' ? borderStyleTopLeft : null}></div>
              <div className="w-[50px] h-[50px] z-[2] flex justify-center items-center rounded-xl "
              style={itemBg} >
                <RxSpeakerLoud
                  className="text-white w-[80%] h-[80%] rounded-xl z-[2]"
                />
              </div>  
            </div>
              <a className="text-white flex justify-self-start font-semibold text-sm z-[0]">
                АУДИО-СИСТЕМЫ
              </a>
          </li>
          <li
            className="grid grid-cols-2 place-items-center cursor-pointer z-[999] "
            onClick={() => {
              handleChangeInfo('WebCamera')
              clearBrandsList
            }}
            >
            <div className="w-[90px] h-[90px] flex justify-start items-center relative">
              <div className="w-[45px] h-[45px] rounded-full absolute right-2 bottom-2 blur-[26px]" style={info === 'WebCamera' ? borderStyleButtomRight : null}></div>
              <div className="w-[45px] h-[45px] absolute left-2 top-2 rounded-full blur-[26px]" style={info === 'WebCamera' ? borderStyleTopLeft : null}></div>
              <div className="w-[50px] h-[50px] z-[2] flex justify-center items-center rounded-xl "
              style={itemBg} >
                <BsWebcam
                  className=" text-white w-[80%] h-[80%] rounded-xl z-[2]"
                />
              </div>
            </div>
              <a className="text-white flex justify-self-start font-semibold text-sm z-[0]">
                ВЕБ-КАМЕРЫ
              </a>
          </li>
        </ul>
    </div>
  );
}
