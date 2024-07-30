import React from "react";
import UserTableRow from "./UserTableRow";

const UserTable = ({ users, onSort, sortConfig, onRowClick }) => {
  const getSortDirection = (column) => {
    if (sortConfig.key === column) {
      if (sortConfig.direction === "asc") return "↑";
      if (sortConfig.direction === "desc") return "↓";
    }
    return "";
  };

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
          <th>Номер телефона</th>
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
