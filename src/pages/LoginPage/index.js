import "./styles.css";
import { LoginForm } from "../../components/";

const LoginPage = (props) => {
  return (
    <div className="ContainerLoginForm">
      <h3>Login</h3>
      <LoginForm setToken={props.setToken} />
    </div>
  );
};

export { LoginPage };
