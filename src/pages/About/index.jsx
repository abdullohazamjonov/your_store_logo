import React from "react";
import about1 from "../../assets/image/about_1.png"
import about2 from "../../assets/image/about_2.png"
import about3 from "../../assets/image/about_3.png"

const categories = [
  "Беседки",
  "Бани",
  "Площадки",
  "Дома",
  "Перголы",
  "Бренды",
];

const banners = [
  about1,
  about2,
  about3,
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3 bg-white border rounded-md">
          {categories.map((item, index) => (
            <div key={index} className="flex justify-between items-center px-4 py-3 border-b hover:bg-gray-100 cursor-pointer">
              <span>{item}</span>
              <span>›</span>
            </div>
          ))}
        </div>
        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-4">
            {banners.map((item, index) => (
              <img key={index} src={item} alt="" className="w-full h-32 object-cover rounded-md"/>
            ))}
          </div>
          <div className="mt-5 text-sm text-gray-500">
            Главная <span className="mx-2">›</span> About
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;