// src/Timer.js
import React, { useState, useEffect } from 'react';
import './Timer.css'; 

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleChange = (e) => {
    setTime(e.target.value);
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  return (
    <div className="timer-container">
    <input 
      type="number" 
      value={time} 
      onChange={handleChange} 
      className="time-input" 
    />
    <button onClick={handleStart} className="timer-button">Start</button>
    <button onClick={handleStop} className="timer-button">Stop</button>
    <div className="time-display">Time Remaining: {time}</div>
  </div>
  );
};

export default Timer;
