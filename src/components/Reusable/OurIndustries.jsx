import "./index.css";
import agric from "../../assets/icons/seedling.png";
import gaming from "../../assets/icons/controller.png";
import government from "../../assets/icons/government.png";
import financial from "../../assets/icons/financial.png";
import buildings from "../../assets/icons/buildings.png";
const OurIndustries = () => {
  return (
    <section className="ourservices__container">
      <div className="ourservices__headings">
        <p>Our Industries</p>
        <h2>
          Every Successful Business Strategy is Fortified by an in-depth
          Understanding of Industry Dynamics.
        </h2>
      </div>
      <div className="ourindustries__cards">
        <div className="ourindustries__card">
          <img src={agric} alt="our services info" />
          <p className="ourservices__card--top__para">Agriculture</p>
          <p className="ourservices__card--last__para">
            The importance of record keeping in agriculture cannot be
            overemphasized. Our clients enjoy accurate and timely specialized
            records of valuation, forecasts, and profitability which provide
            valuable information for the assessment of business performances
          </p>
        </div>
        <div className="ourindustries__card">
          <img src={government} alt="our services info" />
          <p className="ourservices__card--top__para">Government</p>
          <p className="ourservices__card--last__para">
            We support our government clients with their revenue drive and
            inclusion agenda so that in turn they can provide public quality
            services and improve the lives of the citizenry. This was achieved
            by deploying technological support to automate tax returns filing
            and remittance processes.
          </p>
        </div>
        <div className="ourindustries__card">
          <img src={buildings} alt="our services info" />
          <p className="ourservices__card--top__para">
            Micro, Small, and Medium Enterprises
          </p>
          <p className="ourservices__card--last__para">
            Micro, Small, and Medium Enterprises (MSMEs) are small sized
            entities with specific definition contributing significantly to
            output, employment , exports etc to the economy. We are
            strategically positioned to assist these entities in mitigating the
            financial and accounting challenges faced by this sector of the
            economy.
          </p>
        </div>
        <div className="ourindustries__card">
          <img src={gaming} alt="our services info" />
          <p className="ourservices__card--top__para">Gaming Sector</p>
          <p className="ourservices__card--last__para">
            We also provide services in the gaming sector of the economy. Our
            clients in the gaming sector have benefited from our expertise and
            vast knowledge in this area of speciliazation.
          </p>
        </div>

        <div className="ourindustries__card">
          <img src={financial} alt="our services info" />
          <p className="ourservices__card--top__para">Financial Services</p>
          <p className="ourservices__card--last__para">
            Our clients in the financial services have benefited from our
            capabilities, expertise and relationships with the various
            government agencies in the resolution of tax and other financial
            conflicts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurIndustries;
