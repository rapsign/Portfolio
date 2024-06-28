import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const textsToType = ["WEB DEVELOPER", "IT ENGINEER"];
const TypingAnimation = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textsToType[textIndex];
      if (isDeleting) {
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % textsToType.length);
        }
      } else {
        if (displayedText.length < currentText.length) {
          setDisplayedText((prev) => prev + currentText[displayedText.length]);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 150;
    const timeoutId = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <motion.h1
      className="text-2xl lg:text-3xl mb-4 font-bold text-gray-800 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {displayedText}
      <motion.span
        className="blinking-cursor"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        |
      </motion.span>
    </motion.h1>
  );
};

export default TypingAnimation;
