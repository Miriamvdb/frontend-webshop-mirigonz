import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../../components";

const ProductListPage = () => {
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    async function getProducts() {
      const productResponse = await axios.get("http://localhost:4000/products");
      setProductList(productResponse.data);
    }

    getProducts();
  }, []);

  return (
    <div className="ProductListPage">
      <div className="Filters-ProductList">
        <div className="filters">
          <div className="filters-child">
            <b>Categories</b>
            <div className="list">
              <label>
                <input type="checkbox" />
                My Value
              </label>
              <label>
                <input type="checkbox" />
                My Value
              </label>
              <label>
                <input type="checkbox" />
                My Value
              </label>
            </div>
          </div>
          <div className="filters-child">
            <b>Categories</b>
            <div className="list">
              <label>
                <input type="checkbox" />
                My Value
              </label>
              <label>
                <input type="checkbox" />
                My Value
              </label>
              <label>
                <input type="checkbox" />
                My Value
              </label>
            </div>
          </div>
          <div className="filters-child">
            <b>Categories</b>
            <div className="list">
              <label>
                <input type="checkbox" />
                My Value
              </label>
              <label>
                <input type="checkbox" />
                My Value
              </label>
              <label>
                <input type="checkbox" />
                My Value
              </label>
            </div>
          </div>
        </div>

        <div>
          {productList
            ? productList.map((product, i) => (
                <ProductCard
                  key={i}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  rating={product.rating}
                  image={product.mainImage}
                  categoryId={product.categoryId}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export { ProductListPage };
