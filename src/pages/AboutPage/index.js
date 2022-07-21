import "./styles.css";
import Modal from "../../components/Modal";

const AboutPage = () => {
  return (
    <div>
      <div className="AboutPage">
        <div className="text-area">
          <h1>About Us</h1>
          <h3>We work hard to make you happy.</h3>
        </div>
        <div>
          <img
            src="https://www.pngall.com/wp-content/uploads/9/SpongeBob-TV-Series.png"
            alt="bob"
            className="bob-image"
          />
        </div>
      </div>
      <div>
        <Modal formTitle={"Send us a message:"} buttonName={"Contact Us"} />
      </div>
      <div className="big-text-area-parent">
        <p className="big-text-area-child">
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          perferendis suscipit officia recusandae, eveniet quaerat assumenda id
          fugit, dignissimos maxime non natus placeat illo iusto! Sapiente
          dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos
          molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae
          enim incidunt porro fuga ea. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Provident perferendis suscipit officia recusandae,
          eveniet quaerat assumenda id fugit, dignissimos maxime non natus
          placeat illo iusto! Sapiente dolorum id maiores dolores? Illum
          pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta
          tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea."
        </p>
      </div>
    </div>
  );
};

export { AboutPage };
