import React from "react";
import UserTableRow from "./UserTableRow";

const UserTable = ({ loading, users, onSort, sortConfig, onRowClick }) => {
  const getSortDirection = (column) => {
    if (sortConfig.key === column) {
      if (sortConfig.direction === "asc") return "↑";
      if (sortConfig.direction === "desc") return "↓";
    }
    return "";
  };

  if (loading) {
    return <h3>Пожалуйста, подождите, идет загрузка...</h3>;
  }

  if (users.length === 0) {
    return <h2>Совпадений не найдено</h2>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => onSort("firstName")}>
            ФИО {getSortDirection("firstName")}
          </th>
          <th onClick={() => onSort("age")}>
            Возраст {getSortDirection("age")}
          </th>
          <th onClick={() => onSort("gender")}>
            Пол {getSortDirection("gender")}
          </th>
          <th onClick={() => onSort("phone")}>
            Номер телефона {getSortDirection("phone")}
          </th>
          <th onClick={() => onSort("address")}>
            Адрес {getSortDirection("address")}
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserTableRow key={user.id} user={user} onRowClick={onRowClick} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
