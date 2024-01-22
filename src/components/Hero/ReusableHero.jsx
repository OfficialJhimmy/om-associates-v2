/* eslint-disable react/prop-types */
import Navbar from "../Navigation/Navbar";
// import { NewNavbar } from "../Navigation/NewNavbar";
import "./index.css";
const ReusableHero = ({title, subText}) => {
  return (
    <>
      <div className="homehero__container">
        {/* <NewNavbar /> */}
        <Navbar/>

        <div className="homehero__content">
          <h2>{title}</h2>
          <p>
            {subText}
          </p>
          
        </div>
      </div>
    </>
  )
}

export default ReusableHero