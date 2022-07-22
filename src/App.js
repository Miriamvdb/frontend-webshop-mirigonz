import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar, Banner, Footer } from "./components";
import {
  AboutPage,
  ProductListPage,
  DetailsPage,
  LoginPage,
  SignUpPage,
  ShoppingCart,
} from "./pages";
import "./App.css";

function App() {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  // FUNCTION SHOPPINGCART -> to add the product to the card
  // "on" because it's an event handler // "product" that needed to be add
  const onAdd = (product) => {
    console.log("On add 1?", onAdd);
    const exist = shoppingCartItems.find((item) => item.id === product.id);
    // if the product exists, found in the "shoppingCartItems"..
    if (exist) {
      // .. then update "setShoppingCartItems" to new value "shoppingCartItems"
      setShoppingCartItems(
        shoppingCartItems.map((item) =>
          item.id === product.id
            ? // qty = quantity
              { ...exist, qty: exist.qty + 1 }
            : item
        )
      );
      // if not exists
    } else {
      setShoppingCartItems([...shoppingCartItems, { ...product, qty: 1 }]);
    }
  };
  console.log("On add 2?", onAdd);

  return (
    <div className="App">
      <NavBar token={token} setToken={setToken} user={user} setUser={setUser} />
      <Banner />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route
          path="/details/:id"
          element={
            <DetailsPage
              onAdd={onAdd}
              shoppingCartItems={shoppingCartItems}
              setShoppingCartItems={setShoppingCartItems}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/login"
          element={<LoginPage setToken={setToken} setUser={setUser} />}
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/shoppingcart"
          element={
            // pass onAdd-function to component
            <ShoppingCart
              onAdd={onAdd}
              shoppingCartItems={shoppingCartItems}
              setShoppingCartItems={setShoppingCartItems}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
