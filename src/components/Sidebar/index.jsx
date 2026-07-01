import React from 'react'
import {
  FaPencilRuler,
  FaHandPaper,
  FaCog,
  FaHardHat,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaPencilRuler />,
    title: "Изготавливаем конструкции",
    text: "по вашему дизайн-проекту",
  },
  {
    icon: <FaHandPaper />,
    title: "Изготовили более 2 400",
    text: "деревянных конструкций",
  },
  {
    icon: <FaCog />,
    title: "Собственное производство",
    text: "площадью 6 000 м²",
  },
  {
    icon: <FaHardHat />,
    title: "Производим изделия из",
    text: "дерева с 1998 года",
  },
  {
    icon: <FaShieldAlt />,
    title: "Гарантия от 3х лет",
    text: "на все конструкции",
  },
];  

const Sindebar = () => {
 return (
    <section className="bg-white py-10 border-b">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {features.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#F8F4EF] flex items-center justify-center text-3xl text-[#4b2d1d]">
              {item.icon}
            </div>
            <div>
              <h3 className="text-[13px] font-semibold leading-5 text-gray-800">
                {item.title}
              </h3>
              <p className="text-[12px] text-gray-600">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sindebar