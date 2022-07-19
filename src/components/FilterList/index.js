import "./styles.css";

const FilterList = (props) => {
  return (
    <div className="filters-child">
      <b>{props.title} </b>
      <div className="list">
        {props.values
          ? props.values.map((product, i) => (
              <label key={i}>
                <input type="checkbox" />
                {product}
              </label>
            ))
          : ""}
      </div>
    </div>
  );
};

export { FilterList };
