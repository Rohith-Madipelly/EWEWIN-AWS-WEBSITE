import React, { useState, useEffect } from 'react';

const TypingH2 = ({ text }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setTypedText(prevTypedText => prevTypedText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 300); // Adjust typing speed here (in milliseconds)

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  return (
    <div>
    <h1 className='font-1 font-style text-white'>{typedText}</h1>
    </div> );
};

export default TypingH2;
