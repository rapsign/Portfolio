import { motion } from "framer-motion";
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
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

const Education = ({ isDarkMode }) => {
    const bgColor = isDarkMode ? "bg-[#0e1b31]" : "bg-gray-100";
    const textColor = isDarkMode ? "text-gray-100" : "text-[#3a3a3c]";
    const borderColor = isDarkMode ? "border-gray-300" : "border-[#3a3a3c]";
    const cardBgColor = isDarkMode ? "bg-[#081c3d]" : "bg-white";
    const cardTextColor = isDarkMode ? "text-white" : "text-[#3a3a3c]";
    const titleColor = isDarkMode ? "text-white" : "text-[#3a3a3c]";
  
  return (
    <section id="education" className={`${bgColor} min-h-screen flex flex-col items-center justify-center`}>
        <h1 className={`text-5xl font-bold my-5 ${titleColor}`}>Educations</h1>
        <hr className={`border-t-8 ${borderColor} w-24 mb-5`} />
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            
            <div className="col-span-1 flex justify-center items-center p-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 lg:text-left sm:text-center"
            >
              <h1 className="text-4xl font-bold text-cyan-400 mb-3 ">Educations & Experiences</h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className={`text-lg ${cardTextColor}`}
              >
                There are some formal education & work experience.
              </motion.h2>
            </motion.div>
          </div>
          <motion.div
            className="col-span-2 flex justify-center items-center p-6 lg:justify-end"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
            <Card className={`w-full max-w-3xl p-6 shadow-lg flex flex-col items-center ${cardBgColor}`}>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="col-span-2 flex flex-col text-center sm:justify-start sm:items-start p-3">
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
                        <Typography variant="h5" className={`${textColor}`}>
                            Sriwijaya State Polytechnic Palembang
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <Typography variant="medium" className={` font-semibold ${textColor}`}>
                            Computer Engineering 
                        </Typography>
                        <Typography variant="small" color="gray-700" className={`font-normal flex items-center ${textColor}`}>
                            <CalendarDaysIcon className="w-4 h-4 mr-2" /> 2019 - 2022
                        </Typography>
                    </TimelineBody>
                </TimelineItem> 
                <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader className="h-3">
                        <TimelineIcon className="bg-cyan-400" />
                        <Typography variant="h5" className={`${textColor}`}>
                        State Vocational School 2 Palembang
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb">
                        <Typography variant="medium" className={` font-semibold ${textColor}`}>
                        Computer and Network Engineering
                        </Typography>
                        <Typography variant="small" color="gray-700" className={`font-normal flex items-center ${textColor}`}>
                            <CalendarDaysIcon className="w-4 h-4 mr-2" /> 2016 - 2019
                        </Typography>
                    </TimelineBody>
                </TimelineItem> 
                </Timeline>            
                </div>
                <div className="col-span-1 flex flex-col items-center text-center sm:justify-start sm:items-start p-2">
                <div className="mb-5 ">
                <Typography variant="h4" className="text-cyan-400">
                    Experience
                </Typography>
            </div>
            <Timeline>
            <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
                <TimelineIcon className="bg-cyan-400" />
                <Typography variant="h5" className={`${textColor}`}>
                    Internship
                </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
                <Typography variant="medium" className={` font-semibold ${textColor}`}>
                    IIPC Abu Dhabi 
                </Typography>
                <Typography variant="small" color="gray-700" className={`font-normal flex items-center ${textColor}`}>
                    <CalendarDaysIcon className="w-4 h-4 mr-2" /> Maret 2024
                </Typography>
            </TimelineBody>
        </TimelineItem> 
         
        </Timeline>       
                </div>
            </div>
        </Card>
        
            </motion.div>
      </div>
    </section>
  );
};

export default Education;
