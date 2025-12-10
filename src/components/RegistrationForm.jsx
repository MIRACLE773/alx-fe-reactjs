import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    setError("");

    console.log("Submitted Data:", formData);
    alert("User registered (mock)!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "300px" }}>
      <h2>Controlled Form</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        name="username"
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
