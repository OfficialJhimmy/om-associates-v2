import { Link } from "react-router-dom";
import "./index.css";
import one from "../../assets/images/events-7.jpeg";
import two from "../../assets/images/events-8.jpeg";
import three from "../../assets/images/events-3.jpeg";
import four from "../../assets/images/events-4.jpeg";
import five from "../../assets/images/events-9.jpeg";
import six from "../../assets/images/events-6.jpeg";

const Gallery = () => {
  return (
    <section className="gallery__container">
      <div className="gallery__headings">
        <div>
          <p className="gallery__headings--p">Events</p>
          <h2 className="gallery__headings--main">
            Capturing Unforgettable Moments: Explore Our Events Gallery
          </h2>
        </div>

        <Link to="/events" className="gallery__button">
          More gallery
        </Link>
      </div>
      <div className="gallery__image--container">
        <img src={one} alt="Pictures of our events" />
        <img src={two} alt="Pictures of our events" />
        <img src={three} alt="Pictures of our events" />
        <img src={four} alt="Pictures of our events" />
        <img src={five} alt="Pictures of our events" />
        <img src={six} alt="Pictures of our events" />
      </div>
    </section>
  );
};

export default Gallery;
