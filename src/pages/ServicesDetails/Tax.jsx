/* eslint-disable react/no-unescaped-entities */
import Clients from "../../components/Clients/Clients";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import "./index.css";
import tax from "../../assets/images/tax.svg";
import taxone from "../../assets/images/tax.png";
import bag from "../../assets/images/bag.png";
import taxes from "../../assets/images/taxes.png";
import taxing from "../../assets/images/taxing.png";
import ReusableHero from "../../components/Hero/ReusableHero";
const Tax = () => {
  return (
    <>
      <ReusableHero
        title="Your Tax Advantage Partner"
        subText="Maximize tax benefits and ensure compliance with our expert Tax Advisory services for individuals and businesses."
      />
      <section className="servicesdetails__container">
        <div className="servicesdetails__heading">
          <img src={tax} alt="Audit and Assurance Icon" />
          <h2>Tax Advisory</h2>
          <p>
            Quality individual and business tax assessment preparation and
            proactive tax planning services guarantee tax compliance for our
            clients without hindering their core businesses. We also help to
            restructure transactions for maximum tax advantage.
          </p>
        </div>
        <div className="servicesdetails__cards">
          <div className="servicesdetails__card">
            <img src={taxone} alt="om icons" />
            <p className="servicesdetails__card--header">
              Comprehensive Tax Assessment
            </p>
            <p className="servicesdetails__card--info">
              We guarantee tax compliance for our clients without hindering
              their core businesses. Our experts conduct thorough assessments to
              optimize deductions and credits, providing a proactive approach to
              tax compliance.
            </p>
          </div>
          <div className="servicesdetails__card">
            <img src={bag} alt="om icons" />
            <p className="servicesdetails__card--header">
              Proactive Tax Planning
            </p>
            <p className="servicesdetails__card--info">
              O.M. Associates goes beyond traditional tax compliance by
              restructuring transactions to achieve optimal tax benefits. Our
              proactive approach minimizes tax liabilities, allowing you to
              allocate resources strategically.
            </p>
          </div>
          <div className="servicesdetails__card">
            <img src={taxes} alt="om icons" />
            <p className="servicesdetails__card--header">
              Transaction Restructuring
            </p>
            <p className="servicesdetails__card--info">
              We assist in restructuring transactions to maximize tax
              advantages, ensuring a smooth and tax-efficient process. OMA's tax
              advisory services are designed to align with your business
              objectives while minimizing tax burdens.
            </p>
          </div>
          <div className="servicesdetails__card">
            <img src={taxing} alt="om icons" />
            <p className="servicesdetails__card--header">
              Compliance Solutions
            </p>
            <p className="servicesdetails__card--info">
              O.M. Associates provides ongoing support to meet tax regulations
              and deadlines. Our proactive approach ensures that your business
              stays ahead of regulatory changes, allowing you to focus on your
              core operations.
            </p>
          </div>
        </div>
      </section>

      <section className="services__expectations">
        <div className="services__expect--description">
          <p className="services__expect--colour">We'll work with you</p>
          <h2>What To Expect</h2>
          <p className="services__expect--para">
            At O.M. Associates, our Tax Advisory services are designed to
            provide a comprehensive understanding of your business's taxes. When
            you engage with us, you can anticipate:
          </p>
        </div>
        <div className="services__expect--cards">
          <div className="service__expect--card">
            <h3>Clear Communication</h3>
            <p>
              Expect transparent and concise reporting from our team. We believe
              in clear communication to ensure you fully understand the tax
              advisory findings, enabling you to make strategic decisions for
              the future of your business.
            </p>
          </div>
          <div className="service__expect--card">
            <h3>Collaborative Approach</h3>
            <p>
              We engage closely with your team, fostering a collaborative
              environment to comprehend the unique aspects of your business.
              This approach ensures a personalized auditing experience that
              meets your specific needs.
            </p>
          </div>
          <div className="service__expect--card">
            <h3>Thorough Analysis</h3>
            <p>
              Our team of expert conducts a meticulous examination of your
              financial records. This in-depth analysis goes beyond the surface,
              providing you with valuable insights and recommendations to drive
              informed decision-making.
            </p>
          </div>
          <div className="service__expect--card">
            <h3>Continuous Support</h3>
            <p>
              Our commitment doesn't end with advisory. We remain dedicated to
              supporting your financial goals, offering ongoing advice and
              guidance to help your business thrive.
            </p>
          </div>
        </div>
      </section>

      <Clients />
      <Contact />
      <Footer />
    </>
  );
};

export default Tax;
