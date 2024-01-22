/* eslint-disable no-unused-vars */
import React from "react";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import ReusableHero from "../../components/Hero/ReusableHero";
import AboutUs from "../../components/Reusable/AboutUs";
import OurStory from "../../components/Story/OurStory";
import OurTeam from "../../components/Team/OurTeam";
import CoreValues from "../../components/Values/CoreValues";
// import Scrolltotop from '../../components/Scroll-to-top/index'
import ScrollToTop from "../../components/Scroll-to-top/index";
const About = () => {
  return (
    <>
    <ScrollToTop/>
      <ReusableHero
        title="Welcome to Our Story"
        subText="Discover the journey, values, and people that make O.M. Associates a trusted partner in your financial success."
      />
      <AboutUs />
      <CoreValues />
      <OurTeam />
      <Contact />
      <OurStory />
      <Footer />
    </>
  );
};

export default About;
