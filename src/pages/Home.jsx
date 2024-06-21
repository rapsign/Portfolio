import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import myImageLight from '../../public/img/rap-light.png';
import myImageDark from '../../public/img/rap-dark.png';
import TypingAnimation from "../components/typingAnimation";

const Home = ({ isDarkMode, toggleDarkMode }) => {
    const [isVisible, setIsVisible] = useState(true);
    const imageSource = isDarkMode ? myImageDark : myImageLight;
    const textColor = isDarkMode ? 'text-white' : 'text-[#3a3a3c]';
    const highlightColor = isDarkMode ? 'text-cyan-400' : 'text-cyan-400';
    const hoverColor = isDarkMode ? 'hover:text-white' : 'hover:text-[#3a3a3c]';
    const socialButtonColor = isDarkMode ? 'text-white border-white' : 'border-[#3a3a3c]';

    

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
        window.open('your-cv-link.pdf', '_blank');
    };

    return (
        <>
        <section id="home" className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-[#0e1b31]' : 'bg-gray-100'} relative`}>
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
            <Button className={`rounded-full border-2 ${socialButtonColor} p-3`} variant="outlined">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 50 50">
                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                </svg>
            </Button>
        </a>
        <a href="https://www.linkedin.com/in/rinaldi-a-prayuda-523a0a2b3/" target="_blank" rel="noopener noreferrer">
            <Button className={`rounded-full border-2 ${socialButtonColor} p-3`} variant="outlined">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.07 20.4H3.56V9h3.51v11.4zM5.31 7.68C4.02 7.68 3 6.66 3 5.36S4.02 3.04 5.31 3.04s2.31 1.02 2.31 2.32-1.02 2.32-2.31 2.32zm15.08 12.72h-3.51v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67h-3.51V9h3.37v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 4.22 5.38v6.3z"/>
                </svg>
            </Button>
        </a>
        <a href="https://github.com/rapsign" target="_blank" rel="noopener noreferrer">
            <Button className={`rounded-full border-2 ${socialButtonColor} p-3`} variant="outlined">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 4.338 9.8 9.606 10.71.7.127.948-.304.948-.676 0-.33-.012-1.203-.018-2.366-3.918.848-4.743-1.885-4.743-1.885-.637-1.618-1.555-2.049-1.555-2.049-1.27-.868.097-.85.097-.85 1.405.099 2.144 1.444 2.144 1.444 1.251 2.144 3.278 1.525 4.075 1.166.126-.905.49-1.525.89-1.876-3.123-.356-6.416-1.561-6.416-6.939 0-1.533.547-2.783 1.444-3.762-.144-.356-.626-1.787.138-3.725 0 0 1.175-.377 3.85 1.444 1.116-.31 2.316-.466 3.508-.472 1.192.006 2.393.162 3.511.472 2.672-1.821 3.845-1.444 3.845-1.444.766 1.938.284 3.369.14 3.725.9.979 1.442 2.229 1.442 3.762 0 5.391-3.297 6.578-6.426 6.929.5.428.94 1.27.94 2.557 0 1.846-.017 3.336-.017 3.786 0 .376.243.808.954.673C19.67 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
            </Button>
        </a>
    </div>
    <Button onClick={handleDownloadCV} className={`flex items-center gap-3 bg-cyan-400 ${hoverColor}`}>
        Download CV
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 14v7h16v-7m-4-4l-4 4m0 0l-4-4m4 4V3"
            />
        </svg>
    </Button>
</div>

                </motion.div>
                <div className="col-span-1 justify-end items-center">
                    <motion.div
                        className="text-center mt-auto -mt-"
                        initial={{ opacity: 0, x: 1000 }} // Initial state, hidden and moved up by 50px
                        animate={{ opacity: 1, x: 0 }} // Animate to opacity 1 and original position
                        transition={{ duration: 1 }} // Transition duration with a slight delay
                    >
                        <img
                            src={imageSource}
                            alt="My Image"
                            className="max-w-full h-auto"
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
                            <Button className={`rounded-full p-5 bg-cyan-400 ${hoverColor}`}>
                                <span className="flex items-center text-[#3a3a3c]">
                                    <span className="mr-2 ">Scroll Down For More</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
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
