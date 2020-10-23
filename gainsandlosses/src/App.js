import React from 'react';
import './App.css';
import './Components/Calc.js';
import './Components/Product.js';
import NavBar from "./Components/Navbar/Nav"

//the anchor in text-box will have an onClick to open the calculator
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Gains and Losses</title>
      </header>
      <NavBar />
      <body>
      </body>
    </div>
  );
}

export default App;
