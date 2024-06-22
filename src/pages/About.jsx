import { motion, useInView } from "framer-motion";
import { 
    Card,
    Typography, 
} from "@material-tailwind/react";
import image from '../../public/img/me-ng.png'
import { useRef, useState } from "react";

const About = ({ isDarkMode }) => {
    const bgColor = isDarkMode ? "bg-[#0e1b31]" : "bg-gray-100";
    const textColor = isDarkMode ? "text-gray-100" : "text-[#3a3a3c]";
    const borderColor = isDarkMode ? "border-gray-300" : "border-[#3a3a3c]";
    const cardBgColor = isDarkMode ? "bg-[#081c3d]" : "bg-white";
    const cardTextColor = isDarkMode ? "text-white" : "text-[#3a3a3c]";
    const titleColor = isDarkMode ? "text-white" : "text-[#3a3a3c]";
    const animateRef = useRef(null);
    const animateInView = useInView(animateRef, { once: true });
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section id="about" className={` flex flex-col items-center justify-center p-6 ${bgColor} ${textColor}`}>
            <h1 className={`text-5xl mt-20 font-bold mb-5 ${titleColor}`}>About Me</h1>
            <hr className={`border-t-8 ${borderColor} w-24 mb-5`} />
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 w-full">
            <div className="col-span-1 flex justify-center items-center p-6">
                <motion.div
                    ref={animateRef}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: animateInView ? 1 : 0, x: animateInView ? 0 : -100 }}
                    transition={{ duration: 1.5 }}
                    className="p-6 flex justify-center items-center "
                    style={{ textAlign: 'center' }} // Center align content in motion div
                >
                    <Card className="shadow-lg p-0 bg-cyan-400 rounded-lg" 
                    style={{
                        maxWidth: '90%',
                        maxHeight: '90%',
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        <img
                            src={image}
                            alt="My Image"
                            className="w-full h-auto rounded-lg"
                            style={{ maxWidth: '100%', maxHeight: '100%',  transform: isHovered ? 'rotate(0deg)' : 'rotate(8deg)',  transition: 'transform 0.5s', }}
                        />
                    </Card>
                </motion.div>
            </div>
            <div className="col-span-1 flex justify-center items-center p-6">
                <motion.div 
                ref={animateRef}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: animateInView ? 1 : 0, x: animateInView ? 0 : 100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col justify-start items-start">
                    <Typography variant="h2" className={`${titleColor} text-center lg:text-left`}>
                        Hi, I'm <span className="text-cyan-400">Rinaldi A Prayuda</span>
                    </Typography>
                    <Typography variant="h3" className={`${titleColor} mb-4 text-center lg:text-left`}>
                   a web developer based in <span className="text-cyan-400">Indonesia</span>
                </Typography>
                    <Typography className={`${cardTextColor} text-xl mb-8 text-justify`}>
                        I'm a passionate web developer with a love for creating interactive and dynamic web applications. With a strong foundation in JavaScript, React, and CSS, I strive to build user-friendly and visually appealing websites.
                    </Typography>
                    <hr className={`border-t-2 px-6 pb-4 ${borderColor} w-full `} />
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 w-full">
                <div className="flex justify-center items-center">
                    <Card className={`shadow-lg p-6 ${cardBgColor} rounded-lg text-center border-b-4 border-cyan-400 w-96`}>
                      <Typography className="font-bold text-4xl text-cyan-400 mb-2"> 3+ </Typography>
                      <Typography className={`text-xl ${textColor}`}>
                      Years Of Experience
                      </Typography>
                    </Card>
                </div>
                <div className="flex justify-center items-center">
                    <Card className={`shadow-lg p-6 ${cardBgColor} rounded-lg text-center border-b-4 border-cyan-400 w-96`}>
                      <Typography className="font-bold text-4xl  text-cyan-400 mb-2"> 5+ </Typography>
                      <Typography className={`text-lg ${textColor}`}>
                      Framework & Tech Stack Used
                      </Typography>
                    </Card>
                </div>
                <div className="flex justify-center items-center">
                    <Card className={`shadow-lg p-6 ${cardBgColor} rounded-lg text-center border-b-4 border-cyan-400 w-96`}>
                      <Typography className="font-bold text-4xl text-cyan-400 mb-2"> 4+ </Typography>
                      <Typography className={`text-xl ${textColor}`}>
                      Successed Projects
                      </Typography>
                    </Card>
                </div>
            </div>
                </motion.div>
            </div>
            
            
        </div>
    </section>
    );
}

export default About;
