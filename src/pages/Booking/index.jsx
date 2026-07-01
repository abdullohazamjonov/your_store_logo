import React from "react";

const Booking = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <p className="text-sm text-gray-400 mb-4">
        Главная <span className="mx-2">›</span> Беседки для дачи
      </p>
      <h1 className="text-4xl font-bold mb-12">
        Доставка и оплата
      </h1>
      <h2 className="text-3xl font-semibold mb-6">
        Доставка по Москве и области
      </h2>
      <div className="border-b border-gray-300 mb-10"></div>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Доставка по Москве
          </h3>
          <div className="inline-block bg-yellow-400 px-4 py-2 mb-5 font-medium">
            Бесплатная доставка при заказе от 30 000 руб
          </div>
          <ul className="list-disc ml-6 text-gray-700 leading-8">
            <li>Быстрая и удобная доставка нашей курьерской службой.</li>
            <li>Срок доставки: от 3 часов после подтверждения заказа.</li>
            <li>Стоимость доставки в пределах МКАД: бесплатно.</li>
          </ul>
          <h3 className="text-2xl font-semibold mt-10 mb-4">
            Доставка по Московской области
          </h3>
          <div className="inline-block bg-yellow-400 px-4 py-2 mb-5 font-medium">
            Более 5 км от МКАД — от 390 рублей
          </div>
          <ul className="list-disc ml-6 text-gray-700 leading-8">
            <li>Доставка по МО более 5 км от МКАД — 390 руб. + 15 руб/км.</li>
            <li>Есть возможность вскрыть упаковку и осмотреть товар.</li>
            <li>Срок доставки: от 3 часов после подтверждения заказа.</li>
            <li>Время доставки курьером: с 08:00 до 24:00.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Время доставки
          </h3>
          <div className="inline-block bg-yellow-400 px-4 py-2 mb-5 font-medium">
            Доставка выполняется ежедневно, без выходных
          </div>
          <ul className="list-disc ml-6 text-gray-700 leading-8">
            <li>
              Время доставки согласовывается с менеджером после оформления
              заказа.
            </li>
            <li>Доставка выполняется ежедневно, без выходных.</li>
            <li>
              Время доставки уточняется менеджером в зависимости от
              загруженности службы доставки.
            </li>
            <li>
              При необходимости изменить адрес доставки сообщите менеджеру
              заранее.
            </li>
            <li>
              После оформления заказа менеджер свяжется с вами для
              подтверждения.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Booking;