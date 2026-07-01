import React from 'react'
import cord1 from "../../assets/image/Card_1.png"
import cord2 from "../../assets/image/Card_2.png"
import cord3 from "../../assets/image/Card_3.png"
import cord4 from "../../assets/image/Card_4.png"
import cord5 from "../../assets/image/Card_5.png"
import cord6 from "../../assets/image/Card_6.png"

const cards = [
  {
    title: "Беседки",
    img: cord1,
    large: true,
    items: [
      "Подкатегория 1",
      "Подкатегория 2",
      "Подкатегория 3",
      "Подкатегория 4",
      "Подкатегория 5",
      "Подкатегория 6",
    ],
  },
  {
    title: "Бани",
    img: cord2,
    items: ["Подкатегория 1", "Подкатегория 2", "..."],
  },
  {
    title: "Перголы",
    img: cord3,
    items: ["Подкатегория 1", "Подкатегория 2", "..."],
  },
  {
    title: "Бренды",
    img: cord4,
    items: ["Подкатегория 1", "Подкатегория 2", "..."],
  },
  {
    title: "Детские площадки",
    img: cord5,
    items: [
      "Подкатегория 1",
      "Подкатегория 2",
      "Подкатегория 3",
      "Подкатегория 4",
      "Подкатегория 5",
    ],
  },
  {
    title: "Дома",
    img: cord6,
    items: [
      "Подкатегория 1",
      "Подкатегория 2",
      "Подкатегория 3",
      "Подкатегория 4",
    ],
  },
];
const Card = () => {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <h2 className="text-4xl font-bold mb-8">Категории</h2>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-4">
          <div className="bg-[#FFF8E7] rounded-lg p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-5">Беседки</h3>
              <div className="grid grid-cols-2 gap-y-2 text-gray-600 text-sm">
                <p>Подкатегория 1</p>
                <p>Подкатегория 4</p>
                <p>Подкатегория 2</p>
                <p>Подкатегория 5</p>
                <p>Подкатегория 3</p>
                <p>Подкатегория 6</p>
              </div>
            </div>
            <img src={cord1} className="w-full mt-10" alt=""/>
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-5">
          {cards.slice(1,4).map((item,index)=>(
            <div key={index} className="bg-[#FFF8E7] rounded-lg p-5 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl mb-3">
                  {item.title}
                </h3>
                {item.items.map((sub,i)=>(
                  <p key={i} className="text-sm text-gray-600 mb-1">
                    {sub}
                  </p>
                ))}
              </div>
              <img src={item.img} className="w-36" alt=""/>
            </div>
          ))}
        </div>
        <div className="col-span-4 flex flex-col gap-5">
          {cards.slice(4).map((item,index)=>(
            <div key={index} className="bg-[#FFF8E7] rounded-lg p-5 flex justify-between py-11 items-center">
              <div>
                <h3 className="font-bold text-xl mb-3">
                  {item.title}
                </h3>
                {item.items.map((sub,i)=>(
                  <p key={i} className="text-sm text-gray-600 mb-1">
                    {sub}
                  </p>
                ))}
              </div>
              <img src={item.img} className="w-40" alt=""/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card