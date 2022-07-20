import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitLogin = async (event) => {
    console.log("Hi, you're loggin in :)");
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email: email,
        password: password,
      });
      console.log(response.data.jwt);
      props.setToken(response.data.jwt);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <form onSubmit={submitLogin}>
        <input
          className="InputLogin"
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
          className="InputLogin"
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export { LoginForm };
