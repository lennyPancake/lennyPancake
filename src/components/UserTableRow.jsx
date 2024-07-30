import React from "react";

// Функция для извлечения только названия улицы из адреса
const extractStreetName = (address) => {
  // Разбиваем строку адреса на части
  const parts = address.split(" ");

  // Убираем все цифры и объединяем текст
  return parts.slice(1).join(" ");
};

// Функция для форматирования адреса
const formatAddress = (address) => {
  const city = address.city || "";
  const streetName = extractStreetName(address.address) || "";

  return `${city}, ${streetName}`;
};

const UserTableRow = ({ user, onRowClick }) => {
  return (
    <tr onClick={() => onRowClick(user)}>
      <td>{`${user.firstName} ${user.lastName}`}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.phone}</td>
      <td>{formatAddress(user.address)}</td>
    </tr>
  );
};

export default UserTableRow;
