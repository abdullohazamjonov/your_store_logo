import React from "react";
import menu from "../../assets/image/menu.png";

const Menu = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm text-gray-400 mb-4">
          Главная <span className="mx-2">›</span> Беседки для дачи
        </p>
        <h2 className="text-4xl font-bold mb-8">О компании</h2>
        <div className="relative bg-yellow-400 rounded-md overflow-hidden">
          <div className="grid md:grid-cols-2 items-center gap-10 p-12">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-[2px] bg-gray-300"></div>
              <div className="absolute -left-11 top-3 w-6 h-6 rounded-full border-4 border-orange-500 bg-white"></div>
              <h3 className="text-3xl font-semibold mb-6">
                Наша компания основана в 1998 году.
              </h3>
              <p className="text-gray-800 leading-8">
                Более чем за 20 лет мы набрались опыта в своём деле и
                наладили производство большого масштаба. В день основания
                нашей компании мы поставили перед собой задачи: добиться
                высочайшего качества нашей продукции, работать только с
                лучшим деревом и расширить производство.
              </p>
            </div>
            <div>
              <img src={menu} alt="Company" className="w-full rounded-lg shadow-lg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;