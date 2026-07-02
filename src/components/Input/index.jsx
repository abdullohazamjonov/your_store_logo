import input from "../../assets/image/input.png";
import React, { useState } from "react";

const tabs = [
  "Беседки",
  "Бани",
  "Площадки",
  "Дома",
  "Перголы",
  "Бренды",
];

const products = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
}));

const Input = () => {  
  const [active, setActive] = useState(0);

  return (
    <section className="mx-auto max-w-7xl py-8">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-4xl font-semibold text-gray-900">
          Хиты продаж
        </h2>
        <button className="text-sm text-gray-400 hover:text-black">
          Все товары &gt;
        </button>
      </div>
      <div className="flex border border-gray-200 bg-[#faf9f6]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`relative px-8 py-4 text-sm transition-all duration-200
              ${ active === index ? "bg-white text-black" : "text-gray-400 hover:text-black" }`}>
            {tab}
            {active === index && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-orange-500"></span>
            )}
          </button>
        ))}
      </div>  
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-5">
        {products.map((item) => (
          <div key={item.id} className="overflow-hidden rounded border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <img src={input} alt="Product" className="h-56 w-full object-cover"/>
            <div className="p-2">
              <div className="flex justify-between text-[9px] text-gray-400">
                <span>Артикул:</span>
                <span>00000001</span>
              </div>
              <h3 className="mt-2 text-[14px] font-semibold leading-4">
                Название товара длинное
                <br />
                в две строки наверное
              </h3>
              <div className="mt-3 space-y-1 text-[10px] text-gray-600">
                <div className="flex justify-between">
                  <span>📏 Размеры:</span>
                  <span>12.3 × 14.6 × 4.3 м.</span>
                </div>
                <div className="flex justify-between">
                  <span>🏠 Площадь:</span>
                  <span>33 м²</span>
                </div>
                <div className="flex justify-between">
                  <span>👥 Вместимость:</span>
                  <span>15 чел.</span>
                </div>
                <div className="flex justify-between">
                  <span>🛡 Гарантия:</span>
                  <span>10 лет</span>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1">
                <span className="text-[10px] text-gray-400 line-through">
                  6 127 500 ₽
                </span>
                <span className="bg-yellow-300 px-1 text-[9px] font-semibold">
                  -25%
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xl font-bold text-red-600">
                  5 023 900 ₽
                </span>
                <button className="rounded bg-yellow-400 px-4 py-2 text-xs font-semibold hover:bg-yellow-500">
                  Купить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Input;