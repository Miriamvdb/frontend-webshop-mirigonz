import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard, FilterList } from "../../components";

const ProductListPage = () => {
  const [productList, setProductList] = useState(null);
  const [categoryFilterList, setCategoryFilterList] = useState([]);
  const [ratingFilterList, setRatingFilterList] = useState([]);
  const [
    priceFilterList,
    // setPriceFilterList
  ] = useState([]);

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
          <FilterList
            title={"Categories"}
            values={[1, 2, 3, 4]}
            setter={setCategoryFilterList}
            getter={categoryFilterList}
          />
          {/* <p>{JSON.stringify(categoryFilterList)}</p> */}
          <FilterList
            title={"Rating"}
            values={[2, 3, 4, 5]}
            setter={setRatingFilterList}
            getter={ratingFilterList}
          />
          <FilterList
            title={"Price (Don't working)"}
            values={[
              "€0.00 - €150.00",
              "€150.00 - €350.00",
              "€350.00 - €504.00",
              "€504.00 +",
            ]}
            getter={priceFilterList}
          />
        </div>
        <div>
          {productList
            ? productList
                .filter(
                  (productObj) =>
                    categoryFilterList.length === 0 ||
                    categoryFilterList.includes(productObj.categoryId)
                )
                .filter(
                  (productObj) =>
                    ratingFilterList.length === 0 ||
                    ratingFilterList.includes(Math.round(productObj.rating))
                )
                .map((product, i) => (
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
