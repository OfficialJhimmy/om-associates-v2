import "./index.css";
import audit from "../../assets/images/audit.svg";
import tax from "../../assets/images/tax.svg";
import cfo from "../../assets/images/cfo.svg";
import consulting from "../../assets/images/consulting.svg";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <section className="ourservices__container">
      <div className="ourservices__headings">
        <p>Services</p>
        <h2>
          Get Control over your Business, Let us take your finances to the next
          level
        </h2>
      </div>
      <div className="ourservices__cards">
        <div className="ourservices__card">
          <Link to='/audit'>
          <img src={audit} alt="our services info" />
          <p className="ourservices__card--top__para">Audit & Assurance</p>
          <p className="ourservices__card--last__para">
            We provide audit services targeted at enhancing your financial
            reporting system, better understanding of your business and making
            informed decisions through access to diversity of skillsets,
            experience and knowledge providing better insights for your
            business.
          </p>
          </Link>
          
        </div>
        <div className="ourservices__card">
          <Link to="/tax">
          <img src={tax} alt="our services info" />
          <p className="ourservices__card--top__para">Tax Advisory</p>
          <p className="ourservices__card--last__para">
            Quality individual and business tax assessment preparation and
            proactive tax planning services guarantee tax compliance for our
            clients without hindering their core businesses. We also help to
            restructure transactions for maximum tax advantage.
          </p>
          </Link>
          
        </div>
        <div className="ourservices__card">
          <Link to="/consulting">
           <img src={consulting} alt="our services info" />
          <p className="ourservices__card--top__para">Consulting</p>
          <p className="ourservices__card--last__para">
            O.M. Associates has capability to solve complex business issues and
            provide solutions to the challenges in your internal processes, new
            business strategy and implementation, financing to reflect your
            envisioned future.
          </p>
          </Link>
         
        </div>
        <div className="ourservices__card">
          <Link to="/cfo">
          <img src={cfo} alt="our services info" />
          <p className="ourservices__card--top__para">CFO Services</p>
          <p className="ourservices__card--last__para">
            The Outsourced CFO. We have a team of professional CFOs with years
            of valuable experiences across the industries. OMA CFO Service is
            setup to provide the MSMEs with a best-in-class strategic finance
            function.
          </p>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default OurServices;
