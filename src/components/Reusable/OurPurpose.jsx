import { FaRegLightbulb } from "react-icons/fa";
import { PiHandshake } from "react-icons/pi";
import { GiProgression } from "react-icons/gi";
import "./index.css";
import purposeone from '../../assets/images/purposeone.jpg'
const OurPurpose = () => {
  return (
    <section className="purpose__container">
      <div className="purpose__text">
        <div className="purpose__headings">
          <p>Our Purpose</p>
          <h2>Empowering Growth, Inspiring Excellence</h2>
        </div>
        <div className="purpose__text--cards">
          <div className="purpose__text--card">
            <FaRegLightbulb className="purpose__icons "/>
            <div>
              <h3>Driving Innovation</h3>
              <p>
                At the forefront of creativity, we drive innovation to redefine
                industry standards and exceed expectations.
              </p>
            </div>
          </div>
          <div className="purpose__text--card">
            <PiHandshake className="purpose__icons purpose__icons--big"/>
            <div>
              <h3>Fostering Collaboration</h3>
              <p>
                Building bridges and fostering collaboration, we believe in the
                strength of unity to achieve shared goals and success.
              </p>
            </div>
          </div>
          <div className="purpose__text--card">
            <GiProgression className="purpose__icons purpose__icons--big"/>
            <div>
              <h3>Enabling Progress</h3>
              <p>
                Empowering individuals and businesses, we are committed to
                enabling progress and creating a positive impact on society.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="purpose__image">
        <img src={purposeone} alt="Purpose Image" />
      </div>
    </section>
  );
};

export default OurPurpose;
