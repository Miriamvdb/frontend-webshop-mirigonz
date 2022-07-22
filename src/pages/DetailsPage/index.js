import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { LowerSlice } from "../../components";
import Modal from "../../components/Modal";
import { FiShoppingCart } from "react-icons/fi";
import "./styles.css";

const DetailsPage = ({ onAdd }) => {
  const [products, setProducts] = useState({});
  const params = useParams();
  // const { onAdd } = props;
  // console.log("On add?", props);

  useEffect(() => {
    try {
      const getProducts = async () => {
        const response = await axios.get(
          `http://localhost:4000/products/${params.id}`
        );
        // console.log(response);
        setProducts(response.data);
      };
      getProducts();
    } catch (e) {
      console.log(e.message);
    }
  }, [params.id]);

  return (
    <div>
      <div onAdd={onAdd} className="ContainerDetailsPage">
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
              <div className="button-and-reviews">
                <div>
                  <button
                    onClick={() => onAdd(products)}
                    className="button-shopping-cart"
                  >
                    Add to shoppingcart
                    <FiShoppingCart className="icon-shopping-cart" />
                  </button>
                </div>
                <div>
                  <Modal
                    buttonName={"Review the product"}
                    formTitle={"Write your review below:"}
                  />
                </div>

              <div>
                <Modal
                  buttonName={"Review the product"}
                  formTitle={"Write your review below:"}
                  productId={params.id}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <LowerSlice reviews={products.reviews} />
    </div>
  );
};

export { DetailsPage };
