import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import TypingAnimation from "../components/typingAnimation";
import { ArrowDownTrayIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const Home = ({ isDarkMode }) => {
    const myImageLight = "/img/rap-light.png";
    const instagramIcon = "../img/svg/instagram.svg";
    const linkedinIcon = "../img/svg/linkedin.svg";
    const githubIcon = "../img/svg/github.svg";
    const myImageDark = "/img/rap-dark.png";
    const pdf = "../pdf/CV_Rinaldi_A_Prayuda.pdf";
    const [isVisible, setIsVisible] = useState(true);
    const imageSource = isDarkMode ? myImageDark : myImageLight;
    const textColor = isDarkMode ? 'text-white' : 'text-secondary';
    const highlightColor = 'text-cyan-400';
    const hoverColor = isDarkMode ? 'hover:text-white' : 'hover:text-secondary';
    const socialButtonColor = isDarkMode ? 'text-white border-white' : 'button-secondary';

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsVisible(scrollTop < 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDownloadCV = () => {
        window.open('https://drive.google.com/file/d/1yn1D9U2sG15L8ee1I38CUdWEZjE09-m4/view?usp=sharing', '_blank', 'noopener,noreferrer');
    };
    return (
        <>
        <section id="home" className="min-h-screen flex flex-col relative">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 w-full lg:mt-20">
                <motion.div
                    className="col-span-1 flex items-center justify-center lg:items-center lg:justify-start p-6"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 , delay: 1}}
                >
                    <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
                        <h4 className={`text-xl font-medium ${textColor}`}>HI, WELCOME</h4>
                        <h1 className={`text-6xl lg:text-8xl sm:text-7xl font-bold ${textColor}`}>I'M <span className={`text-6xl lg:text-8xl sm:text-7xl font-bold ${highlightColor}`}>ALDI</span></h1>
                        <TypingAnimation/>
                        <div className="flex items-center mb-4 gap-3">
                            <a href="https://www.instagram.com/m.by__rap" target="_blank" rel="noopener noreferrer">
                                <Button className={`rounded-full border-2 ${socialButtonColor} p-2`} variant="outlined">
                                    <img src={instagramIcon} className={`w-8 h-8 ${socialButtonColor}`} alt="Instagram Icon" />
                                </Button>
                            </a>
                            <a href="https://www.linkedin.com/in/rinaldi-a-prayuda-523a0a2b3/" target="_blank" rel="noopener noreferrer">
                                <Button className={`rounded-full border-2 ${socialButtonColor} p-2`} variant="outlined">
                                    <img src={linkedinIcon} className="w-8 h-8" alt="LinkedIn Icon" />
                                </Button>
                            </a>
                            <a href="https://github.com/rapsign" target="_blank" rel="noopener noreferrer">
                                <Button className={`rounded-full border-2 ${socialButtonColor} p-2`} variant="outlined">
                                    <img src={githubIcon} className="w-8 h-8" alt="GitHub Icon" />
                                </Button>
                            </a>
                        </div>
                        <Button onClick={handleDownloadCV} className={`flex items-center gap-3 bg-cyan-400 ${hoverColor}`}>
                            Download CV <ArrowDownTrayIcon className="w-5 h-5"/>
                        </Button>
                    </div>
                </motion.div>
                <div className="flex flex-col items-center justify-center lg:items-end lg:justify-end">
                    <motion.div
                        className="text-center mt-auto"
                        initial={{ opacity: 0, x: 200 }} // Initial state, hidden and moved up by 50px
                        animate={{ opacity: 1, x: 0 }} // Animate to opacity 1 and original position
                        transition={{ duration: 1 }} // Transition duration with a slight delay
                    >
                        <img
                            src={imageSource}
                            alt="My Image"
                            className="max-w-full h-auto p-0"
                            style={{ maxHeight: '100vh', maxWidth: '100%' }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
        <div className="flex justify-center items-center">
            {isVisible ? (
                <div className="flex justify-center z-100 absolute bottom-5 animate-bounce transition-opacity duration-1000 ease-in-out">
                    <Link to="about" smooth={true} duration={500}>
                        <Button className={`rounded-full p-6 bg-cyan-400 ${hoverColor}`}>
                            <span className="flex items-center text-[#3a3a3c]">
                                <span className="mr-2 ">Scroll Down For More</span>
                                <ChevronDownIcon  className="w-5 h-5"/>
                            </span>
                        </Button>
                    </Link>
                </div>
            ) : (
                <div className="flex justify-center z-100 absolute bottom-5 opacity-0 transition-opacity duration-1000 ease-in-out">
                    <Link to="about" smooth={true} duration={900}>
                        <Button className={`rounded-full p-5 bg-cyan-400 ${hoverColor}`}>
                            <span className="flex items-center text-[#3a3a3c]">
                                <span className="mr-2 ">Scroll Down For More</span>
                                <ChevronDownIcon  className="w-5 h-5"/>
                            </span>
                        </Button>
                    </Link>
                </div>
            )}
        </div>
        </>
    );
}

export default Home;
