/* eslint-disable react/no-unescaped-entities */
import "./index.css";
import { GoLaw } from "react-icons/go";
import { GiRibbonMedal } from "react-icons/gi";
import { FaLightbulb, FaHandHoldingHand } from "react-icons/fa6";

const CoreValues = () => {
  return (
    <section className="values__container">
      <div className="values__info">
        <p className="values__info--colour">Values</p>
        <h2>Our Values</h2>

        <p className="values__info--mission">Mission</p>
        <span className="values__info--mission--span">
          To provide top-notch professional services to our clients and
          surpass the expectations of all our stakeholders
        </span>

        <p className="values__info--vision">Vision</p>
        <span className="values__info--vision--span">
          To be a world-class solution provider of professional services in
          accounting, audit and taxation
        </span>
      </div>
      <div className="values__cards">
        <div className="values__card">
          <GoLaw className="values__card--icon"/>
          <h3>Integrity</h3>
          <p>
            At the core of our foundation, we uphold the principles of honesty,
            transparency, and ethical conduct. Integrity guides every decision,
            action, and interaction.
          </p>
        </div>
        <div className="values__card">
          <GiRibbonMedal className="values__card--icon"/>
          <h3>Excellence</h3>
          <p>
            We strive for excellence in everything we do. From delivering
            outstanding products and services to pushing the boundaries of
            innovation, our commitment to excellence is unwavering.
          </p>
        </div>
        <div className="values__card">
          <FaLightbulb className="values__card--icon"/>
          <h3>Innovation</h3>
          <p>
            Embracing creativity and forward-thinking, we foster a culture of
            innovation. We continuously seek new ideas, technologies, and
            solutions to stay ahead in a rapidly evolving world.
          </p>
        </div>
        <div className="values__card">
          <FaHandHoldingHand className="values__card--icon"/>
          <h3>Team</h3>
          <p>
            Together, we achieve more. Our collaborative spirit and shared goals
            create a strong, supportive team where every individual's
            contribution is valued and celebrated.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
