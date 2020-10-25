import React from 'react'
import './App.css'
import './Components/Calc.js'
import './Components/Product.js'
import NavBar from "./Components/Navbar/Nav"
import Carousel from './Components/Carosel/Carosel'
import Image from "../src/img1.jpg"

//the anchor in text-box will have an onClick to open the calculator
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Gains and Losses</title>
      </header>
      <NavBar />
      <body>
        <div className="content-box">
          <img className="content-img" src={ Image } alt="woman workingout"></img>
          <div className="inspiration-quotes">
            <h3>The weight which weighs you down can be used to lift you up again.</h3>
            <ul>
              <div className="quote">
                <li> "Strength does not come from winning. Your struggles develop your strengths. 
                  When you go through hardships and decide not to surrender, that is strength."</li>
                <p>~ Arnold Schwarzenegger</p>
              </div>
              <div className="quote">
                <li>"I know I couldn't have done body building without the right supplements"</li>
                <p>~ Ronnie Coleman</p>
              </div>
              <div className="quote">
                <li> “Motivation is what gets you started. Habit is what keeps you going.”</li>
                <p>~ Jim Ryun</p>
              </div>
            </ul>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
