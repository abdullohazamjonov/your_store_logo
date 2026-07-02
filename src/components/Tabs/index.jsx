import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Алексей С.А.",
    date: "28 июня 2021",
    rating: 5,
    text:
      "«Цена хорошая, всё соответствует ожиданиям. Подбирал перголу для своего участка. Также мне хотелось бы отметить вежливость работников компании, всё подробно рассказали. Я считаю этот магазин отличным. И наверняка буду покупать снова или советовать коллегам.»",
  },
  {
    id: 2,
    name: "Алексей С.А.",
    date: "28 июня 2021",
    rating: 5,
    text:
      "«Цена хорошая, всё соответствует ожиданиям. Подбирал перголу для своего участка. Также мне хотелось бы отметить вежливость работников компании, всё подробно рассказали. Я считаю этот магазин отличным. И наверняка буду покупать снова или советовать коллегам.»",
  },
  {
    id: 3,
    name: "Алексей С.А.",
    date: "28 июня 2021",
    rating: 5,
    text:
      "«Цена хорошая, всё соответствует ожиданиям. Подбирал перголу для своего участка. Также мне хотелось бы отметить вежливость работников компании, всё подробно рассказали. Я считаю этот магазин отличным. И наверняка буду покупать снова или советовать коллегам.»",
  },
];

const Tabs = () => {
  return (
    <section className="bg-[#f7f5ef] py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-4xl font-semibold">
          Отзывы наших клиентов
        </h2>
        <div className="flex items-center gap-5">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:bg-orange-500 hover:text-white">
            <ChevronLeft size={20} />
          </button>
          <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((item) => (
              <div key={item.id} className="rounded bg-white p-5 shadow-sm border border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs text-gray-400">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex justify-end gap-1">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <Star key={index} size={14} className="fill-yellow-400 text-yellow-400"/>
                      ))}
                    </div>
                    <p className="text-[11px] text-gray-500">
                      Общая оценка (4.8)
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>
                <button className="mt-4 text-sm text-orange-500 hover:underline">
                  Читать полностью
                </button>
              </div>
            ))}
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:bg-orange-500 hover:text-white">
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="mt-10 text-center">
          <button className="rounded bg-orange-500 px-8 py-3 text-white hover:bg-orange-600">
            Открыть все отзывы
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tabs;