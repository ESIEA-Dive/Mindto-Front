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
      If you feel unsafe, or need immediate support for a mental health crisis orincident, please contact your local crisis hotline or emergency services.
    </div>
  );
};

export default GreenBanner;