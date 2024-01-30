import ReusableHero from "../../components/Hero/ReusableHero";
import WhyJoinUs from "../../components/Reusable/WhyJoinUs";
import Clients from '../../components/Clients/Clients'
import Footer from "../../components/Footer/Footer";
import OurPurpose from "../../components/Reusable/OurPurpose";


const Career = () => {
  return (
    <>
      <ReusableHero
        title="Forge Your Path to Success"
        subText="Explore rewarding opportunities and join a team dedicated to innovation, growth, and professional development."
      />
      <WhyJoinUs/>
      <OurPurpose/>
      <Clients/>
      <Footer/>
    </>
  );
};

export default Career;
