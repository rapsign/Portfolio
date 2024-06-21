import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-scroll";

const scrollDownButton = ({ isVisible, hoverColor }) => {
    const buttonOpacity = isVisible ? 'opacity-100' : 'opacity-0'; // Adjust opacity based on isVisible prop

    return (
        <div className={`flex justify-center z-100 absolute bottom-5 ${buttonOpacity} transition-opacity duration-1000 ease-in-out`}>
            <Link to="about" smooth={true} duration={500}>
                <Button className={`rounded-full p-5 bg-cyan-400 ${hoverColor}`}>
                    <span className="flex items-center text-[#3a3a3c]">
                        <span className="mr-2">Scroll Down For More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </Button>
            </Link>
        </div>
    );
};

export default scrollDownButton;