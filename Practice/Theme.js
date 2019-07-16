import React, { useState } from "react";
import ReactDOM from "react-dom";
import './styles.css'

/*
  INSTRUCTIONS:
  Convert the code below from a Class component
  using setState to a function component using 
  the useState Hook.
*/

function Theme() {
  const [theme, setTheme] = useState('light');
  const toDark = () => setTheme('dark');
  const toLight = () => setTheme('light');

  return (
    <div className={theme}>
      {theme === "light" 
        ? <button onClick={toDark}>
            <span role="img" aria-label="dark">
            🔦
            </span>
          </button>
        : <button onClick={toLight}>
          <span role="img" aria-label="light">
          💡</span>
          </button>}
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Theme />, rootElement);
