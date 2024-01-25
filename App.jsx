
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useState, useEffect } from 'react';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setCurrentTime(newTime);
  };

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);

  
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <>
      <h1>{currentTime}</h1>
    </>
  );
};

export default App;
