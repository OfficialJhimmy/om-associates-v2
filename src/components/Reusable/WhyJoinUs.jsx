import './index.css'
import one from '../../assets/images/career-1.jpg'
import two from '../../assets/images/career-2.jpg'
import three from '../../assets/images/career-3.jpg'
import four from '../../assets/images/career-4.jpg'

const WhyJoinUs = () => {
  return (
    <section className="joinus__container">
      <div className="joinus__heading">
        <p className="joinus__heading--color">Career</p>
        <h2>Why Join Us?</h2>
      </div>
      <div className="joinus__cards">
        <div className="joinus__card">
          <img src={four} alt="Reasons to Join us" />
          <h3>Exceptional Expertise</h3>
          <p>
            Join a team of seasoned professionals with decades of diverse
            experience, offering unparalleled opportunities for skill
            development and growth.
          </p>
        </div>
        <div className="joinus__card">
          <img src={one} alt="Reasons to Join us" />
          <h3>Culture of Integrity</h3>
          <p>
            Be a part of an organization rooted in principles of honesty,
            transparency, and ethical conduct, where integrity guides every
            decision and action.
          </p>
        </div>
        <div className="joinus__card">
          <img src={two} alt="Reasons to Join us" />
          <h3>Innovation at the Core</h3>
          <p>
            Experience a dynamic work environment that encourages creativity,
            forward-thinking, and a continuous pursuit of innovative solutions
            in the financial sector.
          </p>
        </div>
        <div className="joinus__card">
          <img src={three} alt="Reasons to Join us" />
          <h3>Collaborative Team Spirit</h3>
          <p>
            Join a collaborative team where excellence is celebrated, and every
            individuals contribution is valued, fostering a supportive and
            inclusive work culture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
