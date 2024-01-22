import ReusableHero from "../../components/Hero/ReusableHero";
import Gallery from '../../components/Gallery/Gallery'
import Footer from '../../components/Footer/Footer'

const Events = () => {
  return (
    <>
      <ReusableHero
        title="Unforgettable Moments, Lasting Connections"
        subText="Explore our vibrant events that bring our community together and create memorable experiences."
      />
      <Gallery/>
      <Footer/>
    </>
  );
};

export default Events;
