import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import logo from "../../assets/images/new-logo.png";
import DropDown from '../Dropdown/DropDown'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "./index.css";

export const NewNavbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  const [showNav, setshowNav] = useState(false);

  const iconClick = () => {
    setshowNav(!showNav);
  };

  const links = [
    {
      title: "Services",
      dropdownn: [
        { title: "Our Services", path: "/services" },
        { title: "Audit", path: "/audit" },
        { title: "Tax & Advisory", path: "/tax" },
        { title: "Consulting", path: "/consulting" },
        { title: "CFO Services", path: "/cfo" },
      ],

      path: "/",
    },

    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Insights",
      path: "/insights",
    },
    {
      title: "Events",
      path: "/events",
    },

    {
      title: "WHTAPP",
      path: "/whtapp",
    },
  ];

  return (
    <div
      className={`duration-500  top-0 transition-all w-full  z-10  bg-transparent`}
    >
      <header
        className={`header flex justify-between px-5 py-2 font-serif max-w-[1200px] m-auto`}
      >
        <Link to="/" className="logo flex gap-2 items-center">
          <img src={logo} width={150} height={150} />
        </Link>
        <nav
          className={`nav absolute flex flex-col md:items-center items-start gap-5 md:gap-8 shadow-md w-[75%] bg-white md:bg-transparent h-screen right-0 px-4 py-4 md:py-0 md:static md:h-auto md:w-auto md:flex-row md:shadow-none duration-500 ${
            showNav ? "right-0 top-0" : "right-[-75%]"
          }`}
        >
          <button
            onClick={iconClick}
            className={`close-nav relative top-0 right-0 text-right text-3xl md:hidden `}
          >
            <IoMdClose />
          </button>

          <TransitionGroup component={null}>
            {isMounted &&
              links.map((link, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={2000}>
                  <DropDown link={link} i={i} />
                </CSSTransition>
              ))}
          </TransitionGroup>
        </nav>
        <button
          onClick={iconClick}
          className={`show-nav md:hidden text-3xl cursor-pointer`}
        >
          <HiOutlineMenuAlt2 className="navbar__icons" />
        </button>
      </header>
    </div>
  );
};
