// src/components/common/AOSInitializer.js
import { useEffect } from 'react';
import AOS from 'aos';
// Remove the import for AOS CSS, as we've added it to index.html

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return null;
};

export default AOSInitializer;