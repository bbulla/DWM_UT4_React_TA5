import React, { useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <button onClick={toggleText}>
        {isVisible ? 'Ocultar texto' : 'Mostrar texto'}
      </button>
      {isVisible && <p>Hola!!</p>}
    </div>
  );
}

export default App;
