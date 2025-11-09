import React from "react";
import UserProfile from "./UserProfile";

function MainContent() {
  return (
    <main style={{ padding: "20px", textAlign: "center" }}>
      <UserProfile name="Miracle Joseph" age="22" bio="A passionate React learner!" />
      <UserProfile name="Noble G" age="27" bio="Loves music and creativity." />
    </main>
  );
}

export default MainContent;
