import axios from "axios";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    try {
      const getProducts = async () => {
        const productResponse = await axios.get(
          "http://localhost:4000/reviews"
        );
        setProductList(productResponse.data);
      };

      getProducts();
    } catch (e) {
      console.log(e.message);
    }
  }, []);
  return (
    <div className="ContainerFakeText">
      {/* <p>
        Dit is een fake reviewtekst. Alles wat hier staat is slechts om een
        indruk te geven van het grafische effect van tekst op deze plek. Wat u
        hier leest is een voorbeeldtekst. Deze wordt later vervangen door de
        uiteindelijke tekst, die nu nog niet bekend is. De faketekst is dus een
        tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze
        toch vaak lezen. Zelfs als men weet dat het om een faketekst gaat, lezen
        ze toch door.
      </p> */}
      <div>
        {productList
          ? productList.map((product, i) => (
              <div className="review-card" key={i}>
                <b>
                  {product.reviewerName} Says {": "}{" "}
                </b>{" "}
                {product.text}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Reviews;
