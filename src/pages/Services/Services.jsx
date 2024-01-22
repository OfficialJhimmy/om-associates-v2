import OurServices from "../../components/Reusable/OurServices";
import OurIndustries from "../../components/Reusable/OurIndustries";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import ReusableHero from "../../components/Hero/ReusableHero";
const Services = () => {
  return (
    <>
      <ReusableHero
        title="Comprehensive Financial Solutions"
        subText="Explore our wide range of services designed to meet your unique financial needs and propel your success."
      />
      <OurServices />
      <OurIndustries />
      <Contact />
      <Footer />
    </>
  );
};

export default Services;
