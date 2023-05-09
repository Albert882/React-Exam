import React from "react";

export default function Advantages() {
  return (
      <section className="w-full h-[100vh] flex flex-col items-center justify-evenly mt-32">
        <div>
          <p className="text-white text-2xl font-medium">НАШИ ПРЕИМУЩЕСТВА</p>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-8 items-center border-b border-r border-[#324862] p-4">
            <h2 className="text-white text-xl font-semibold">ДЕШЕВЛЕ И КАЧЕСТВЕННЕЕ</h2>
            <p className="w-[400px] text-center text-[#23242F]">
              Создавая наши сборки, мы опирались на самое-самое главное - это
              соотношение цены к производительности.
            </p>
            <p className="w-[350px] text-center text-[#23242F]">
              При подборе блока питания, материнской платы и системы охлаждения
              рассчитывалось потребление и тепловыделение отдельно каждого
              компьютера.
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center border-b border-r border-[#324862] p-4">
            <h2 className="text-white text-xl font-semibold">МАКСИМАЛЬНАЯ КАСТОМИЗАЦИЯ</h2>
            <p className="w-[400px] text-center text-[#23242F]">
              Немаловажным моментом является то, что в нашем магазине Вы можете
              сами выбрать корпус и изменить начинку любого компьютера.
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center border-b border-[#324862] p-4">
            <h2 className="text-white text-xl font-semibold">РАСШИРЕННАЯ ГАРАНТИЯ</h2>
            <p className="w-[400px] text-center text-[#23242F]">
              В течение года мы будем полностью сопровождать Вас и Ваш
              компьютер. При возникновении неисправности мы покрываем расходы на
              ремонт и компенсируем расходы на доставку.
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center border-r border-[#324862] p-4">
            <h2 className="text-white text-xl font-semibold">СБОРКА ПОД КЛЮЧ</h2>
            <p className="w-[400px] text-center text-[#23242F]">
              Душа просит что-то более дорогое и кастомное? Мы поможем и готовы
              специально для Вас сделать нечто особое, уникальное и интересное.
            </p>
            <p className="w-[350px] text-center text-[#23242F]">
              Напишите нам в личные сообщения группы ВКонтакте и мы основательно
              обсудим Вашу задумку!
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center border-r border-[#324862] p-4">
            <h2 className="text-white text-xl font-semibold">ДОСТАВКА ПО ВСЕЙ РОССИИ</h2>
            <p className="w-[400px] text-center text-[#23242F]">
              Мы отправляем компьютеры в специальных, удароустойчивых ящиках с
              помощью самых надежных транспортных компаний, которые
              зарекомендовали себя на рынке.
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center p-4">
            <h2 className="text-white text-xl font-semibold">ПОДАРКИ В КАЖДОМ ЗАКАЗЕ</h2>
            <p className="w-[400px] text-center text-[#23242F]">
              Каждый заказ комплектуется небольшими подарками, которые мы
              бережно кладём вместе с компьютером. Так мы показываем, насколько
              важен каждый клиент для нас.
            </p>
          </div>
        </div>
      </section>
  );
}
