import { NavLink } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="NavBarContainer">
      <div className="NavBarLinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/details/:id">About</NavLink>
      </div>
    </div>
  );
};

export { NavBar };
