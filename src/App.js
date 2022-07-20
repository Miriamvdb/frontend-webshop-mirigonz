import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar, Banner, Footer } from "./components";
import { AboutPage, ProductListPage, DetailsPage } from "./pages/";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
