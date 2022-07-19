import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard, FilterList } from "../../components";

const filter1 = {
  title: "Categories",
  values: ["Hola", "Bla", "Perro", "Miriam", "TImo"],
};
const filter2 = { title: "Rating Item", values: ["Hola", "Bla", "Perro"] };
const filter3 = { title: "Price Filter", values: ["Hola", "Bla", "Perro"] };

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
          <FilterList title={filter1.title} values={filter1.values} />
          <FilterList title={filter2.title} values={filter2.values} />
          <FilterList title={filter3.title} values={filter3.values} />
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
