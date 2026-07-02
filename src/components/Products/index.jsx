import { Menu } from "lucide-react";
import menu from "../../assets/image/menu.png";
import { FaQuoteLeft } from "react-icons/fa";

const Products = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-semibold text-gray-900">
            Немного о нас
          </h2>
          <div className="mt-4 mb-8 h-[2px] w-full bg-orange-500"></div>
          <p className="text-sm leading-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At lacus
            integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing
            nec senectus duis nibh. In faucibus adipiscing tellus enim,
            consequat integer accumsan. Ultrices ipsum nulla consequat malesuada
            enim mollis est.
          </p>
          <div className="mt-10">
            <FaQuoteLeft className="mb-4 text-5xl text-orange-500" />
            <p className="text-base leading-8 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At lacus
              integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing
              nec senectus duis nibh. In faucibus adipiscing tellus enim,
              consequat integer accumsan. Ultrices ipsum nulla consequat
              malesuada enim mollis est. Venenatis, sagittis, amet ornare donec
              purus suscipit nam sodales. Varius sit amet nullam dictumst massa
              consequat odio faucibus.
            </p>
            <p className="mt-6 font-medium text-gray-800">
              Никита Данилов
            </p>
            <span className="text-sm text-gray-400">
              Руководитель компании
            </span>
          </div>
        </div>
        <div className="rounded-lg bg-white p-3 shadow-xl">
          <img src={menu} alt="About"  className="h-full w-full rounded-md object-cover"/>
        </div>
      </div>
    </section>
  );
};

export default Products;