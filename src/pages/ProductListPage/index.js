import "./styles.css";
import { useEffect, useState, useParams } from "react";
import axios from "axios";
import { ProductCard, FilterList } from "../../components";

const ProductListPage = () => {
  const [productList, setProductList] = useState(null);
  const [categoryFilterList, setCategoryFilterList] = useState([1, 2, 3, 4]);

  useEffect(() => {
    async function getProducts() {
      const productResponse = await axios.get("http://localhost:4000/products");
      setProductList(productResponse.data);
    }

    getProducts();

    // if (params.filter) {
    //   setFilter(params.filter);
    // } else {
    //   setFilter("");
    // }
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
          <p>{JSON.stringify(categoryFilterList)}</p>
        </div>
        <div>
          {productList
            ? productList
                .filter(
                  (productObj) =>
                    categoryFilterList.includes(productObj.categoryId)
                  // === 3 ||
                  // Math.round(productObj.rating) === 2 ||
                  // (productObj.categoryId > 150) &
                  //   (productObj.categoryId < 300)
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
