import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Typography, Button } from "@material-tailwind/react";
import TypingAnimation from "./typingAnimation";
import { Link as ScrollLink } from "react-scroll";

const currentYear = new Date().getFullYear();
const navbarHeight = 70;

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skill", label: "Skills" },
  { id: "education", label: "Educations" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export function FooterWithSitemap() {
  const [activeLink, setActiveLink] = useState("home");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + navbarHeight;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveLink(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="relative w-full bg-cyan-400 mt-10 justify-center items-center">
      <div className="mx-auto w-full max-w-7xl pt-8">
        <div className="flex flex-col items-center mt-5">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Typography className="text-white mb-5 text-center font-bold text-3xl lg:text-4xl">
              RINALDI A PRAYUDA
            </Typography>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <TypingAnimation />
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center pt-6">
          <ul className=" mt-2 mb-6 text-center flex flex-col gap-5 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
            {sections.map((section, index) => (
              <motion.li
                key={section.id}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 1 }}
                transition={{ delay: 1 + index * 0.2, duration: 1 }}
              >
                <ScrollLink
                  activeClass="active"
                  to={section.id}
                  spy={true}
                  offset={-navbarHeight}
                  smooth={true}
                  duration={1000}
                  className={`p-1 font-semibold text-xl cursor-pointer text-white hover:text-gray-900 hover:underline`}
                  onClick={() => handleLinkClick(section.id)}
                >
                  {section.label}
                </ScrollLink>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center py-6">
          <div className="w-full flex justify-center">
            <motion.a
              ref={ref}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              href="https://www.instagram.com/m.by__rap"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <Button
                size="sm"
                color="white"
                className="hover:-translate-y-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#26c6da"
                  className="h-5 w-5 m-1"
                  viewBox="0 0 50 50"
                >
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                </svg>
              </Button>
            </motion.a>
            <motion.a
              ref={ref}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              href="https://github.com/rapsign"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <Button
                size="sm"
                color="white"
                className="hover:-translate-y-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#26c6da"
                  className="h-5 w-5 m-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 4.338 9.8 9.606 10.71.7.127.948-.304.948-.676 0-.33-.012-1.203-.018-2.366-3.918.848-4.743-1.885-4.743-1.885-.637-1.618-1.555-2.049-1.555-2.049-1.27-.868.097-.85.097-.85 1.405.099 2.144 1.444 2.144 1.444 1.251 2.144 3.278 1.525 4.075 1.166.126-.905.487-1.525.886-1.876-3.11-.351-6.375-1.555-6.375-6.934 0-1.532.54-2.778 1.438-3.758-.144-.352-.624-1.78.136-3.71 0 0 1.175-.376 3.844 1.434 1.113-.309 2.298-.464 3.479-.468 1.181.004 2.366.159 3.479.468 2.668-1.81 3.841-1.434 3.841-1.434.762 1.93.282 3.358.138 3.71.897.98 1.436 2.226 1.436 3.758 0 5.391-3.271 6.58-6.389 6.922.502.434.95 1.292.95 2.605 0 1.882-.017 3.393-.017 3.853 0 .376.24.813.956.673 5.268-.908 9.602-5.407 9.602-10.71 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </Button>
            </motion.a>
            <motion.a
              ref={ref}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              href="https://discord.gg/9K2vvna5cb"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <Button
                size="sm"
                color="white"
                className="hover:-translate-y-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  fill="#26c6da"
                  className="h-5 w-5 m-1"
                  viewBox="0 0 50 50"
                >
                  <path d="M 18.90625 7 C 18.90625 7 12.539063 7.4375 8.375 10.78125 C 8.355469 10.789063 8.332031 10.800781 8.3125 10.8125 C 7.589844 11.480469 7.046875 12.515625 6.375 14 C 5.703125 15.484375 4.992188 17.394531 4.34375 19.53125 C 3.050781 23.808594 2 29.058594 2 34 C 1.996094 34.175781 2.039063 34.347656 2.125 34.5 C 3.585938 37.066406 6.273438 38.617188 8.78125 39.59375 C 11.289063 40.570313 13.605469 40.960938 14.78125 41 C 15.113281 41.011719 15.429688 40.859375 15.625 40.59375 L 18.0625 37.21875 C 20.027344 37.683594 22.332031 38 25 38 C 27.667969 38 29.972656 37.683594 31.9375 37.21875 L 34.375 40.59375 C 34.570313 40.859375 34.886719 41.011719 35.21875 41 C 36.394531 40.960938 38.710938 40.570313 41.21875 39.59375 C 43.726563 38.617188 46.414063 37.066406 47.875 34.5 C 47.960938 34.347656 48.003906 34.175781 48 34 C 48 29.058594 46.949219 23.808594 45.65625 19.53125 C 45.007813 17.394531 44.296875 15.484375 43.625 14 C 42.953125 12.515625 42.410156 11.480469 41.6875 10.8125 C 41.667969 10.800781 41.644531 10.789063 41.625 10.78125 C 37.460938 7.4375 31.09375 7 31.09375 7 C 31.019531 6.992188 30.949219 6.992188 30.875 7 C 30.527344 7.046875 30.234375 7.273438 30.09375 7.59375 C 30.09375 7.59375 29.753906 8.339844 29.53125 9.40625 C 27.582031 9.09375 25.941406 9 25 9 C 24.058594 9 22.417969 9.09375 20.46875 9.40625 C 20.246094 8.339844 19.90625 7.59375 19.90625 7.59375 C 19.734375 7.203125 19.332031 6.964844 18.90625 7 Z M 18.28125 9.15625 C 18.355469 9.359375 18.40625 9.550781 18.46875 9.78125 C 16.214844 10.304688 13.746094 11.160156 11.4375 12.59375 C 11.074219 12.746094 10.835938 13.097656 10.824219 13.492188 C 10.816406 13.882813 11.039063 14.246094 11.390625 14.417969 C 11.746094 14.585938 12.167969 14.535156 12.46875 14.28125 C 17.101563 11.410156 22.996094 11 25 11 C 27.003906 11 32.898438 11.410156 37.53125 14.28125 C 37.832031 14.535156 38.253906 14.585938 38.609375 14.417969 C 38.960938 14.246094 39.183594 13.882813 39.175781 13.492188 C 39.164063 13.097656 38.925781 12.746094 38.5625 12.59375 C 36.253906 11.160156 33.785156 10.304688 31.53125 9.78125 C 31.59375 9.550781 31.644531 9.359375 31.71875 9.15625 C 32.859375 9.296875 37.292969 9.894531 40.3125 12.28125 C 40.507813 12.460938 41.1875 13.460938 41.8125 14.84375 C 42.4375 16.226563 43.09375 18.027344 43.71875 20.09375 C 44.9375 24.125 45.921875 29.097656 45.96875 33.65625 C 44.832031 35.496094 42.699219 36.863281 40.5 37.71875 C 38.5 38.496094 36.632813 38.84375 35.65625 38.9375 L 33.96875 36.65625 C 34.828125 36.378906 35.601563 36.078125 36.28125 35.78125 C 38.804688 34.671875 40.15625 33.5 40.15625 33.5 C 40.570313 33.128906 40.605469 32.492188 40.234375 32.078125 C 39.863281 31.664063 39.226563 31.628906 38.8125 32 C 38.8125 32 37.765625 32.957031 35.46875 33.96875 C 34.625 34.339844 33.601563 34.707031 32.4375 35.03125 C 32.167969 35 31.898438 35.078125 31.6875 35.25 C 29.824219 35.703125 27.609375 36 25 36 C 22.371094 36 20.152344 35.675781 18.28125 35.21875 C 18.070313 35.078125 17.8125 35.019531 17.5625 35.0625 C 16.394531 34.738281 15.378906 34.339844 14.53125 33.96875 C 12.234375 32.957031 11.1875 32 11.1875 32 C 10.960938 31.789063 10.648438 31.699219 10.34375 31.75 C 9.957031 31.808594 9.636719 32.085938 9.53125 32.464844 C 9.421875 32.839844 9.546875 33.246094 9.84375 33.5 C 9.84375 33.5 11.195313 34.671875 13.71875 35.78125 C 14.398438 36.078125 15.171875 36.378906 16.03125 36.65625 L 14.34375 38.9375 C 13.367188 38.84375 11.5 38.496094 9.5 37.71875 C 7.300781 36.863281 5.167969 35.496094 4.03125 33.65625 C 4.078125 29.097656 5.0625 24.125 6.28125 20.09375 C 6.90625 18.027344 7.5625 16.226563 8.1875 14.84375 C 8.8125 13.460938 9.492188 12.460938 9.6875 12.28125 C 12.707031 9.894531 17.140625 9.296875 18.28125 9.15625 Z M 18.5 21 C 15.949219 21 14 23.316406 14 26 C 14 28.683594 15.949219 31 18.5 31 C 21.050781 31 23 28.683594 23 26 C 23 23.316406 21.050781 21 18.5 21 Z M 31.5 21 C 28.949219 21 27 23.316406 27 26 C 27 28.683594 28.949219 31 31.5 31 C 34.050781 31 36 28.683594 36 26 C 36 23.316406 34.050781 21 31.5 21 Z M 18.5 23 C 19.816406 23 21 24.265625 21 26 C 21 27.734375 19.816406 29 18.5 29 C 17.183594 29 16 27.734375 16 26 C 16 24.265625 17.183594 23 18.5 23 Z M 31.5 23 C 32.816406 23 34 24.265625 34 26 C 34 27.734375 32.816406 29 31.5 29 C 30.183594 29 29 27.734375 29 26 C 29 24.265625 30.183594 23 31.5 23 Z"></path>
                </svg>
              </Button>
            </motion.a>
            <motion.a
              ref={ref}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              href="https://www.linkedin.com/in/rinaldi-a-prayuda/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <Button
                size="sm"
                color="white"
                className="hover:-translate-y-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#26c6da"
                  className="h-5 w-5 m-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.07 20.4H3.56V9h3.51v11.4zM5.31 7.68C4.02 7.68 3 6.66 3 5.36S4.02 3.04 5.31 3.04s2.31 1.02 2.31 2.32-1.02 2.32-2.31 2.32zm15.08 12.72h-3.51v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67h-3.51V9h3.37v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 4.22 5.38v6.3z" />
                </svg>
              </Button>
            </motion.a>
            <motion.a
              ref={ref}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              href="https://www.tiktok.com/@rapsign"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <Button
                size="sm"
                color="white"
                className="hover:-translate-y-1.5"
              >
                <svg
                  viewBox="0 0 24 24"
                  role="img"
                  fill="#26c6da"
                  className="h-5 w-5 m-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>TikTok icon</title>
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </Button>
            </motion.a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="flex justify-center text-center text-white mt-2"
        >
          <Typography className="mb-2">
            &copy; {currentYear} created by RapSign. All rights reserved
          </Typography>
        </motion.div>
      </div>
    </footer>
  );
}

export default FooterWithSitemap;
