import React, { useState } from "react";
import "./styles.css";

export default function Modal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  // console.log(textarea);

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
            <form className="text-area">
              <textarea value={textarea} onChange={handleChange} />
            </form>
            <p>
              Click the "Submit" button and the form-data will be sent to a page
              on the server called "action_page.php".
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
            <button>Send Review</button>
          </div>
        </div>
      )}
    </>
  );
}
