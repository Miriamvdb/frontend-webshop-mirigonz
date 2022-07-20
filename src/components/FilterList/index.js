import "./styles.css";

const FilterList = (props) => {
  ////////////////////////////
  const addValue = (filterSelected) => {
    if (props.getter.includes(filterSelected)) {
      props.setter(props.getter.filter((val) => val !== filterSelected));
    } else {
      props.setter([...props.getter, filterSelected]);
    }
  };
  ///////////////////////////////
  return (
    <div className="filters-child">
      <b>{props.title} </b>
      <div className="list">
        {props.values
          ? props.values.map((propsValue, i) => (
              <label key={i}>
                <input
                  type="checkbox"
                  value={propsValue}
                  checked={props.getter.includes(propsValue)}
                  onChange={() => addValue(propsValue)}
                />
                {propsValue}
                {/* {props.filtersNames[i]} */}
              </label>
            ))
          : ""}
      </div>
    </div>
  );
};

export { FilterList };
