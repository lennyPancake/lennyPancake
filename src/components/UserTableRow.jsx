import React from "react";

const extractStreetName = (address) => {
  const parts = address.split(" ");
  return parts.slice(1).join(" ");
};
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
