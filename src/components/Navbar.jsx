import React, { useEffect, useState } from "react";
import { Navbar, Collapse, Typography, IconButton, Switch } from "@material-tailwind/react";
import { Link } from "react-scroll";
import logoWhite from '../../public/img/logo-white.png';
import logo from '../../public/img/logo.png';

export function StickyNavbar({ isDarkMode, toggleDarkMode }) {
    const [openNav, setOpenNav] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
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

    const navList = (
        <ul className="ml-2 mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
            <Typography
                as="li"
                variant="small"
                color={isDarkMode ? "white" : "text-cyan-400"}
                className="p-1 font-bold text-2xl"
            >
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`flex items-center cursor-pointer ${isDarkMode ? 'hover:text-cyan-400' : 'hover:text-[#3a3a3c]'}`}
                >
                    Home
                </Link>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color={isDarkMode ? "white" : "text-cyan-400"}
                className="p-1 font-bold text-2xl"
            >
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`flex items-center cursor-pointer ${isDarkMode ? 'hover:text-cyan-400' : 'hover:text-[#3a3a3c]'}`}
                >
                    About
                </Link>
            </Typography>
        </ul>
    );

    return (
        <>
            <Navbar
                className={`sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 
                    ${scrollPosition > 0 ? 'bg-opacity-50 backdrop-blur' : ''} 
                    ${isDarkMode ? 'bg-[#020617] text-white' : 'bg-gray-100 text-gray-700'} border-none`}
            >
                <div className="flex items-center justify-between text-cyan-400">
                    <div className="flex items-center">
                        <img src={imageSource} alt="Logo" className="h-24 w-24 ml-5" /> {/* Logo lebih besar */}
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <Switch
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                            color="blue"
                            className="h-full w-full"
                            containerProps={{
                                className: "w-11 h-6",
                            }}
                            circleProps={{
                                className: "before:hidden left-0.5 border-none",
                            }}
                        />
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
                <Collapse open={openNav}>
                    {navList}
                </Collapse>
            </Navbar>
        </>
    );
}
