import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, Button } from "@material-tailwind/react";
import { CodeBracketIcon, CommandLineIcon } from "@heroicons/react/24/solid";

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
    <section id="skill" className={`${bgColor} min-h-screen flex flex-col items-center justify-center`}>
        <h1 className={`text-5xl font-bold mt-9 ${titleColor}`}>My Skills</h1>
        <hr className={`border-t-8 ${borderColor} w-24 mt-4 mb-4`} />
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 w-full -mb-5">
            <motion.div
            className="col-span-1 flex justify-center items-center p-6 lg:justify-end"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
                <Card className={`w-full max-w-2xl p-6 shadow-lg flex flex-col items-center ${cardBgColor}`}>
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
                    <div className="grid grid-cols-4 gap-6 justify-center mb-4">
                    {showTechStack &&
                    [
                        { name: "HTML", level: "Advanced", img: "https://symbols.getvecta.com/stencil_25/37_html5.d4d8050235.svg", desc:"HTML is the standard markup language for Web Pages "},
                        { name: "CSS", level: "Advanced", img: "https://symbols.getvecta.com/stencil_25/14_css3.d930bfb832.svg", desc:"CSS is language we use to style an HTML document" },
                        { name: "JavaScript", level: "Intermediate", img: "https://symbols.getvecta.com/stencil_25/41_javascript.0ca26ec4ab.svg", desc:"High-level programming language for creating interactive effects within web browsers."},
                        { name: "Bootstrap", level: "Advanced", img: "https://symbols.getvecta.com/stencil_25/5_bootstrap.bbf5d3d59c.svg", desc:"Front-end framework for developing responsive and mobile-first websites with pre-built components and grid layouts." },
                        { name: "MySQL", level: "Advanced", img: "https://symbols.getvecta.com/stencil_261/27_mysql.4e2ff8ff6c.svg", desc:"Open-source relational database management system known for its reliability and performance." },
                        { name: "PHP", level: "Advanced", img: "https://www.php.net//images/logos/new-php-logo.svg", desc:"Server-side scripting language for generating dynamic web pages and interacting with databases." },
                        { name: "Codeigniter4", level: "Advanced", img: "https://symbols.getvecta.com/stencil_25/10_codeigniter.8dcbcc9b8a.svg", desc:"Lightweight PHP framework for rapid web application development following the MVC architecture." },
                        { name: "React", level: "Basic", img: "https://symbols.getvecta.com/stencil_25/72_react.76a8d36b4b.svg", desc:"JavaScript library for building user interfaces, particularly single-page applications, with reusable UI components." },
                        { name: "Laravel", level: "Intermediate", img: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg", desc:"PHP framework known for its elegant syntax and developer-friendly features for web development."},
                        { name: "Tailwind", level: "Basic", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", desc:"Utility-first CSS framework providing low-level utility classes for building custom designs without writing custom CSS." },
                    ].map((skill) => (
                        <motion.div
                            className="flex flex-col items-center relative"
                            key={skill.name}
                        >
                        <motion.div
                        whileHover={{ y: -10 }}
                        >
                         <Button
                            className={`flex justify-center cursor-default items-center w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-full shadow-md p-0 ${isDarkMode ? 'bg-[#0a244d] shadow-lg' : 'bg-white shadow'}`}
                            onMouseEnter={() => handleMouseEnter(skill.name)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={skill.img} alt={skill.name} className="w-1/2 h-1/2" />
                        </Button>
                        </motion.div>
                            <span className={`mt-3 text-lg text-center font-bold ${cardTextColor}`}>{skill.name}</span>
                            <span className={`text-sm ${textColor}`}>{skill.level}</span>
                            <AnimatePresence>
                            {hoveredSkill === skill.name && (
                                <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                className={`z-50 absolute ${isDarkMode ? 'bg-[#0e1b31] text-white' : 'bg-white text-[#3c3c3c]'} shadow-md p-1 rounded-lg transform -translate-x-1/2 -bottom-full`}
                                style={{ width: "300px", bottom: "calc(100% + 10px)" }} // Adjust bottom position // Adjust width as needed
                                >
                                <span className="block text-base">{skill.desc}</span>
                                </motion.div>
                            )}
                            </AnimatePresence>
   
                        </motion.div>
                        ))}
                    {!showTechStack &&
                        [
                            { name: "Visual Studio Code", level: "Basic", img: "https://symbols.getvecta.com/stencil_27/121_visual-studio-team-services.117b5070bc.svg", desc:"Lightweight, open-source code editor with Git integration" },
                            { name: "Git", level: "Basic", img: "https://symbols.getvecta.com/stencil_28/88_visual-studio-team-services-git-repository.c595f4166d.svg" , desc:"Distributed version control system for tracking code changes."},
                            { name: "GitHub", level: "Basic", img: "https://symbols.getvecta.com/stencil_65/6_github.a79e66470c.svg", desc:"Web-based platform for hosting Git repositories." },
                            { name: "Xampp", level: "Basic", img: "https://www.svgrepo.com/show/354575/xampp.svg", desc:"Cross-platform web server solution for local development." },
                          ].map(tool => (
                            <motion.div
                            className="flex flex-col items-center relative"
                            key={tool.name}
                        >
                        <motion.div
                        whileHover={{ y: -10 }}
                        >
                         <Button
                            className={`flex justify-center cursor-default items-center w-16 h-16 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-full shadow-md p-0 ${isDarkMode ? 'bg-[#0a244d] shadow-lg' : 'bg-white shadow'}`}
                            onMouseEnter={() => handleMouseEnter(tool.name)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={tool.img} alt={tool.name} className="w-1/2 h-1/2" />
                        </Button>
                        </motion.div>
                            <span className={`mt-3 text-lg text-center font-bold ${cardTextColor}`}>{tool.name}</span>
                            <span className={`text-sm ${textColor}`}>{tool.level}</span>
                            <AnimatePresence>
                            {hoveredSkill === tool.name && (
                                <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                className={`z-50 absolute ${isDarkMode ? 'bg-[#0e1b31] text-white' : 'bg-white text-[#3c3c3c]'} shadow-md p-1 rounded-lg transform -translate-x-1/2 -bottom-full`}
                                style={{ width: "300px", bottom: "calc(100% + 10px)" }} // Adjust bottom position // Adjust width as needed
                                >
                                <span className="block text-base">{tool.desc}</span>
                                </motion.div>
                            )}
                            </AnimatePresence>
   
                        </motion.div>
                        ))}
                    </div>
                </Card>
            </motion.div>
            <div className="col-span-1 flex justify-center items-center p-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 lg:text-right sm:text-center"
            >
              <h1 className="text-4xl font-bold text-cyan-400 mb-3 ">Tech Stack & Tools</h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className={`text-lg ${cardTextColor}`}
              >
                There are some tech stacks and tools that I use in building and running a web application.
              </motion.h2>
            </motion.div>
          </div>
      </div>
    </section>
  );
};

export default Skill;
