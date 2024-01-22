import PrimaryButton from "../Button/PrimaryButton";
import { NewNavbar } from "../Navigation/NewNavbar";
import "./index.css";

const HomeHero = () => {
  return (
    <>
      <div className="homehero__container">
        <NewNavbar />

        <div className="homehero__content">
          <h1>Your Trusted Partner in Professional Financial Services</h1>
          <p>
            We are a team of professionals with years of valuable experiences
            who are capable of solving complex business issues and to provide
            solutions to accounting challenges.
          </p>
          <div className="homehero__content--button">
            <PrimaryButton title="About us" url="/about" />
            <PrimaryButton title="Services" url="/services" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
