import "./index.css";
import olufemi from "../../assets/images/mr-om 1.png";
import modupe from "../../assets/images/modupe 1.png";
import remi from "../../assets/images/Remi-Bello-Profile-Picture 1.png";
import lekan from "../../assets/images/Lekan-Lasisi-Profile-Picture 1.png";

const OurTeam = () => {
  return (
    <section className="team__container">
      <div className="team__container--headings">
        <p className="team__container--toppara">Our People</p>
        <h2>We champion the bold to achieve the extraordinary</h2>
        <p className="top__container--subpara">
          At O.M. Associates, we champion the bold to achieve the extraordinary.
          Our dynamic team, led by our Managing Partner and accomplished
          Partners, thrives on challenges and embraces innovation. Together, we
          propel towards unprecedented success with a commitment to unwavering
          integrity.
        </p>
      </div>

      <div className="team__image--container">
        <div className="team__image--box">
          <div className="team__image--box--container">
            <img
              src={olufemi}
              alt="Team Member at O.M. Associates"
              className="mrolufemi"
            />
            <span className="team__image--colour-span">Managing Partner</span>
          </div>
          <p>Mr. Olufemi Oguntade</p>
        </div>
        <div className="team__image--box">
          <div className="team__image--box--container">
            <img
              src={modupe}
              alt="Team Member at O.M. Associates"
              className="resize-image"
            />
            <span className="team__image--span">Partner</span>
          </div>
          <p>Mrs. Modupe Florence Oguntade</p>
        </div>
        <div className="team__image--box">
          <div className="team__image--box--container">
            <img
              src={remi}
              alt="Team Member at O.M. Associates"
              className="resize-image"
            />
            <span className="team__image--span">Partner</span>
          </div>
          <p>Alhaji Ismaila Aderemi Bello</p>
        </div>
        <div className="team__image--box">
          <div className="team__image--box--container">
            <img
              src={lekan}
              alt="Team Member at O.M. Associates"
              className="resize-image"
            />
            <span className="team__image--span">Partner</span>
          </div>
          <p>Mr. Lateef Olalekan Lasisi</p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
