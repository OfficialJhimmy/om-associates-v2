import React from "react";
import "./index.css";

const HowToJoin = () => {
  return (
    <section className="howtojoin__container">
      <div className="howtojoin__box">
        <h2>Students and recent Graduates</h2>
        <p>
          As a recent graduate, your foundational experiences are pivotal in
          shaping the trajectory of your career. At O.M. Associates, our ethos
          revolves around GROWTH. We are dedicated to fostering the growth of
          bright minds like yours, committed to making a positive impact in the
          world. We extend a warm invitation to you, providing the resources and
          support needed for your journey towards a successful career.
        </p>
        <p>Click below if you currently have 0-2 years work experience.</p>
        <button>Explore opportunities</button>
      </div>
      <div className="howtojoin__box">
        <h2>Experienced Professionals</h2>
        <p>
          At O.M. Associates, we are dedicated to fostering continuous learning
          and growth opportunities for our employees at every stage of their
          careers. As an experienced hire joining our team, you'll thrive in a
          dynamic environment that values your wealth of knowledge and
          encourages ongoing personal and professional development.
        </p>
        <p>Click below if you currently have 2+ years work experience.</p>
        <button>Explore Opportunities</button>
      </div>
    </section>
  );
};

export default HowToJoin;
