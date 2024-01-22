// import Navbar from "../../components/Navigation/Navbar"

import Clients from "../../components/Clients/Clients"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"
import Gallery from '../../components/Gallery/Gallery'
import HomeHero from "../../components/Hero/HomeHero"
import AboutUs from "../../components/Reusable/AboutUs"
import OurIndustries from "../../components/Reusable/OurIndustries"
import OurServices from "../../components/Reusable/OurServices"
import OurStory from "../../components/Story/OurStory"


const Home = () => {
  return (
    <>
      {/* <Navbar/> */}

      <HomeHero/>
      <Clients/>
      <AboutUs/>
      <OurServices/>
      <OurStory/>
      <OurIndustries/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home