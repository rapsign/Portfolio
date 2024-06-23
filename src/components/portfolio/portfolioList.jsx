import { useRef } from "react";
import PortfolioCard from './portfolioCard';
import portfolios from '../../assets/json/portfolio.json';
import { motion, useInView } from 'framer-motion';

const PortfolioList = ({ isDarkMode }) => {
  const borderColor = isDarkMode ? 'border-gray-300' : 'border-secondary';
  // useInView hook setup
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="portfolio" className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl mt-20 font-bold my-5">Portfolio</h1>
        <hr className={`border-t-8 ${borderColor} w-24 mb-5`} />
      </div>
      <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 200 }} // Start with opacity 0 and move up from y = 50
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }} // Animate opacity and move up when in view
      transition={{ duration: 0.5 }} // Animation duration
      className="w-full p-6 px-12 text-center lg:text-left sm:text-center">
        <h1 className="text-4xl font-bold mb-3 text-cyan-400">Projects I've Created</h1>
        <p className="text-lg">
          I've created a few projects while learning about website development, and
          I'll explain each of them below.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full sm:w-full lg:w-full px-6">
        {portfolios.map((portfolio, index) => (
            <PortfolioCard
            key={portfolio.id}
              index={index}
              portfolio={portfolio}
              isDarkMode={isDarkMode}
            />
        ))}
      </div>
    </section>
  );
};

export default PortfolioList;
