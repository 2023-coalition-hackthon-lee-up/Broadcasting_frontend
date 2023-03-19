import React, { useState, useEffect } from 'react';
import './slideshow.css';

const images = [
  '1.jpeg',
  '2.jpeg',
  '3.jpeg'
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

	// 60000 1분
	// 10000 10초

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slideshow-container">
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
    </div>
  );
};

export default Slideshow;
