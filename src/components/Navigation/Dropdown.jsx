/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { FaChevronDown } from "react-icons/fa6";
// import { useEffect, useRef, useState } from "react";
// import { RiSparklingLine } from "react-icons/ri";

// const DropDown = ({ link, i }) => {
//   const dropdownRef = useRef(null);
//   const [isDropdownVisible, setDropdownVisible] = useState(false);

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownVisible(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleClick = () => {
//     setDropdownVisible(true);
//   };

//   return (
//     <div className="relative ">
//       <div
//         ref={dropdownRef}
//         onClick={handleClick}
//         style={{ transitionDelay: `${i + 1}00ms` }}
//         href={link.path}
//         className="relative text-gray-800 text-lg hover:text-red-500 cursor-pointer select-none nav-link flex gap-1 items-center mb-2 group/link"
//       >
//         <span className=" hover:font-medium mr-2">{link.title}</span>
//         <FaChevronDown />
//       </div>
//       {isDropdownVisible && (
//         <div className="absolute top-10 -left-6 p-4 rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white w-[200px] flex flex-col gap-2">
//           {link.dropdownn.map((data) => (
//             <div
//               key={data}
//               className="w-full p-2 flex gap-2 items-center text-sm cursor-pointer select-none text-gray-90 capitalize hover:bg-red-600 hover:text-white rounded-xl"
//             >
//               {" "}
//               <RiSparklingLine /> {data.title}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropDown;

import { FaChevronDown } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
// import { RiSparklingLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const DropDown = ({ link, i }) => {
  const dropdownRef = useRef(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setDropdownVisible(true);
  };

  return (
    <div className="relative ">
      <Link
        ref={dropdownRef}
        onClick={handleClick}
        style={{ transitionDelay: `${i + 1}00ms` }}
        to={link.path}
        className="relative md:text-white text-[#181818] text-lg cursor-pointer select-none nav-link flex gap-1 items-center mb-2 group/link"
      >
        <span className="hover:font-medium mr-2">{link.title}</span>
        {link.dropdownn && <FaChevronDown />}
      </Link>
      {isDropdownVisible && link.dropdownn && (
        <div className=" z-[100000] absolute top-10 -left-6 p-4 rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white w-[200px] flex flex-col gap-2">
          {link.dropdownn.map((data) => (
            <Link
              to={data.path}
              key={data.path}
              className="w-full p-2 flex gap-2 items-center text-sm cursor-pointer select-none text-gray-90 capitalize rounded-xl"
            >
              {data.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
