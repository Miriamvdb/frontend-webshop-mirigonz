import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar, Footer } from "./components";
import { HomePage, ProductListPage, DetailsPage } from "./pages/";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductListPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
