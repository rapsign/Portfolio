import { useState } from "react";
import { motion} from "framer-motion";
import { Avatar, Chip, Card, CardHeader, CardBody, CardFooter, Typography,  Button } from "@material-tailwind/react";
const Portfolio = ({ isDarkMode }) => {
    const bgColor = isDarkMode ? "bg-[#0e1b31]" : "bg-gray-100";
    const textColor = isDarkMode ? "text-white" : "text-[#3a3a3c]";
    const borderColor = isDarkMode ? "border-gray-300" : "border-[#3a3a3c]";
    const cardBgColor = isDarkMode ? "bg-[#081c3d]" : "bg-white";
    const cardTextColor = isDarkMode ? "text-white" : "text-[#3a3a3c]";
    const titleColor = isDarkMode ? "text-white" : "text-[#3a3a3c]";
    const [isHovered, setIsHovered] = useState(false);
 
    const avatars = [
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
      ];
  return (
    <section id="portfolio" className={`${bgColor}`}>
    <div className="flex flex-col items-center justify-center">
        <h1 className={`text-5xl font-bold mt-9 ${titleColor}`}>Portfolio</h1>
        <hr className={`border-t-8 ${borderColor} w-24 mt-4 mb-4`} />
    </div>
    <div className={`lg:text-left sm:text-center mt-3 p-6 ${textColor} lg:w-1/2`}>
    <h1 className="text-3xl font-bold mb-3">Project I've Created</h1>
    <p className="text-lg">I've created a few project while i was learing about frontend website development. and all of project i'll explain below</p>
    </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-0 w-full -mb-5">
            <motion.div
            className="col-span-1 flex justify-center items-center p-6 lg:justify-end"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
            <Card className={`mt-6 w-96 relative overflow-hidden group hover:shadow-lg ${cardBgColor}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <CardHeader floated={false} className="h-56 relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
              className="h-full w-full object-cover transform transition-transform duration-300 group-hover:blur-sm"
            />
            {isHovered && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: '-50%' }}
                animate={{ opacity: 1, y: '0' }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-white opacity-50"></div>
                <Button
                  className={`opacity-100 absolute rounded-full p-3 ${cardBgColor}`}
                  onClick={() => {
                    window.open('https://github.com/your_username', '_blank'); // Ganti dengan URL GitHub Anda
                  }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
                        <path fill={isDarkMode ? "white" : "#3a3a3c"} d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                </Button>
              </motion.div>
            )}
          </CardHeader>
          <CardBody className={`${cardTextColor}`}>
          <Typography variant="h4" className="mb-2">
            UI/UX Review Check
          </Typography>
          <div className="grid grid-cols-2 gap-2 mb-2">
            {avatars.map((avatar, index) => (
              <Chip
                key={index}
                icon={
                  <Avatar
                    size="xs"
                    variant="circular"
                    className="h-full w-full -translate-x-0.5"
                    alt="Tania Andrew"
                    src={avatar}
                  />
                }
                value={
                    <Typography
                      variant="small"
                      color="white"
                      className={`font-medium capitalize leading-none ${textColor}`}
                    >
                      Tania Andrew
                    </Typography>
                  }
                label="Tania Andrew"
                className={isDarkMode ? "bg-blue-gray-300" : "bg-gray-300"}
              />
            ))}
          </div>
          <Typography className="mb-2 text-justify overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', lineHeight: '1.5em', maxHeight: '4.5em' }}>
          The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
        </Typography>
        </CardBody>
            <CardFooter className="pt-0 flex">
            <Button className="flex items-center mr-2 bg-cyan-400 text-[#3c3c3c]">
              Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
            <Button variant="outlined" className="flex items-center mr-2 text-cyan-400" style={{ borderColor: '#00bcd4' }}>
            previews
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </Button>
          </CardFooter>
            </Card>
            </motion.div>
           
            
      </div>
    </section>
  );
};

export default Portfolio;
