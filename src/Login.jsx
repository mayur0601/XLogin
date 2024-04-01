import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let [username, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      return;
    }

    if (username !== "user" || password !== "password") {
      setError("Invalid username or password");
      return;
    }
    setError("");
    navigate("/login");
  };

  return (
    <main>
      <h1>Login Page</h1>
      <p>{error}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
