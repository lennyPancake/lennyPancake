import React from "react";

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Поиск..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchInput;
