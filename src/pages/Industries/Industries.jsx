import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import ReusableHero from "../../components/Hero/ReusableHero";
import OurIndustries from '../../components/Reusable/OurIndustries'
const Industries = () => {
  return (
    <>
      <ReusableHero
        title="Transforming Industries, Inspiring Progress"
        subText="Discover how our expertise is reshaping diverse industries, driving positive change, and fostering innovation."
      />
      <OurIndustries/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Industries;
