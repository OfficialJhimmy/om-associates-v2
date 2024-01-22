/* eslint-disable react/no-unescaped-entities */
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import "./index.css";
import audit from "../../assets/images/audit.svg";
import dataanalytics from "../../assets/images/data-analytics.png";
import compliant from "../../assets/images/compliant.png";
import data from "../../assets/images/data.png";
import auditing from "../../assets/images/audit.png";
import ReusableHero from "../../components/Hero/ReusableHero";
const Auditing = () => {
  return (
    <>
      <ReusableHero
        title="Elevating Financial Integrity"
        subText="Experience trust and transparency with our Auditing & Assurance services, providing a solid foundation for your business."
      />
      <section className="servicesdetails__container">
        <div className="servicesdetails__heading">
          <img src={audit} alt="Audit and Assurance Icon" />
          <h2>Auditing & Assurance</h2>
          <p>
            We provide audit services targeted at enhancing your financial
            reporting system, better understanding of your business and making
            informed decisions through access to diversity of skillsets,
            experience and knowledge providing better insights for your
            business.
          </p>
        </div>
        <div className="servicesdetails__cards">
          <div className="servicesdetails__card">
            <img src={dataanalytics} alt="om icons" />
            <p className="servicesdetails__card--header">Financial Analysis</p>
            <p className="servicesdetails__card--info">
              Gain insights into your company's financial position with our
              Financial Analysis services. This comprehensive approach offers a
              better understanding of your business, empowering you to make
              informed decisions.
            </p>
          </div>
          <div className="servicesdetails__card">
            <img src={compliant} alt="om icons" />
            <p className="servicesdetails__card--header">Compliance Audit</p>
            <p className="servicesdetails__card--info">
              Ensure regulatory adherence and strengthen internal controls with
              our Compliance Audit services. Our expert team evaluates your
              operations to ensure compliance with industry regulations and
              legal requirements.
            </p>
          </div>
          <div className="servicesdetails__card">
            <img src={data} alt="om icons" />
            <p className="servicesdetails__card--header"> Internal Auditing</p>
            <p className="servicesdetails__card--info">
              Enhance operational efficiency and manage risks effectively
              through our Internal Auditing services. We identify areas for
              improvement in processes and operations, providing valuable
              insights to streamline your business.
            </p>
          </div>
          <div className="servicesdetails__card">
            <img src={auditing} alt="om icons" />
            <p className="servicesdetails__card--header">Specialized Audits</p>
            <p className="servicesdetails__card--info">
              For specialized needs, choose our Specialized Audits services.
              Whether it's forensic audits to investigate financial
              irregularities or IT audits to evaluate information systems'
              effectiveness, we bring a diverse skill set and experience to
              address your unique business challenges.
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

export default Auditing;
