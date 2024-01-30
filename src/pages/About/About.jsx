/* eslint-disable no-unused-vars */
import React from "react";
import Contact from "../../components/Contact/Contact";
// import Map from "../../components/Contact/Map";
import Footer from "../../components/Footer/Footer";
import ReusableHero from "../../components/Hero/ReusableHero";
import AboutUs from "../../components/Reusable/AboutUs";
import OurPurpose from "../../components/Reusable/OurPurpose";
import OurStory from "../../components/Story/OurStory";
import OurTeam from "../../components/Team/OurTeam";
import CoreValues from "../../components/Values/CoreValues";
const About = () => {
  return (
    <>
      <ReusableHero
        title="Welcome to Our Story"
        subText="Discover the journey, values, and people that make O.M. Associates a trusted partner in your financial success."
      />
      <AboutUs />
      <CoreValues />
      <OurPurpose/>
      <OurTeam />
      {/* <Map/> */}
      <Contact />
      <OurStory />
      <Footer />
    </>
  );
};

export default About;
