import React from "react";
import { SlSocialVkontakte } from "react-icons/all";
import { BsArrowUpRight } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full h-auto bg-[#141B35] flex items-center justify-center">
      <div className="flex md:flex-row flex-col w-full gap-8 h-full items-center md:items-start justify-center">
        <div className="flex flex-col gap-7 items-center">
          <h2 className="text-white text-lg mt-[150px]">ДЕЛОВЫЕ ПРЕДЛОЖЕНИЯ</h2>
          <p className="text-[#34406c] w-[300px] ">
            Есть предложение по сотрудничеству или Вы решили создать сборку на
            основе личных предпочтений?
          </p>
          <button className="flex items-center gap-2 text-[#34406c]">
            <SlSocialVkontakte className="text-[#34406c] text-3xl  w-[30px] h-[30px] rounded-[10%]" />
            Пишите Нам <BsArrowUpRight />
          </button>
          <div className="flex gap-4 items-center text-[#34406c] text-4xl">
            <SlSocialVkontakte />
            <BsYoutube />
            <BsInstagram />
          </div>
          <div>
            <p className="text-white w-[300px]">
              © COPYRIGHT 2019-2023 LIGHTFLIGHT. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-7 mt-[150px] items-center">
          <h2 className="text-white text-lg">ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</h2>
          <p className="text-[#34406c] w-[300px]">
            Столкнулись с проблемой на сайте, у Вас есть вопросы или нужна
            помощь? Свяжитесь с нами, мы Вам поможем!
          </p>
          <div className="flex items-center gap-3 text-[#34406c]">
            <FiPhone className="text-2xl"/>
            <p className="text-lg">+7 (812) 565-00-69</p>
          </div>
        </div>
        <div className="ml-[150px] mt-[-100px] hidden 2xl:block">
          <img src="https://lightflightpc.ru/build/assets/logo-footer.2accedf5.svg" alt="" className="w-[400px]" />
        </div>
      </div>
    </footer>
  );
}
