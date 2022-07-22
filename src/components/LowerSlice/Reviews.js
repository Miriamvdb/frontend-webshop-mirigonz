import axios from "axios";
import { useEffect, useState } from "react";

const Reviews = (props) => {
  // const [reviewList, setReviewList] = useState(null);

  // useEffect(() => {
  //   try {
  //     const getReviews = async () => {
  //       const reviewResponse = await axios.get("http://localhost:4000/reviews");
  //       setReviewList(reviewResponse.data);
  //     };

  //     getReviews();
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }, []);

  const reviewList2 = props.reviews;

  const reloadComponent = () => window.location.reload(false);

  const deletReview = async (id) => {
    // event.preventDefault();
    reloadComponent();

    try {
      await axios.delete(`http://localhost:4000/reviews/${id}`, {
        // reviewerName: reviewerName,
        // text: reviewText,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="ContainerFakeText">
      <div>
        {reviewList2
          ? reviewList2.map((review, i) => (
              <div className="review-card" key={i}>
                <b>
                  {review.reviewerName} Says {": "}{" "}
                </b>{" "}
                {review.text}{" "}
                <button
                  className="transparent-button"
                  onClick={() => deletReview(review.id)}
                >
                  ❌
                </button>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Reviews;
