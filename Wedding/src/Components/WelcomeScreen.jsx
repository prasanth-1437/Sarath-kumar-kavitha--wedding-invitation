import React, { useEffect } from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="welcome-screen">
      <h1>Sarath Kumar<br></br>&nbsp;Weds 
      <br></br>Kavitha</h1>
    </div>
  );
};

export default WelcomeScreen;
