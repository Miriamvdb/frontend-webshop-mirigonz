import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function Modal(props) {
  const [modal, setModal] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [reviewerName, setReviewerName] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const reloadComponent = () => window.location.reload(false);

  const submitReview = async (event) => {
    event.preventDefault();
    setModal(!modal);
    reloadComponent();

  // console.log(textarea);
    try {
      await axios.post("http://localhost:4000/reviews", {
        reviewerName: reviewerName,
        text: reviewText,
        productId: props.productId,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        {props.buttonName}
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{props.formTitle} </h2>
            <div>
              <form onSubmit={submitReview}>
                <input
                  className="InputSignUp"
                  type="text"
                  value={reviewerName}
                  placeholder="Reviewer Name"
                  onChange={(event) => {
                    setReviewerName(event.target.value);
                  }}
                  required
                />
                <textarea
                  className="InputSignUp2"
                  type="text"
                  value={reviewText}
                  placeholder="Review Text"
                  onChange={(event) => {
                    setReviewText(event.target.value);
                  }}
                  required
                />

                <br />
                <br />
                <button type="submit">Send review</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
