import "./styles.css";

const ShoppingCart = ({ shoppingCartItems, onAdd, onRemove }) => {
  //   const { shoppingCartItems, onAdd, onRemove } = props;

  return (
    <div onAdd={onAdd} className="main-container">
      {" "}
      <h1>Shopping cart</h1>
      <div className="container-shopping-cart-and-totals">
        <div className="container-shopping-cart">
          <h3>Products</h3>
          <div>
            {shoppingCartItems.length === 0 && (
              <div>
                <p>Cart is empty</p>
              </div>
            )}
          </div>
          {shoppingCartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">{item.title}</div>
              <div className="col-2">
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>
              </div>
              <div className="col-2">
                {item.qty} x €{item.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className="container-totals">
          <h3>Totals</h3>
          <p>Cart is empty</p>
        </div>
      </div>
    </div>
  );
};

export { ShoppingCart };
