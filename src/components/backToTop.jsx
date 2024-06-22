import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fungsi untuk menentukan apakah tombol harus ditampilkan berdasarkan posisi scroll
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Menambahkan event listener untuk mengatur keadaan isVisible saat terjadi scroll
    window.addEventListener('scroll', toggleVisibility);

    // Membersihkan event listener setelah komponen dibongkar
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: '#26c6da',
            color: '#fff',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            zIndex: '1000'
          }}
        >
          <ArrowUpIcon className="h-6 w-6" />
        </motion.button>
      )}
    </>
  );
};

export default BackToTopButton;
