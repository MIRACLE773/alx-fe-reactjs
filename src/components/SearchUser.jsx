import React, { useState } from "react";
import { searchGithubUser } from "../services/githubService";

function SearchUser() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const handleSearch = async () => {
    const data = await searchGithubUser(username);
    setUser(data);
  };

  return (
    <div>
      <h2>GitHub User Search</h2>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {user && (
        <div style={{ marginTop: "20px" }}>
          <img src={user.avatar_url} width="100" alt="avatar" />
          <h3>{user.login}</h3>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank">Visit Profile</a>
        </div>
      )}
    </div>
  );
}

export default SearchUser;
