import "./styles.css";
import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";

const ProductCard = (props) => {
  return (
    <div className="productCardComponent">
      <div>
        <div>
          <img src={props.image} alt={"logo"} className="card-img" />
        </div>
      </div>
      <div className="card-text-section">
        <div className="product-title">
          <b>{props.title}</b>
        </div>{" "}
        <div className="price-rating-container">
          <b className="price">€{props.price}</b>
          <b>{props.rating} ★★★☆☆</b>
        </div>
        <div className="product-description">
          <p>{props.description.substring(0, 150)}...</p>
        </div>
        <div className="card-icons">
          <NavLink to="/favorites">
            <FiShoppingCart className="product-card-icon" />
          </NavLink>
          <NavLink to="/favorites">
            <FiHeart className="product-card-icon" />
          </NavLink>
          <NavLink to="/favorites">
            <FiSearch className="product-card-icon" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
