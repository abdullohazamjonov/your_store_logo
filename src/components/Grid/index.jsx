import gridImage from "../../assets/image/gird.png";

const news = [
  {
    id: 1,
    title: "Как выбрать беседку для дачи",
    date: "19 сентября 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris adipiscing congue tortor bibendum condimentum sociis lorem.",
  },
  {
    id: 2,
    title: "Как выбрать беседку для дачи",
    date: "19 сентября 2021",
    text: "Дружная команда инженеров, наладчиков и мастеров высокого класса с большим вниманием и любовью относится к своей работе.",
  },
  {
    id: 3,
    title: "Как выбрать беседку для дачи",
    date: "19 сентября 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilisi sit vitae vitae sed tellus. Semper vitae.",
  },
  {
    id: 4,
    title: "Как выбрать беседку для дачи",
    date: "19 сентября 2021",
    text: "Дружная команда инженеров, наладчиков и мастеров высокого класса с большим вниманием и любовью относится к своей работе.",
  },
  {
    id: 5,
    title: "Как выбрать беседку для дачи",
    date: "19 сентября 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ornare felis faucibus turpis justo.",
  },
  {
    id: 6,
    title: "Как выбрать беседку для дачи",
    date: "19 сентября 2021",
    text: "Дружная команда инженеров, наладчиков и мастеров высокого класса с большим вниманием и любовью относится к своей работе.",
  },
];

const Grid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-semibold text-[#1f1f1f] mb-12">
          Статьи, новости и обзоры
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {news.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-md">
                <img src={gridImage} alt={item.title} className="w-full h-56 object-cover duration-300 group-hover:scale-105"/>
              </div>
              <h3 className="mt-5 text-[20px] font-semibold text-[#ff7a00] group-hover:underline">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                {item.date}
              </p>
              <p className="mt-4 text-[15px] leading-7 text-gray-600">
                {item.text}
              </p>
              <button className="mt-5 text-[#ff7a00] font-medium hover:underline">
                Читать далее &gt;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;