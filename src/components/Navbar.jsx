import { useEffect, useState } from "react";

import logoo from "../../public/logoo.png";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Added state to control the dropdown

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };

  const navItems = (
    <>
      <li className="hover:text-orange-500 rounded-xl">
        <a href="/">Home</a>
      </li>
      <li className="hover:text-orange-500 rounded-xl">
        <a href="/About">About</a>
      </li>
      <li className="hover:text-orange-500 rounded-xl">
        <a href="/Services">Services</a>
      </li>
      <li className="hover:text-orange-500 rounded-xl">
        <a href="/Process">Process</a>
      </li>
      <li className="hover:text-orange-500 rounded-xl">
        <a href="/Industry">Industries</a>
      </li>
      <li className="hover:text-orange-500 rounded-xl">
        <a href="/Career">Career</a>
      </li>
      <li className="hover:text-orange-500 rounded-xl">
        <a href="/Contact">Contact</a>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-15 px-5 fixed top-0 left-0 right-0 z-50 p-1 ${
          sticky
            ? "sticky-navbar shadow-md bg-slate-500 md:bg-black text-black md:text-white duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
                onClick={toggleDropdown} // Toggle dropdown on mobile button click
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              {dropdownOpen && ( // Render dropdown menu based on state
                <ul
                  tabIndex={0}
                  className="menu menu-sm text-black dropdown-content bg-white rounded-box z-50 mt-2 w-52 p-2 shadow"
                >
                  {navItems}
                </ul>
              )}
            </div>
            <a className=" text-2xl font-bold cursor-pointer">
              <img
                src={logoo}
                className="w-40 md:w-40 md:ml-7 h-auto"
                alt="Logo"
              />
            </a>
          </div>
          <div className="navbar-end px-0">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-5 mx-24">{navItems}</ul>
            </div>
            <div>
              <a
                className="bg-orange-500 text-white px-2 py-1 md:px-3 md:py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=7620162336"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
