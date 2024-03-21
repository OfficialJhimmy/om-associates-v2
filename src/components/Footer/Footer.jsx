import { Link } from "react-router-dom";
import "./index.css";
import logo from "../../assets/images/new-logo.png";

import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <div className="footer__top--container">
        <div className="footer__image">
          <img src={logo} alt="O.M. Associates Logo" />
        </div>
        <div className="footer__info">
          <div className="footer__services">
            <h3>Services</h3>

            <div className="footer__services--links">
              <Link to="/audit">Audit & Assurance</Link>
              <Link to="/tax">Tax Advisory</Link>
              <Link to="/consulting">Consulting</Link>
              <Link to="/cfo">CFO Services</Link>
            </div>
          </div>
          <div className="footer__company">
            <h3>Company</h3>
            <div className="footer__services--links">
              <Link to="/about">About</Link>
              <Link to="/about">Careers</Link>
              <Link to="/events">Events</Link>
              <Link to="/about">Our Team</Link>
            </div>
          </div>

          <div className="footer__company">
            <h3>Resources</h3>
            <div className="footer__services--links">
              <Link to="/insights">Insights</Link>
              <Link to="/insights">News</Link>
              <Link to="/whtapp">WHTAPP</Link>
            </div>
          </div>
          <div className="footer__address">
            <h3>Address</h3>
            <p>
              Plot 699C, Somide Odujinrin Avenue, (Opposite Wellspring College)
              Omole Phase 2, Lagos.
            </p>

            <div className="footer__icons">
              <a
                href="https://www.facebook.com/omassociates2?mibextid=ZbWKwL"
                className="social-media__links"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare className="footer__icon" />
              </a>
              <a
                href="https://linkedin.com/in/o-m-associates-19a907244"
                className="social-media__links"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="footer__icon" />
              </a>

              <a
                href="https://www.instagram.com/omassociates_ng/?igsh=yzljYTk1ODg3Zg%3D%3D"
                className="social-media__links"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="footer__icon" />
              </a>

              <a
                href="https://twitter.com/OMAssociates8"
                className="social-media__links"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter className="footer__icon" />
              </a>
              <a href="mailto:omassociates.consultants@gmail.com">
                <BiLogoGmail className="footer__icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom--date">
      <h3>&#169;{new Date().getFullYear()} O.M. Associates | All rights reserved </h3>
      </div>
    </footer>
  );
};

export default Footer;
