import React from "react";
import contact1 from "../../assets/image/contact_1.png";
import contact2 from "../../assets/image/contact_2.png";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <p className="text-sm text-gray-400 mb-3">
        Главная <span className="mx-2">›</span> Беседки для дачи
      </p>
      <h1 className="text-4xl font-bold mb-6">
        Как выбрать беседку для дачи
      </h1>
      <div className="border-t border-gray-300 mb-8"></div>
      <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
        <p className="text-gray-700 leading-8 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          blanditiis placeat a tempore perferendis quas. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Cumque, laboriosam. Doloremque
          explicabo quaerat ratione deleniti vitae natus, voluptas minus
          blanditiis.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <img src={contact1} alt="Gazebo 1" className="w-full h-72 object-cover rounded-lg"/>
          <img src={contact2} alt="Gazebo 2" className="w-full h-72 object-cover rounded-lg"/>
        </div>
        <p className="text-gray-700 leading-8 mb-6">
          Sem egestas neque, turpis habitant at platea egestas pulvinar
          eleifend. Pulvinar massa tempus nibh dui. Volutpat mauris nec
          facilisis diam vitae. Sagittis eros, porttitor varius vestibulum
          ullamcorper adipiscing sit vitae lobortis.
        </p>
        <p className="text-gray-700 leading-8 mb-6">
          Fringilla quam consequat in blandit. Sed id volutpat integer augue
          consectetur mauris egestas faucibus quis. Porttitor scelerisque
          egestas leo malesuada enim elementum magna dui habitasse.
        </p>
        <p className="text-gray-700 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          blanditiis placeat a tempore perferendis quas. Viverra habitant
          elementum sagittis felis molestie integer. Cursus pulvinar semper
          praesent sit.
        </p>
      </div>
    </section>
  );
};

export default Contact;