import React from "react";

const News = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <p className="text-sm text-gray-400 mb-3">
        Главная <span className="mx-2">›</span> Беседки для дачи
      </p>
      <h1 className="text-4xl font-bold mb-6">Контакты</h1>
      <div className="border-b border-gray-300 mb-8"></div>
      <div className="grid md:grid-cols-2 gap-12 mb-10">
        <div>
          <h2 className="text-2xl font-semibold mb-5">Главный офис</h2>
          <div className="mb-5">
            <p className="font-medium">
              📍 г. Москва, Малый казённый пер., д. 2/1 стр. 2
            </p>
            <p className="text-gray-500 text-sm">
              (100 м от метро Курская или Китай-город)
            </p>
          </div>
          <div>
            <p className="font-medium">🕒 График работы офиса:</p>
            <p className="text-gray-600">
              Пн–Пт с 09:00 до 19:00. Без перерыва
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-5">Наш склад</h2>
          <div className="mb-5">
            <p className="font-medium">
              📍 г. Люберцы, ул. Гаршина, д. 36
            </p>
            <p className="text-gray-500 text-sm">Как добраться</p>
          </div>
          <div>
            <p className="font-medium">🕒 График работы склада:</p>
            <p className="text-gray-600">
              Пн–Пт с 09:00 до 19:00. Без перерыва
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <iframe title="office-map" src="https://www.google.com/maps?q=Moscow&output=embed" className="w-full h-80 rounded-lg border" loading="lazy" allowFullScreen></iframe>
        <iframe title="warehouse-map" src="https://www.google.com/maps?q=Lyubertsy&output=embed" className="w-full h-80 rounded-lg border" loading="lazy" allowFullScreen></iframe>
      </div>
    </section>
  );
};

export default News;