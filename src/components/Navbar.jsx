import React, { useEffect, useState, useRef } from "react";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import logoWhite from "../../public/img/logo-white.png";
import logo from "../../public/img/logo.png";

export function StickyNavbar({ isDarkMode, toggleDarkMode }) {
  const [openNav, setOpenNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeLink, setActiveLink] = useState("home");
  const navbarRef = useRef(null);
  const imageSource = isDarkMode ? logoWhite : logo;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + (navbarRef.current ? navbarRef.current.offsetHeight : 0) + 10;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveLink(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setOpenNav(false); // Close navbar on mobile when a link is clicked
  };

  const calculateOffset = () => {
    if (navbarRef.current) {
      return -navbarRef.current.offsetHeight;
    }
    return -100; // Fallback offset
  };

  const navList = (
    <ul className="ml-2 mt-2 mb-4 text-center flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      <li>
        <ScrollLink
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={1000}
          offset={calculateOffset()} // Offset for the fixed navbar height
          className={`p-1 font-bold text-2xl cursor-pointer hover:text-cyan-400 ${
            activeLink === "home" ? 'underline text-cyan-400' : ''
          }`}
          onClick={() => handleLinkClick("home")}
        >
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
          offset={calculateOffset()} // Offset for the fixed navbar height
          className={`p-1 font-bold text-2xl cursor-pointer hover:text-cyan-400  ${
            activeLink === "about" ? 'underline text-cyan-400' : ''
          }`}
          onClick={() => handleLinkClick("about")}
        >
          About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          duration={1000}
          offset={calculateOffset()} // Offset for the fixed navbar height
          className={`p-1 font-bold text-2xl cursor-pointer hover:text-cyan-400  ${
            activeLink === "skill" ? 'underline text-cyan-400' : ''
          }`}
          onClick={() => handleLinkClick("skill")}
        >
          Skills
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          duration={1000}
          offset={calculateOffset()} // Offset for the fixed navbar height
          className={`p-1 font-bold text-2xl cursor-pointer hover:text-cyan-400  ${
            activeLink === "education" ? 'underline text-cyan-400' : ''
          }`}
          onClick={() => handleLinkClick("education")}
        >
          Education
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          duration={1000}
          offset={calculateOffset()} // Offset for the fixed navbar height
          className={`p-1 font-bold text-2xl cursor-pointer hover:text-cyan-400  ${
            activeLink === "portfolio" ? 'underline text-cyan-400' : ''
          }`}
          onClick={() => handleLinkClick("portfolio")}
        >
          Portfolio
        </ScrollLink>
      </li>
    </ul>
  );

  return (
    <>
      <Navbar
        ref={navbarRef}
        className={`sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-none
            ${scrollPosition > 0 ? 'bg-opacity-50 backdrop-blur shadow-xl' : ''} 
            ${isDarkMode ? 'bg-[#0e1b31] text-white' : 'bg-gray-100 text-[#3c3c3c]'} border-none `}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
          <div className="flex items-center">
          <a href="/">
            <img
              src={imageSource}
              alt="Logo"
              className="h-20 w-20 ml-5"
            />
          </a>
        </div>
        
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <IconButton
                color="light"
                onClick={toggleDarkMode}
                ripple="light"
                className={`h-14 w-14 rounded-full flex items-center justify-center shadow-xl ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                }`}
              >
                {isDarkMode ? (
                  <SunIcon className="w-5 h-5 text-white" />
                ) : (
                  <MoonIcon className="w-5 h-5 text-[#3c3c3c]" />
                )}
              </IconButton>

              <IconButton
                variant="text"
                className="ml-auto h-16 w-16 text-inherit bg-cyan-400 text-white hover:bg-transparent focus:bg-cyan-400 active:bg-cyan-400 lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
                aria-label={openNav ? "Close Navigation" : "Open Navigation"}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke={isDarkMode ? "white" : "currentColor"}
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke={isDarkMode ? "white" : "currentColor"}
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
        </div>
        <Collapse open={openNav}>
          <div className="flex items-center justify-center">{navList}</div>
        </Collapse>
      </Navbar>
    </>
  );
}
