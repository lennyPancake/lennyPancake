import React, { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import UserTable from "./components/UserTable";
import Modal from "./components/Modal";
import "./App.scss";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Ошибка при загрузке пользователей");
      }
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error("Ошибка при загрузке пользователей:", error);
    }
  };

  const fetchFilteredUsers = async (query) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/users/filter?key=firstName&value=${query}`
      );
      if (!response.ok) {
        throw new Error("Ошибка при фильтрации пользователей");
      }
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error("Ошибка при фильтрации пользователей:", error);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchFilteredUsers(searchQuery);
    } else {
      fetchUsers();
    }
  }, [searchQuery]);

  const onSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key) {
      if (sortConfig.direction === "asc") {
        direction = "desc";
      } else if (sortConfig.direction === "desc") {
        direction = null;
      }
    }

    setSortConfig({ key, direction });

    if (direction) {
      setUsers((prevUsers) => {
        const sortedUsers = [...prevUsers].sort((a, b) => {
          let aValue, bValue;
          if (key.includes(".")) {
            const keys = key.split(".");
            aValue = keys.reduce((obj, key) => obj[key], a);
            bValue = keys.reduce((obj, key) => obj[key], b);
          } else {
            aValue = a[key];
            bValue = b[key];
          }

          if (aValue < bValue) {
            return direction === "asc" ? -1 : 1;
          }
          if (aValue > bValue) {
            return direction === "asc" ? 1 : -1;
          }
          return 0;
        });

        return sortedUsers;
      });
    } else {
      fetchUsers();
    }
  };

  const onRowClick = (user) => {
    setSelectedUser(user);
  };

  const onCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="app">
      <h1>Таблица пользователей</h1>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <UserTable
        users={users}
        onSort={onSort}
        sortConfig={sortConfig}
        onRowClick={onRowClick}
      />
      {selectedUser && <Modal user={selectedUser} onClose={onCloseModal} />}
    </div>
  );
};

export default App;
