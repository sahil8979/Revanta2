import Lottie from 'react-lottie';
import { useState, useEffect } from 'react';
import carAnimation from '../../lottie/Animation - 1728494437546.json'; // Ensure the path is correct to your Lottie file
import './Loading.css';

const LoadingComponent = () => {
  const [loadingPercent, setLoadingPercent] = useState(0);

  // Simulate loading progress from 1% to 100% over 10 seconds (matching the car animation)
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercent((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100; // Ensure it stays at 100% when done
        }
      });
    }, 100); // Progress increases every 100ms (10 seconds total for 100%)

    return () => clearInterval(interval);
  }, []);

  // Lottie options for the car animation
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: carAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="loading-container">
      {/* Car and percentage */}
      <div className="car-container">
        {/* Percentage directly next to the car with no gap */}
        <span className="loading-percent">{loadingPercent === 100 ? "100%" : `${loadingPercent}%`}</span>
        {/* Car Lottie animation */}
        <Lottie options={defaultOptions} height={100} width={200} className="car" />
      </div>

      {/* Centered Loading text with animated dots */}
      <div className="loading-text-container">
        <span className="loading-text">LOADING.....</span>
       
      </div>
    </div>
  );
};

export default LoadingComponent;
