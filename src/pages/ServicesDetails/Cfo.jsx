/* eslint-disable react/no-unescaped-entities */
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import "./index.css";
import cfo from "../../assets/images/cfo.svg";
import financial from "../../assets/images/financial.png";
import performance from "../../assets/images/cash.png";
import kpi from "../../assets/images/kpi.png";
import risk from "../../assets/images/risk-management.png";
import ReusableHero from "../../components/Hero/ReusableHero";
const Cfo = () => {
  return (
    <>
      <ReusableHero
        title="Empowering Businesses with CFO Excellence"
        subText="Unlock strategic financial guidance and elevate your business with our Outsourced CFO Services."
      />
      <section className="servicesdetails__container">
        <div className="servicesdetails__heading">
          <img src={cfo} alt="Audit and Assurance Icon" />
          <h2>CFO Services</h2>
          <p>
            The Outsourced CFO. We have a team of professional CFOs with years
            of valuable industry experience. OMA CFO Service is setup to provide
            the MSMEs with a best-in-class strategic finance function.
          </p>
        </div>
        <div className="servicesdetails__cards">
          <div className="servicesdetails__card">
            <img src={financial} alt="om icons" />
            <p className="servicesdetails__card--header">
              Strategic Financial Planning
            </p>
            <p className="servicesdetails__card--info">
              Our team of professional CFOs, boasting years of valuable industry
              experience, is dedicated to providing MSMEs with a best-in-class
              strategic finance function. From budgeting to forecasting, we
              tailor financial plans that align with your business goals.
            </p>
          </div>
          <div className="servicesdetails__card">
            <img src={kpi} alt="om icons" />
            <p className="servicesdetails__card--header">
              Performance Analysis
            </p>
            <p className="servicesdetails__card--info">
              Our seasoned CFOs analyze key performance indicators (KPIs),
              ensuring a comprehensive understanding of your business's
              strengths and areas for improvement. This data-driven approach
              allows for informed decision-making and sustainable growth.
            </p>
          </div>
          <div className="servicesdetails__card">
            <img src={performance} alt="om icons" />
            <p className="servicesdetails__card--header">
              Cash Flow Management
            </p>
            <p className="servicesdetails__card--info">
              Our Outsourced CFOs implement robust strategies to manage and
              forecast cash flow effectively. This proactive approach ensures
              liquidity, enabling your business to navigate financial challenges
              and seize growth opportunities.
            </p>
          </div>
          <div className="servicesdetails__card">
            <img src={risk} alt="om icons" />
            <p className="servicesdetails__card--header">
              Risk Mitigation Strategies
            </p>
            <p className="servicesdetails__card--info">
              OMA CFO Service identifies potential risks and develops proactive
              measures to safeguard your business. Our CFOs work collaboratively
              with you to implement risk mitigation plans, ensuring the
              long-term stability of your financial operations.
            </p>
          </div>
        </div>
      </section>

      <section className="services__expectations">
        <div className="services__expect--description">
          <p className="services__expect--colour">We'll work with you</p>
          <h2>What To Expect</h2>
          <p className="services__expect--para">
            At O.M. Associates, our CFO Services services are designed to
            provide a comprehensive understanding of your business's financial
            health. When you engage with us, you can anticipate:
          </p>
        </div>
        <div className="services__expect--cards">
          <div className="service__expect--card">
            <h3>Clear Communication</h3>
            <p>
              Expect transparent and concise reporting from our team. We believe
              in clear communication to ensure you fully understand, enabling
              you to make strategic decisions for the future of your business.
            </p>
          </div>
          <div className="service__expect--card">
            <h3>Collaborative Approach</h3>
            <p>
              We engage closely with your team, fostering a collaborative
              environment to comprehend the unique aspects of your business.
              This approach ensures a personalized experience that meets your
              specific needs.
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
              Our commitment doesn't end with CFO services. We remain dedicated
              to supporting your financial goals, offering ongoing advice and
              guidance to help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* <Clients /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Cfo;
