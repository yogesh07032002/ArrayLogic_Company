import { useEffect, useState } from "react";

import logoo from "../../public/logoo.png";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const navItems = (
    <>
      <li className="hover:text-orange-500 rounded-lg">
        <a href="/">Home</a>
      </li>
      <li className="hover:text-orange-500 rounded-lg">
        <a href="/About">About</a>
      </li>
      <li className="hover:text-orange-500 rounded-lg">
        <a href="/Services">Services</a>
      </li>
      <li className="hover:text-orange-500 rounded-lg">
        <a href="/Process">Process</a>
      </li>
      <li className="hover:text-orange-500 rounded-lg">
        <a href="/Industry">Industries</a>
      </li>
      <li className="hover:text-orange-500 rounded-lg">
        <a href="/Career">Career</a>
      </li>
      <li className="hover:text-orange-500 rounded-lg">
        <a href="/Contact">Contact</a>
      </li>
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        sticky
          ? "bg-black shadow-lg text-white"
          : "bg-transparent text-black"
      }`}
    >
      <div className="max-w-screen-2xl container mx-auto px-5 md:px-15 py-2">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a className="text-2xl font-bold">
            <img
              src={logoo}
              className="w-30 md:w-40 h-10 md:ml-5 ml-10"
              alt="Logo"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-8 font-medium">
            {navItems}
          </ul>

          {/* Contact Button */}
          <a
            href="https://api.whatsapp.com/send?phone=7620162336"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-orange-500 text-white px-4 py-2 rounded-lg md:mr-5 hover:bg-orange-600 transition-all duration-300"
          >
            Contact
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleDropdown}
            className="lg:hidden p-2 text-2xl rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-16 6h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {dropdownOpen && (
          <ul
            className="lg:hidden mt-3 space-y-2 bg-white rounded-lg shadow-lg p-5 text-lg font-medium text-black"
          >
            {navItems}
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=7620162336"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-orange-500 text-white text-center py-2 rounded-lg hover:bg-orange-600 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Navbar;
