import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar, Banner, Footer } from "./components";
import {
  AboutPage,
  ProductListPage,
  DetailsPage,
  LoginPage,
  SignUpPage,
} from "./pages";
import "./App.css";

function App() {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  // if (!token) {
  //   return <LoginPage setToken={setToken} />;
  // }

  return (
    <div className="App">
      <NavBar token={token} setToken={setToken} user={user} setUser={setUser} />
      <Banner />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/login"
          element={<LoginPage setToken={setToken} setUser={setUser} />}
        />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
