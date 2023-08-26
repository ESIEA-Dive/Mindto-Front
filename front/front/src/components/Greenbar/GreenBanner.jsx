import React, { useState, useEffect } from 'react';
import './GreenBanner.scss'; // Create this CSS file for styling

const GreenBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`green-banner ${isVisible ? '' : 'hidden'}`}>
      Disclaimer: This article is for educational purposes only, and does not replace the clinical judgment of a healthcare provider. Please contact your healthcare provider with any questions relating to your health.
    </div>
  );
};

export default GreenBanner;