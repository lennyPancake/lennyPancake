import React from "react";

const Modal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <h2>Информация о пользователе</h2>
        <p>
          <b>Возраст</b>: {user.age}
        </p>
        <p>
          <b>ФИО:</b> {`${user.firstName} ${user.lastName}`}
        </p>
        <p>
          <b>Адрес:</b>{" "}
          {`${user.address.city}, ${user.address.address
            .split(" ")
            .splice(1)
            .join(" ")}`}
        </p>
        <p>
          <b>Рост:</b> {user.height} см
        </p>
        <p>
          <b>Вес:</b> {user.weight} кг
        </p>
        <p>
          <b>Номер телефона:</b> {user.phone}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
      </div>
    </div>
  );
};

export default Modal;
