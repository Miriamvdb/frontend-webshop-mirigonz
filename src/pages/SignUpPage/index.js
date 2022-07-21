import { SignUpForm } from "../../components/SignUpForm";
import "./styles.css";

const SignUpPage = (props) => {
  return (
    <div className="ContainerSignUpForm">
      <h3>Register</h3>
      <SignUpForm />
      <p style={{ color: "gray" }}>
        Already have an account? Login
        <a href="/login" style={{ color: "gray", fontWeight: "bold" }}>
          {" "}
          here
        </a>{" "}
      </p>
    </div>
  );
};

export { SignUpPage };
