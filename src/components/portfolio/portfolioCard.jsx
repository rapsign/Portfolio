import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Avatar,
  Chip,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { getThemeStyles } from "../../utils/themeStyles";

const PortfolioCard = ({ portfolio, isDarkMode, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const themeStyles = getThemeStyles(isDarkMode);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const delay = index * 0.2;
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay }}
      >
        <Card
          className={`mt-6 w-full relative overflow-hidden group hover:shadow-lg ${themeStyles.cardBgColor}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CardHeader floated={false} className="h-56 relative">
            <img
              src={portfolio.img}
              alt="web-screenshot"
              className="h-full w-full object-cover transform transition-transform duration-300 group-hover:blur-sm"
            />
            {isHovered && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: "0" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
                <Button
                  className={`opacity-100 absolute rounded-full p-3 ${themeStyles.cardBgColor}`}
                  onClick={() => {
                    window.open(portfolio.github, "_blank");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 30 30"
                  >
                    <path
                      fill={isDarkMode ? "white" : "black"}
                      d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15,C27,8.373,21.627,3,15,3z"
                    ></path>
                  </svg>
                </Button>
              </motion.div>
            )}
          </CardHeader>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CardBody className={`${themeStyles.cardBgColor}`}>
                  <Typography
                    variant="h5"
                    className={`mb-2 ${themeStyles.textColor}`}
                  >
                    {portfolio.title}
                  </Typography>
                  <div
                    className="grid grid-cols-1 lg:grid-cols-3  gap-2 mb-2 relative"
                    style={{
                      display: "grid",
                      gridAutoFlow: "column",
                      gridAutoRows: "min-content",
                      gap: "5px",
                      position: "relative",
                      overflowX: "auto",
                      overflowY: "hidden",
                    }}
                  >
                    {portfolio.techStack.slice(0, 3).map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Chip
                          icon={
                            <Avatar
                              size="xs"
                              variant="circular"
                              className="h-full w-full -translate-x-0.5"
                              alt={tech.name}
                              src={tech.svg}
                            />
                          }
                          value={
                            <Typography
                              variant="small"
                              color="white"
                              className={`capitalize leading-none ${themeStyles.textColor}`}
                            >
                              {tech.name}
                            </Typography>
                          }
                          label={tech.name}
                          className={isDarkMode ? "bg-gray-800" : "bg-gray-300"}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <Typography
                    className={`my-3 overflow-hidden text-sm text-ellipsis ${themeStyles.textColor}`}
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      lineHeight: "1.5em",
                      maxHeight: "4.5em",
                    }}
                  >
                    {portfolio.desc}
                  </Typography>
                </CardBody>
              </motion.div>
            )}
          </AnimatePresence>
          <CardFooter className="pt-0 flex">
            <Button
              className="flex items-center mr-2 bg-cyan-400 text-gray-900"
              onClick={openDialog}
            >
              Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
            {portfolio.link.trim() !== "" && (
              <Button
                variant="outlined"
                className="flex items-center mr-2 text-cyan-400"
                color="cyan"
                onClick={() => {
                  window.open(portfolio.link, "_blank");
                }}
              >
                Preview
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>
      {/* Dialog */}
      <Dialog
        size="md"
        open={isDialogOpen}
        onClose={closeDialog}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className={`p-2 ${themeStyles.cardBgColor}`}
      >
        <DialogHeader className="justify-between items-center">
          <Typography
            className={`text-xl font-bold sm:text-xl lg:text-2xl ${themeStyles.textColor}`}
          >
            {portfolio.title}
          </Typography>
          <IconButton
            className={`${themeStyles.textColor}`}
            size="sm"
            variant="text"
            onClick={closeDialog}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody>
          <img
            src={portfolio.img}
            alt="web-screenshot"
            className="h-full w-full object-cover mb-4"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-6">
            {portfolio.techStack.map((tech, index) => (
              <Chip
                key={index}
                icon={
                  <Avatar
                    size="xs"
                    variant="circular"
                    className="h-full w-full -translate-x-0.5"
                    alt={tech.name}
                    src={tech.svg}
                  />
                }
                value={
                  <Typography
                    variant="small"
                    className={`capitalize leading-none ${themeStyles.textColor}`}
                  >
                    {tech.name}
                  </Typography>
                }
                label={tech.name}
                className={isDarkMode ? "bg-gray-800" : "bg-gray-300"}
              />
            ))}
          </div>
          <Typography
            className={`my-2 font-bold text-md ${themeStyles.textColor}`}
          >
            Description
          </Typography>

          <Typography className={`text-sm ${themeStyles.textColor}`}>
            {portfolio.desc}
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2 justify-start">
          <Button
            variant="outlined"
            color="cyan"
            onClick={closeDialog}
            className="flex items-center gap-3 h-full sm:h-auto sm:w-auto"
            onClick={() => {
              window.open(portfolio.github, "_blank");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="w-7 h-7 sm:w-5 sm:h-5"
              viewBox="0 0 30 30"
            >
              <path
                fill="cyan"
                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15,C27,8.373,21.627,3,15,3z"
              ></path>
            </svg>
            <span className="hidden sm:inline">Project Repository</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default PortfolioCard;
