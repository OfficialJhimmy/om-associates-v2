/* eslint-disable react/no-unescaped-entities */
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import "./index.css";
import consulting from "../../assets/images/consulting.svg";
import consult from "../../assets/images/consultancy.png";
import consultancy from "../../assets/images/consultation.png";
import meeting from "../../assets/images/meeting.png";
import consultation from "../../assets/images/consulting.png";
import ReusableHero from "../../components/Hero/ReusableHero";
const Consulting = () => {
  return (
    <>
      <ReusableHero
        title="Innovative Solutions, Proven Results"
        subText="Discover tailored consulting services that solve complex business challenges and drive transformation."
      />
      <section className="servicesdetails__container">
        <div className="servicesdetails__heading">
          <img src={consulting} alt="Audit and Assurance Icon" />
          <h2>Consulting</h2>
          <p>
            O.M. Associates has the capability to solve complex business issues
            and provide solutions to the challenges in your internal processes,
            new business strategy and implementation, financing to reflect your
            envisioned future.
          </p>
        </div>
        <div className="servicesdetails__cards">
          <div className="servicesdetails__card">
            <img src={consultancy} alt="om icons" />
            <p className="servicesdetails__card--header">
              Business Issue Resolution
            </p>
            <p className="servicesdetails__card--info">
              O.M. Associates has the capability to solve challenges in your
              internal processes, new business strategy, and implementation. Our
              consulting team provides actionable solutions to drive positive
              change.
            </p>
          </div>
          <div className="servicesdetails__card">
            <img src={meeting} alt="om icons" />
            <p className="servicesdetails__card--header">
              Strategic Business Planning
            </p>
            <p className="servicesdetails__card--info">
              Our consultants collaborate with you to develop and implement
              strategic plans that align with your business goals. From market
              analysis to resource planning, we ensure a roadmap for sustained
              growth.
            </p>
          </div>
          <div className="servicesdetails__card">
            <img src={consult} alt="om icons" />
            <p className="servicesdetails__card--header">Process Improvement</p>
            <p className="servicesdetails__card--info">
              O.M. Associates identifies opportunities for improvement in your
              internal processes, streamlining operations for maximum
              productivity. Our consultants implement tailored strategies to
              drive process excellence.
            </p>
          </div>
          <div className="servicesdetails__card">
            <img src={consultation} alt="om icons" />
            <p className="servicesdetails__card--header">Financial Strategy</p>
            <p className="servicesdetails__card--info">
              We work closely with your team to develop financial plans that
              reflect your envisioned future. From financing options to
              investment strategies, our consultants provide comprehensive
              guidance for long-term success.
            </p>
          </div>
        </div>
      </section>

      <section className="services__expectations">
        <div className="services__expect--description">
          <p className="services__expect--colour">We'll work with you</p>
          <h2>What To Expect</h2>
          <p className="services__expect--para">
            At O.M. Associates, our Auditing and Assurance services are designed
            to provide a comprehensive understanding of your business's
            financial health. When you engage with us, you can anticipate:
          </p>
        </div>
        <div className="services__expect--cards">
          <div className="service__expect--card">
            <h3>Clear Communication</h3>
            <p>
              Expect transparent and concise reporting from our team. We believe
              in clear communication to ensure you fully understand the audit
              findings, enabling you to make strategic decisions for the future
              of your business.
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
              Our team of expert auditors conducts a meticulous examination of
              your financial records. This in-depth analysis goes beyond the
              surface, providing you with valuable insights and recommendations
              to drive informed decision-making.
            </p>
          </div>
          <div className="service__expect--card">
            <h3>Continuous Support</h3>
            <p>
              Our commitment doesn't end with the audit. We remain dedicated to
              supporting your financial goals, offering ongoing advice and
              guidance to help your business thrive.
            </p>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default Consulting;
