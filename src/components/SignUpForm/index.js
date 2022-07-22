import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitSignUp = async (event) => {
    console.log("Hi, you're signed up :)");
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/signup", {
        name: name,
        email: email,
        password: password,
      });
      console.log(response.data.name);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <p style={{ color: "gray", marginTop: -5, fontWeight: "bold" }}>
        Welcome! Create an account
      </p>
      <form onSubmit={submitSignUp}>
        <input
          className="InputSignUp"
          type="text"
          value={name}
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
          required
        />
        <input
          className="InputSignUp"
          type="text"
          value={email}
          placeholder="Email address"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        />
        <br />
        <input
          className="InputSignUp"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />
        <br />
        <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export { SignUpForm };
