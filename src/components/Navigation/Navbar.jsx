import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/icons/new-logo.png";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      {/* <nav className='navbar'> */}
      <nav className={color ? "navbar navbar-bg" : "navbar"}>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={Logo} alt="Logo" className="logo--navbar" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <BiLogOut className="menu-icon__nav" />
          ) : (
            <HiOutlineMenuAlt2 className="menu-icon__nav" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
        <li className="nav-item">
            <Link
              to="/insights"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Insights
            </Link>
          </li>

          {/* <li className="nav-item">
            <Link to="/industries" className="nav-links" onClick={closeMobileMenu}>
              Industries
            </Link>
          </li> */}

           <li
            className="nav-item"
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/about"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
 
          <li className="nav-item">
            <Link to="/career" className="nav-links" onClick={closeMobileMenu}>
              Career
            </Link>
          </li>
         
          <li className="nav-item wht--link">
            <Link to="/whtapp" className="nav-links" onClick={closeMobileMenu}>
              WHT APP
            </Link>
          </li>
          
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;
