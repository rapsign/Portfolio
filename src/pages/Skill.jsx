import React, { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Card, Button } from "@material-tailwind/react";
import { CodeBracketIcon, CommandLineIcon } from "@heroicons/react/24/solid";
import techStackData from '../assets/techStack.json';
import toolsData from '../assets/tools.json';

const Skill = ({ isDarkMode }) => {
    const bgColor = isDarkMode ? "bg-[#0e1b31]" : "bg-gray-100";
    const textColor = isDarkMode ? "text-gray-100" : "text-[#3a3a3c]";
    const borderColor = isDarkMode ? "border-gray-300" : "border-[#3a3a3c]";
    const cardBgColor = isDarkMode ? "bg-[#081c3d]" : "bg-white";
    const cardTextColor = isDarkMode ? "text-white" : "text-[#3a3a3c]";
    const titleColor = isDarkMode ? "text-white" : "text-[#3a3a3c]";
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [showTechStack, setShowTechStack] = useState(true);

    const toggleTechStack = () => {
        if (!showTechStack) {
          setShowTechStack(true);
        }
    };

    const toggleTools = () => {
        if (showTechStack) {
          setShowTechStack(false);
        }
    };

    const handleMouseEnter = (skillName) => {
        setHoveredSkill(skillName);
    };

    const handleMouseLeave = () => {
        setHoveredSkill(null);
    };

    return (
        <section id="skill" className={`${bgColor} min-h-screen flex flex-col items-center lg:top-20`}>
            <h1 className={`text-5xl font-bold mt-20 ${titleColor}`}>My Skills</h1>
            <hr className={`border-t-8 ${borderColor} w-24 my-5`} />
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-5">
                <motion.div
                    className="col-span-1 order-last flex justify-center items-center p-6 lg:justify-end lg:order-first"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className={`w-full p-6 shadow-lg flex flex-col items-center ${cardBgColor}`}>
                        <div className="flex justify-center my-5">
                            <span onClick={toggleTechStack} className={`mr-6 font-bold cursor-pointer ${isDarkMode ? (showTechStack ? 'text-cyan-400' : 'text-white') : (showTechStack ? 'text-cyan-400' : 'text-[#3c3c3c]')}`}>
                                <CodeBracketIcon className="inline-block mr-1" width={20}/> 
                                Tech Stack
                            </span>
                            <span onClick={toggleTools} className={`font-bold cursor-pointer ${isDarkMode ? (showTechStack ? 'text-white' : 'text-cyan-400') : (showTechStack ? 'text-[#3c3c3c]' : 'text-cyan-400')}`}>
                                <CommandLineIcon className="inline-block mr-1" width={20}/>
                                Tools
                            </span>
                        </div>  
                        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 sm:gap-8 md:gap-10 justify-center my-4">
                        {showTechStack 
                        ? techStackData.map((skill, index) => (
                            <InViewSkill
                                key={skill.name}
                                skill={skill}
                                index={index}
                                isDarkMode={isDarkMode}
                                hoveredSkill={hoveredSkill}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                            />
                        ))
                        : toolsData.map((tool, index) => (
                            <InViewSkill
                                key={tool.name}
                                skill={tool}
                                index={index}
                                isDarkMode={isDarkMode}
                                hoveredSkill={hoveredSkill}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                            />
                        ))}
                    </div>

                    </Card>
                </motion.div>
                <div className="col-span-1 flex justify-center items-center p-6">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 , delay: 1.5 }}
                        className="px-6 lg:text-right sm:text-center text-center"
                    >
                        <h1 className="text-4xl font-bold text-cyan-400 mb-3">Tech Stack & Tools</h1>
                        <h2 className={`text-lg ${cardTextColor}`}>
                            There are some tech stacks and tools that I use in building and running a web application.
                        </h2>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const InViewSkill = ({ skill, index, isDarkMode, hoveredSkill, handleMouseEnter, handleMouseLeave }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const delay = index * 0.2;

    return (
        <motion.div
            ref={ref}
            className="flex flex-col items-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
        >
            <motion.div whileHover={{ y: -10 }}>
                <Button
                    className={`flex justify-center cursor-default items-center w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-full shadow-md p-0 ${isDarkMode ? 'bg-[#0a244d] shadow-lg' : 'bg-white shadow'}`}
                    onMouseEnter={() => handleMouseEnter(skill.name)}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={skill.img} alt={skill.name} className="w-1/2 h-1/2" />
                </Button>
            </motion.div>
            <span className={`mt-3 text-lg text-center font-bold ${isDarkMode ? 'text-white' : 'text-[#3a3a3c]'}`}>{skill.name}</span>
            <span className={`text-sm ${isDarkMode ? 'text-gray-100' : 'text-[#3a3a3c]'}`}>{skill.level}</span>
            <AnimatePresence>
                {hoveredSkill === skill.name && (
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className={`z-50 absolute ${isDarkMode ? 'bg-[#0e1b31] text-white' : 'bg-white text-[#3a3a3c]'} shadow-md p-1 rounded-lg transform -translate-x-1/2 -bottom-full`}
                        style={{ width: "300px", bottom: "calc(100% + 10px)" }}
                    >
                        <span className="block text-base">{skill.desc}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Skill;
