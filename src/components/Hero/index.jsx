import {
  FaChevronLeft,
  FaChevronRight,
  FaPercent,
  FaClock,
} from "react-icons/fa";
import hero1 from "../../assets/image/hero_1.png";
import hero2 from "../../assets/image/hero_2.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto mt-5">
      <div className="relative h-[420px] rounded-md overflow-hidden shadow">
        <img src={hero2} alt="" className="absolute w-full h-full object-cover"/>
        <div className="absolute right-0 top-0 h-full w-[35%] bg-white rounded-l-full clip-path"></div>
        <button className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white hover:bg-gray-200 shadow flex items-center justify-center">
          <FaChevronLeft />
        </button>
        <button className="absolute right-5 top-1/2 -translate-y-2/2 z-10 w-12 h-12 rounded-full bg-white hover:bg-gray-200 shadow flex items-center justify-center">
          <FaChevronRight />
        </button>
        <div className="absolute left-16 top-16 text-white">
          <h1 className="text-6xl font-bold leading-tight">
            Беседки под ключ
          </h1>
          <h2 className="text-6xl font-bold mt-4">
            за 7 дней
          </h2>
        </div>
        <div className="absolute left-0 bottom-16 w-full bg-orange-500 h-16 flex items-center px-16 gap-20 text-white">
          <div className="flex items-center gap-3">
            <FaPercent size={28} />
            <span className="text-xl">
              Выгода до 24%
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaClock size={28} />
            <span className="text-xl">
              Сборка за 1 день
            </span>
          </div>
        </div>
        <img src={hero1} alt="" className="absolute right-8 bottom-0 w-[420px]"/>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
export default Hero