import { motion, useInView } from "framer-motion";
import { Card, Typography } from "@material-tailwind/react";
import image from "../../public/img/me-ng.png";
import { useRef, useState } from "react";
import { getThemeStyles } from "../utils/themeStyles";

const About = ({ isDarkMode }) => {
  const themeStyles = getThemeStyles(isDarkMode);
  const animateRef = useRef(null);
  const animateInView = useInView(animateRef, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="about"
      className={`flex flex-col items-center justify-center ${themeStyles.bgColor} ${themeStyles.textColor}`}
    >
      <h1 className={`text-3xl mt-20 font-bold mb-5 ${themeStyles.titleColor}`}>
        About Me
      </h1>
      <hr className={`border-t-4 ${themeStyles.borderColor} w-24 mb-5`} />
      <div className="grid grid-cols-1 xl:grid-cols-2 w-full">
        {/* Left Section */}
        <div className="col-span-1 flex justify-center items-center p-6">
          <motion.div
            ref={animateRef}
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: animateInView ? 1 : 0,
              x: animateInView ? 0 : -100,
            }}
            transition={{ duration: 1.5 }}
            className="p-6 flex justify-center items-center"
          >
            <Card
              className={`shadow-lg p-0 bg-cyan-400 rounded-lg`}
              style={{ maxWidth: "90%", maxHeight: "90%" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={image}
                alt="My Image"
                className="w-full h-auto rounded-lg"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: isHovered ? "rotate(0deg)" : "rotate(8deg)",
                  transition: "transform 0.5s",
                }}
              />
            </Card>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="col-span-1 flex justify-center items-center p-6">
          <motion.div
            ref={animateRef}
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: animateInView ? 1 : 0,
              x: animateInView ? 0 : 100,
            }}
            transition={{ duration: 1.5 }}
            className="flex flex-col justify-start items-start"
          >
            <Typography
              className={`${themeStyles.titleColor} font-bold text-lg lg:text-4xl xl:text-3xl text-left`}
            >
              Hi, I'm <span className="text-cyan-400">Rinaldi A Prayuda</span>
            </Typography>
            <Typography
              className={`${themeStyles.titleColor} mb-2 font-bold text-lg lg:text-4xl xl:text-3xl lg:text-left`}
            >
              a Web Developer based in{" "}
              <span className="text-cyan-400">Indonesia</span>
            </Typography>
            <Typography
              className={`${themeStyles.cardTextColor} text-sm mb-8 text-left xl:text-lg lg:text-lg`}
            >
              A passionate technology enthusiast with a strong focus on web
              development, eager to contribute as a programmer. Proficient in
              front-end technologies including HTML, CSS, JavaScript, React, and
              Bootstrap, as well as back-end development with CodeIgniter 4 and
              Laravel. I am proactive, detail-oriented, and committed to
              continuous learning, with a deep interest in staying up-to-date
              with industry advancements. Excited to bring my technical skills
              to dynamic projects and contribute to innovative solutions in a
              programming role.
            </Typography>
            <hr
              className={`border-t-2 px-6 pb-4 ${themeStyles.borderColor} w-full`}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
              {[
                { value: "5+", label: "Years Of Experience" },
                { value: "7+", label: "Tech Stack Used" },
                { value: "4+", label: "Successful Projects" },
              ].map((item, index) => (
                <div key={index} className="flex justify-center items-center">
                  <Card
                    className={`shadow-lg p-6 ${themeStyles.cardBgColor} rounded-lg text-center border-b-4 border-cyan-400 w-96 `}
                  >
                    <Typography className="font-bold text-3xl xl:text-4xl text-cyan-400 mb-2">
                      {item.value}
                    </Typography>
                    <Typography
                      className={`text-md xl:text-xl ${themeStyles.textColor}`}
                    >
                      {item.label}
                    </Typography>
                  </Card>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
