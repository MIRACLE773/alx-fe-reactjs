import React from "react";
import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Welcome to the User Profile Page</h1>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;
