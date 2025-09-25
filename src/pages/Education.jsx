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
import { getThemeStyles } from "../utils/themeStyles";

const Education = ({ isDarkMode }) => {
  const themeStyles = getThemeStyles(isDarkMode);
  const animateRef = useRef(null);
  const animateInView = useInView(animateRef, { once: true });

  return (
    <section
      id="education"
      className={`${themeStyles.bgColor} min-h-auto xl:min-h-screen flex flex-col items-center `}
    >
      <h1 className={`text-3xl mt-20 font-bold my-5 ${themeStyles.titleColor}`}>
        Educations
      </h1>
      <hr className={`border-t-4 ${themeStyles.borderColor} w-24 mb-5`} />
      <div className="grid grid-cols-1 xl:grid-cols-10 w-full">
        <div className="col-span-2 flex justify-center items-center p-6">
          <motion.div
            ref={animateRef}
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: animateInView ? 1 : 0,
              x: animateInView ? 0 : -100,
            }}
            transition={{ duration: 1.5 }}
            className="p-6 lg:text-left sm:text-center text-center"
          >
            <h1 className="text-2xl font-semibold text-cyan-400 mb-3 ">
              Educations & Experiences
            </h1>
            <h2 className={`text-md ${themeStyles.cardTextColor}`}>
              There are some formal education & work experience.
            </h2>
          </motion.div>
        </div>
        <div className="col-span-8 flex justify-center items-center p-6 lg:justify-end">
          <Card
            className={`w-auto lg:w-full max-w-4xl p-6 shadow-lg flex flex-col items-center ${themeStyles.cardBgColor} rounded-lg`}
          >
            <motion.div
              ref={animateRef}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: animateInView ? 1 : 0,
                x: animateInView ? 0 : 100,
              }}
              transition={{ duration: 1.5 }}
              className="grid grid-cols-1 lg:grid-cols-6 gap-2"
            >
              {/* Education Section */}
              <div className="col-span-3 flex flex-col items-start p-2">
                <Typography variant="h5" className="text-cyan-400 mb-4">
                  Educations
                </Typography>
                <Timeline>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader className="h-3">
                      <TimelineIcon className="bg-cyan-400" />
                      <Typography
                        className={`${themeStyles.textColor} font-semibold text-xs md:text-lg `}
                      >
                        Associate Degree in Computer Engineering
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-4">
                      <Typography
                        className={`${themeStyles.textColor} text-xs md:text-sm mb-2`}
                      >
                        Sriwijaya State Polytechnic
                      </Typography>
                      <Typography
                        className={`flex items-center text-xs md:text-sm mb-2 ${themeStyles.textColor}`}
                      >
                        <MapIcon className="w-4 h-4 mr-2" /> Palembang,
                        Indonesia
                      </Typography>
                      <Typography
                        className={`flex items-center text-xs md:text-sm ${themeStyles.textColor}`}
                      >
                        <CalendarDaysIcon className="w-4 h-4 mr-2" /> 2022
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader className="h-3">
                      <TimelineIcon className="bg-cyan-400" />
                      <Typography
                        className={`${themeStyles.textColor} font-semibold text-xs md:text-lg`}
                      >
                        Computer and Network Engineering
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-4">
                      <Typography
                        className={`${themeStyles.textColor} text-xs md:text-sm mb-2`}
                      >
                        State Vocational School 2
                      </Typography>
                      <Typography
                        className={`flex items-center mb-2 text-xs md:text-sm ${themeStyles.textColor}`}
                      >
                        <MapIcon className="w-4 h-4 mr-2" /> Palembang,
                        Indonesia
                      </Typography>
                      <Typography
                        className={`flex items-center text-xs md:text-sm ${themeStyles.textColor}`}
                      >
                        <CalendarDaysIcon className="w-4 h-4 mr-2 " /> 2019
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                </Timeline>
              </div>

              {/* Experience Section */}
              <div className="col-span-3 flex flex-col items-start p-2">
                <Typography variant="h5" className="text-cyan-400 mb-4">
                  Experience
                </Typography>
                <Timeline>
                      <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader className="h-3">
                      <TimelineIcon className="bg-cyan-400" />
                      <Typography
                        className={`${themeStyles.textColor} font-semibold text-xs md:text-lg`}
                      >
                        Freelance Web Developer
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-4">
                      <Typography
                        className={`${themeStyles.textColor} text-xs md:text-sm mb-2`}
                      >
                        Self-employed
                      </Typography>
                      <Typography
                        className={`text-xs md:text-sm flex items-center mb-2 ${themeStyles.textColor}`}
                      >
                        <MapIcon className="w-4 h-4 mr-2 text-xs md:text-sm" />{" "}
                        Remote / Palembang
                      </Typography>
                      <Typography
                        className={`flex text-xs md:text-sm items-center ${themeStyles.textColor}`}
                      >
                        <CalendarDaysIcon className="w-4 h-4 mr-2 text-xs md:text-sm" />{" "}
                        Present
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
