import React, { useState } from 'react';
import WelcomeScreen from './Components/WelcomeScreen';
import HomePage from './Components/HomePage';


function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };
 
  return (
    <div className="App">
      {showWelcome ? (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      ) : (
        <HomePage/>
      )}
    </div>
  );
}

export default App;
