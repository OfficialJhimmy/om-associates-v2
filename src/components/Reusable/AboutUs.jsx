import "./index.css";
import aboutImage from '../../assets/images/Photo.png'
import { MdOutlineStar } from "react-icons/md";
import { FaSmile } from "react-icons/fa";
import pattern from '../../assets/images/pattern.png'
import users from '../../assets/images/Icon.svg'

const AboutUs = () => {
  return (
    <section className="aboutus__container">
      <div className="aboutus__info">
        <span>About us</span>
        <h2>About our Consulting Professional Team</h2>
        <p className="aboutus__info--bigpara">We create experiences and build products that make business grow</p>
        <p className="aboutus__info--smallpara">
          Get help from Alex Moore, a professional business coach with advanced
          experience on growth and business scaling.
        </p>

        <div className="aboutus__info--box">
          <div className="aboutus__info--box--cover">
            <div className="info--box--cover--icons">
            <MdOutlineStar className="icon--star" fill="#FFCC4A" />
              <p>400+</p>
            </div>
            <p className="aboutus__info--box--cover__para">Business Services</p>
          </div>
          <div className="aboutus__info--box--cover">
            <div className="info--box--cover--icons">
            <FaSmile className="icon--smile" fill="#4EAF4E"/>
              <p>100+</p>
            </div>
            <p className="aboutus__info--box--cover__para">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="aboutus__imagebox">
        <img src={aboutImage} alt="About our professional team" className="img--us"/>
        <img src={pattern} alt="background pattern" className="img--pattern"/>
        <div className="aboutus__icon--bottom">
        <img src={users} alt="Group of users" />
          <div>
            <p className="aboutus__icon--bottom--total">19+</p>
            <p className="aboutus__icon--bottom--para">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
