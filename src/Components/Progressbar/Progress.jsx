import { useState, useEffect } from 'react';
import './Progress.css';

const ProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  // Function to update the progress bar on scroll
  const handleScroll = () => {
    const scrollTop = window.scrollY; // Current vertical scroll position
    const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    const scrolled = (scrollTop / docHeight) * 100; // Calculate percentage scrolled
    setScrollPercent(scrolled);
  };

  useEffect(() => {
    // Add event listener to track scroll position
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup event listener when the component is unmounted
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="progress-bar" style={{ width: `${scrollPercent}%` }} />
  );
};

export default ProgressBar;
