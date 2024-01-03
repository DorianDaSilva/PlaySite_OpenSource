import React, { useState, useEffect } from 'react';
import './css/scroll.css';
import { upArrow } from "./assets"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}>
      <img src={upArrow} className='"w-6 h-6"' alt="Scroll to top" onClick={handleScrollToTop} />
    </div>
  );

};

export default ScrollToTopButton;
