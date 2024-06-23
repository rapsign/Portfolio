import { motion, useInView } from "framer-motion";
import { 
    Card,
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography, 
} from "@material-tailwind/react";
import { CalendarDaysIcon, MapIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

const Education = ({ isDarkMode }) => {
    const bgColor = isDarkMode ? "bg-[#0e1b31]" : "bg-gray-100";
    const textColor = isDarkMode ? "text-gray-100" : "text-[#3a3a3c]";
    const borderColor = isDarkMode ? "border-gray-300" : "border-[#3a3a3c]";
    const cardBgColor = isDarkMode ? "bg-[#081c3d]" : "bg-white";
    const cardTextColor = isDarkMode ? "text-white" : "text-[#3a3a3c]";
    const titleColor = isDarkMode ? "text-white" : "text-[#3a3a3c]";
    const animateRef = useRef(null);
    const animateInView = useInView(animateRef, { once: true });

    return (
        <section id="education" className={`${bgColor} min-h-screen flex flex-col items-center `}>
            <h1 className={`text-5xl mt-20 font-bold my-5 ${titleColor}`}>Educations</h1>
            <hr className={`border-t-8 ${borderColor} w-24 mb-5`} />
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 w-full">
                <div className="col-span-1 flex justify-center items-center p-6">
                    <motion.div
                        ref={animateRef}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: animateInView ? 1 : 0, x: animateInView ? 0 : -100 }}
                        transition={{ duration: 1.5 }}
                        className="p-6 lg:text-left sm:text-center text-center"
                    >
                        <h1 className="text-4xl font-bold text-cyan-400 mb-3 ">Educations & Experiences</h1>
                        <h2 className={`text-lg ${cardTextColor}`}>
                            There are some formal education & work experience.
                        </h2>
                    </motion.div>
                </div>
                <div className="col-span-2 flex justify-center items-center p-6 lg:justify-end">
                    <Card className={`w-full max-w-3xl p-6 shadow-lg flex flex-col items-center ${cardBgColor}`}>
                        <motion.div
                            ref={animateRef}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: animateInView ? 1 : 0, x: animateInView ? 0 : 100 }}
                            transition={{ duration: 1.5 }}
                            className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4"
                        >
                            <div className="col-span-2 flex flex-col justify-start items-start p-3">
                                <div className="mb-5">
                                    <Typography variant="h4" className="text-cyan-400">
                                        Educations
                                    </Typography>
                                </div>
                                <Timeline>
                                    <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader className="h-3">
                                            <TimelineIcon className="bg-cyan-400" />
                                            <Typography variant="h5" className={`${textColor} text-sm sm:text-xl md:text-2xl lg:text-2xl` }>
                                                Sriwijaya State Polytechnic
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography variant="small" className={`${textColor} text-sm sm:text-lg lg:text-lg mb-2`}>
                                                Computer Engineering 
                                            </Typography>
                                            <Typography variant="small" className={`font-normal flex items-center mb-2 ${textColor}`}>
                                                <MapIcon className="w-4 h-4 mr-2" /> Palembang, Indonesia
                                            </Typography>
                                            <Typography variant="small"  className={`font-normal flex items-center ${textColor}`}>
                                                <CalendarDaysIcon className="w-4 h-4 mr-2" /> 2019 - 2022
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem> 
                                    <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader className="h-3">
                                            <TimelineIcon className="bg-cyan-400" />
                                            <Typography variant="h5" className={`${textColor} text-sm sm:text-xl md:text-2xl lg:text-2xl`}>
                                                State Vocational School 2
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb">
                                            <Typography className={`${textColor} text-sm sm:text-lg lg:text-lg mb-2`}>
                                                Computer and Network Engineering
                                            </Typography>
                                            <Typography  className={`font-normal flex items-center mb-2 ${textColor}`}>
                                                <MapIcon className="w-4 h-4 mr-2 " /> Palembang, Indonesia
                                            </Typography>
                                            <Typography className={`font-normal flex items-center ${textColor}`}>
                                                <CalendarDaysIcon className="w-4 h-4 mr-2" /> 2016 - 2019
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem> 
                                </Timeline>            
                            </div>
                            <div className="col-span-1 flex flex-col justify-start items-start p-2">
                                <div className="mb-5">
                                    <Typography variant="h4" className="text-cyan-400">
                                        Experience
                                    </Typography>
                                </div>
                                <Timeline>
                                    <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader className="h-3">
                                            <TimelineIcon className="bg-cyan-400" />
                                            <Typography variant="h5" className={`${textColor} text-sm sm:text-xl md:text-2xl lg:text-2xl`}>
                                                 IIPC Abu Dhabi 
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                        <Typography  className={`${textColor} text-sm sm:text-lg lg:text-lg mb-2`}>
                                        Internship
                                        </Typography>
                                        <Typography   className={`font-normal flex items-center mb-2 ${textColor}`}>
                                        <MapIcon className="w-4 h-4 mr-2 " /> Abu Dhabi, UAE
                                    </Typography>
                                            <Typography className={`font-normal flex items-center ${textColor}`}>
                                                <CalendarDaysIcon className="w-4 h-4 mr-2" /> March 2024
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem> 
                                </Timeline>       
                            </div>
                        </motion.div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Education;
