import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{
      marginTop: "20px",
      border: "1px solid gray",
      display: "inline-block",
      padding: "15px",
      borderRadius: "10px"
    }}>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;
