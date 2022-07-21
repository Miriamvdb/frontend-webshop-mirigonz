import "./styles.css";
import { LoginForm } from "../../components/";

const LoginPage = (props) => {
  return (
    <div className="ContainerLoginForm">
      <h3>Login</h3>
      <LoginForm setToken={props.setToken} setUser={props.setUser} />
      <p style={{ color: "gray" }}>
        Don't have an account? Create account
        <a href="/signup" style={{ color: "gray", fontWeight: "bold" }}>
          {" "}
          here
        </a>{" "}
        to register
      </p>
    </div>
  );
};

export { LoginPage };
