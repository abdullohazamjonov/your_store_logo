import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaBars,
  FaCheck,
} from "react-icons/fa";
import logo from "../../assets/image/logo_1.svg";

const Header = () => {
  const active =
    "text-yellow-500 font-semibold border-b-2 border-yellow-500 pb-1";
  const normal = "hover:text-yellow-500 transition";

  return (
    <>
      <div className="bg-[#2d170f] text-white text-sm">
        <div className="max-w-7xl mx-auto h-10 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>Ваш город: Константинополь</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>Наш офис: Москва, ул. Новокосинская д.7</span>
            </div>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-yellow-400">
              Статьи
            </a>
            <a href="#" className="hover:text-yellow-400">
              Оплата
            </a>
            <a href="#" className="hover:text-yellow-400">
              Гарантия
            </a>
            <a href="#" className="hover:text-yellow-400">
              Дилерам
            </a>
            <a href="#" className="hover:text-yellow-400">
              Вакансии
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-5 flex justify-between items-center">
          <NavLink to="/" className={({ isActive }) => isActive ? active : normal}>
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="w-[500px]">
            <div className="flex justify-between text-xs mb-3">
              <span className="flex items-center gap-1">
                <FaCheck className="text-yellow-500" />
                Лучшие цены
              </span>
              <span className="flex items-center gap-1">
                <FaCheck className="text-yellow-500" />
                Бесплатная доставка
              </span>
              <span className="flex items-center gap-1">
                <FaCheck className="text-yellow-500" />
                Гарантия
              </span>
              <span className="flex items-center gap-1">
                <FaCheck className="text-yellow-500" />
                Более 1000 товаров
              </span>
            </div>
            <div className="flex">
              <input type="text" placeholder="Поиск по каталогу..." className="border border-gray-300 rounded-l px-4 h-11 w-full outline-none"/>
              <button className="bg-yellow-400 hover:bg-yellow-500 w-32 rounded-r font-semibold">
                Найти
              </button>
            </div>
          </div>
          <div className="text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <FaClock className="text-yellow-500" />
              Ежедневно с 9:00 до 21:00
            </div>
            <h3 className="font-bold text-xl">
              8 (800) 800-00-00
            </h3>
            <h3 className="font-bold text-xl">
              8 (495) 700-00-00
            </h3>
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm mb-3">
              <FaEnvelope className="text-yellow-500" />
              youremail@mailbox.ru
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 duration-300 text-white px-7 h-11 rounded">
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
      <div className="border-y">
        <div className="max-w-7xl mx-auto flex">
          <button className="bg-yellow-400 hover:bg-yellow-500 duration-300 w-72 h-14 flex items-center justify-center gap-3 font-semibold">
            <FaBars />
            Каталог товаров
          </button>
          <div className="flex flex-1 justify-around items-center text-sm">
            <NavLink to="/about" className={({ isActive }) => isActive ? active : normal}>
              О компании
            </NavLink>
            <NavLink to="/menu" className={({ isActive }) => isActive ? active : normal}>
              Отзывы
            </NavLink>
            <NavLink
              to="/booking" className={({ isActive }) => isActive ? active : normal}>
              Наши работы
            </NavLink>
            <NavLink to="/news" className={({ isActive }) => isActive ? active : normal}>
              Доставка
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? active : normal}>
              Контакты
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;