import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";
import logo from "../../assets/image/logo_2.svg";

const Footer = () => {
  return (
    <>
      <section className="bg-[#f8f6f1] py-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h2 className="text-2xl font-medium">
            Хотите быть в курсе выгодных предложений, акций и новинок?
          </h2>
          <div className="flex gap-4">
            <input type="text" placeholder="Имя" className="w-44 h-12 border rounded px-4 outline-none"  />
            <input type="email" placeholder="Email" className="w-52 h-12 border rounded px-4 outline-none"/>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 rounded">
              Подписаться
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-[#1d1d1d] text-white">
        <div className="max-w-7xl mx-auto py-12">
          <div className="flex justify-between border-b border-gray-700 pb-8">
            <img src={logo} alt="Logo" />
            <div>
              <h3 className="mb-2 text-gray-400">Наш адрес:</h3>
             <a href="https://maps.google.com/?q=Москва,+ул.+Новокосинская+д.7" target="_blank" rel="noopener noreferrer">
                <p>Москва, ул. Новокосинская д.7</p>
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-gray-400">
                График работы:
              </h3>
             <a href="https://maps.google.com/?q=Москва,+ул.+Новокосинская+д.7" target="_blank" rel="noopener noreferrer">
                <p>
                  Ежедневно с
                  <span className="text-orange-500 font-bold">
                    {" "}
                    9:00
                  </span>
                  до
                  <span className="text-orange-500 font-bold">
                    {" "}
                    21:00
                  </span>
                </p>
              </a>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 h-12 px-10 rounded">
              Заказать звонок
            </button>
          </div>
          <div className="grid grid-cols-5 gap-10 py-10 text-sm">
            <div>
              <h3 className="font-semibold mb-4">
                Для покупателей:
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500">Доставка</a></li>
                <li><a href="#" className="hover:text-orange-500">Гарантия</a></li>
                <li><a href="#" className="hover:text-orange-500">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-orange-500">Отзывы</a></li>
                <li><a href="#" className="hover:text-orange-500">Наши работы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">
                О компании:
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500">О Нас</a></li>
                <li><a href="#" className="hover:text-orange-500">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-orange-500">Наши работы</a></li>
                <li><a href="#" className="hover:text-orange-500">Контакты</a></li>
                <li><a href="#" className="hover:text-orange-500">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">
                Категории:
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500">Беседки</a></li>
                <li><a href="#" className="hover:text-orange-500">Бани</a></li>
                <li><a href="#" className="hover:text-orange-500">Площадки</a></li>
                <li><a href="#" className="hover:text-orange-500">Дома</a></li>
                <li><a href="#" className="hover:text-orange-500">Перголы</a></li>
                <li><a href="#" className="hover:text-orange-500">Бренды</a></li>
              </ul>
            </div>
            <div>
              <p className="text-gray-400">
                Для регионов
              </p>
              <p className="mb-4 text-gray-400">
                (звонок бесплатный)
              </p>
              <h2 className="text-2xl font-bold text-orange-500">
                8 (800) 800-00-00
              </h2>
              <a href="mailto:youremail@mailbox.ru" className="my-3 text-white hover:text-orange-700">
                youremail@mailbox.ru
              </a>
              <div className="flex gap-4 text-2xl mt-4">
                <FaWhatsapp className=" hover:text-orange-500" />
                <FaYoutube className=" hover:text-orange-500" />
                <FaInstagram className=" hover:text-orange-500" />
              </div>
            </div>
            <div>
              <p className="text-gray-400">
                Для Москвы
              </p>
              <p className="text-gray-400 mb-4">
                и Московской области
              </p>
              <h2 className="text-2xl font-bold text-orange-500">
                8 (495) 700-00-00
              </h2>
              <div className="mt-5 text-gray-400 space-y-1">
                <li className="flex flex-col gap-1">
                <a href="" className="hover:text-orange-500">ООО "Фаза Групп"</a>
                <a href="" className="hover:text-orange-500">ИНН: 7751140879</a>
                <a href="" className="hover:text-orange-500">ОГРН: 1187746275461</a>
                </li>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 flex justify-between items-center">
            <div className="text-gray-500 text-sm">
              <p>Публичная оферта</p>
              <p>
                2013–2021 • Товары для дач,
                деревянные конструкции под любые нужды
              </p>
            </div>
            <div className="flex items-center gap-6 text-4xl text-gray-500">
              <FaCcVisa />
              <FaCcMastercard />
              <span className="text-xl">
                МИР
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;