import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar, Banner, Footer } from "./components";
import { HomePage, ProductListPage, DetailsPage, LoginPage } from "./pages";

function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   return <LoginPage setToken={setToken} />;
  // }

  return (
    <div className="App">
      <NavBar token={token} setToken={setToken} />
      <Banner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductListPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/login" element={<LoginPage setToken={setToken} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
