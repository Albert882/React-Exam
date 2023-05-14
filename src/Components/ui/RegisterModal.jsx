import React from "react";
import { BiLockAlt } from "react-icons/all";
import {
  FiMail,
  IoCloseOutline,
  RiDoorLockLine,
  SlSocialVkontakte,
} from "react-icons/all";

export default function RegisterModal({
  handleShowRegister,
  handleCloseRegisterModal
}) {


  
  return (
    <div
      className="w-[100vw] h-[100vh] bg-[rgba(16,22,48,0.9)] backdrop-blur-md z-[1000] fixed flex items-center justify-center gap-8"
      onClick={handleCloseRegisterModal}
    >
      <div
        className="w-[500px] flex items-center flex-col gap-4 shadow-[0_0_45px_rgba(0,0,0,0.3)] mt-8 pt-5 text-white bg-[#293254] rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className=" w-full flex items-center h-[30%] justify-between border-b border-[#34406a] pb-5 px-4">
          <div className="flex items-center gap-2">
            <BiLockAlt className="w-9 h-9" />
            <p className=" text-xl font-semibold">Регистрация</p>
          </div>
          <div className="w-8 flex items-center justify-center rounded-lg h-8 bg-[#34406A]">
            <button onClick={handleCloseRegisterModal}>
              <IoCloseOutline className=" text-2xl" />
            </button>
          </div>
        </div>
        <div className=" w-full flex flex-col justify-center items-center gap-4">
          <div className=" w-full flex items-center flex-col gap-4">
            <form
              action="#"
              className=" w-full flex items-center flex-col gap-4 px-4"
            >
              <div className=" w-full h-[40px] bg-[#0F162F] flex items-center gap-2 overflow-hidden rounded-md px-4">
                <FiMail className=" text-2xl" />
                <input
                  type="text"
                  name=""
                  placeholder="Your email"
                  id=""
                  className=" bg-transparent placeholder:text-[#45517D] w-full h-full border-none outline-0"
                />
              </div>
              <div className=" w-full h-[40px] bg-[#0F162F] flex items-center gap-2 overflow-hidden rounded-md px-4">
                <RiDoorLockLine className=" text-2xl" />
                <input
                  type="text"
                  name=""
                  placeholder="Your password"
                  id=""
                  className=" bg-transparent placeholder:text-[#45517D] w-full h-full border-none outline-0"
                />
              </div>
              <div className=" w-full h-[40px] bg-[#0F162F] flex items-center gap-2 overflow-hidden rounded-md px-4">
                <RiDoorLockLine className=" text-2xl" />
                <input
                  type="text"
                  name=""
                  placeholder="Confirm password"
                  id=""
                  className=" bg-transparent placeholder:text-[#45517D] w-full h-full border-none outline-0"
                />
              </div>
            </form>
          </div>
          <div className=" w-full grid grid-cols-[2fr_1fr] gap-4 px-4">
            <div>
              <button className=" w-full py-3 px-10 bg-[#62DCFF] text-[#181F39] uppercase font-semibold rounded-md">
                Регистрация
              </button>
            </div>
            <div>
              <button
                className=" w-full py-3 px-10 bg-[#34406A] text-white uppercase font-semibold rounded-md"
                onClick={handleShowRegister}
              >
                Вход
              </button>
            </div>
          </div>
          <div className=" w-full grid grid-cols-2">
            <div className=" border-t border-r border-[#2F3960]">
              <button className=" w-full h-[50px] flex items-center justify-center gap-2 font-semibold uppercase">
                Войти Через <SlSocialVkontakte className="" />
              </button>
            </div>
            <div className=" border-t border-[#2F3960]">
              <button className=" w-full h-[50px] flex items-center justify-center gap-2 font-semibold uppercase">
                Сбросить Пароль
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
