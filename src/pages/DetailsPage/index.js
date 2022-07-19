import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./styles.css";
import { LowerSlice } from "../../components";

const DetailsPage = () => {
  const [products, setProducts] = useState({});
  const params = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `http://localhost:4000/products/${params.id}`
      );
      console.log(response);
      setProducts(response.data);
    };
    getProducts();
  }, [params.id]);

  return (
    <div>
      <div className="ContainerDetailsPage">
        {!products ? (
          "Loading.."
        ) : (
          <div className="AllProductDetails">
            <div>
              <img
                className="ProductImage"
                src={products.mainImage}
                alt={products.title}
              />
            </div>
            <div className="ProductDescr">
              <h2>{products.title}</h2>
              <h2>€{products.price}</h2>
              <p>{products.description}</p>
              <p>
                <b>Rating:</b> {products.rating} <b>Category:</b>{" "}
                {products.categoryId}
              </p>
            </div>
          </div>
        )}
      </div>
      <LowerSlice />
    </div>
  );
};

export { DetailsPage };
