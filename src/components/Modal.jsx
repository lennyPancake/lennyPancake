import React from "react";

const Modal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <h2>Детали пользователя</h2>
        <p>ФИО: {`${user.firstName} ${user.lastName}`}</p>
        <p>Возраст: {user.age}</p>
        <p>
          Адрес:{" "}
          {`${user.address.city}, ${user.address.address
            .split(" ")
            .splice(1)
            .join(" ")}`}
        </p>
        <p>Рост: {user.height} см</p>
        <p>Вес: {user.weight} кг</p>
        <p>Номер телефона: {user.phone}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default Modal;
