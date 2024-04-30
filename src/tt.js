import React, { useState } from "react";
import "./tt.css";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <form className="add-form login-form" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <input
        className="input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
