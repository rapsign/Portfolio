import React, { useEffect, useState } from "react";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Link } from "react-scroll";
import logoWhite from '../../public/img/logo-white.png';
import logo from '../../public/img/logo.png';
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export function StickyNavbar({ isDarkMode, toggleDarkMode }) {
    const [openNav, setOpenNav] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeLink, setActiveLink] = useState("home");
    const imageSource = isDarkMode ? logoWhite : logo;

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const navList = (
        <ul className="ml-2 mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
            <Typography
                as="li"
                variant="small"
                color={isDarkMode ? "white" : ""}
                className={`p-1 font-bold text-2xl cursor-pointer ${activeLink === "home" ? 'underline text-cyan-400' : ''}`}
            >
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="flex items-center hover:text-cyan-400"
                    onClick={() => handleLinkClick("home")}
                >
                    Home
                </Link>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color={isDarkMode ? "white" : ""}
                className={`p-1 font-bold text-2xl cursor-pointer ${activeLink === "about" ? 'underline text-cyan-400' : ''}`}
            >
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="flex items-center hover:text-cyan-400"
                    onClick={() => handleLinkClick("about")}
                >
                    About
                </Link>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color={isDarkMode ? "white" : ""}
                className={`p-1 font-bold text-2xl cursor-pointer ${activeLink === "skill" ? 'underline text-cyan-400' : ''}`}
            >
                <Link
                    to="skill"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="flex items-center hover:text-cyan-400"
                    onClick={() => handleLinkClick("skill")}
                >
                    Skills
                </Link>
            </Typography>
        </ul>
    );

    return (
        <>
        
            <Navbar
                className={`sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 
                    ${scrollPosition > 0 ? 'bg-opacity-50 backdrop-blur' : ''} 
                    ${isDarkMode ? 'bg-[#0e1b31] text-white' : 'bg-gray-100 text-[#3c3c3c]'} border-none`}
            >
            <div className="container mx-auto ">
                <div className="flex items-center justify-between text-[#3c3c3c]">
                    <div className="flex items-center">
                        <img src={imageSource} alt="Logo" className="h-20 w-20 ml-5" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <IconButton
                            color="light"
                            onClick={toggleDarkMode}
                            ripple="light"
                            className={`h-14 w-14 rounded-full flex items-center justify-center shadow-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
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
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke={isDarkMode ? "white" : "currentColor"}
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                </div>
                <Collapse open={openNav}>
                <div className="flex items-center justify-center">
                  {navList}
                </div>
              </Collapse>
            </Navbar>
            
        </>
    );
}
