import "./styles.css";

const FilterList = (props) => {
  return (
    <div className="FilterListComponent">
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
      </div>
    </div>
  );
};

export { FilterList };
