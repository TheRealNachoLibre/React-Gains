import React from "react";
import "./App.css";
import Calc from "./Components/Calculator/Calc";
import "./Components/Product.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavBar from "./Components/Navbar/Nav";
import Carousel from "./Components/Carosel/Carosel";
import Image from "../src/img1.jpg";
import Authentication from "./Auth";
import AuthLogin from "./AuthLogin";

//the anchor in text-box will have an onClick to open the calculator
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Gains and Losses</title>
      </header>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/calculator" component={Calc} />
            <Route path="/sign-up" component={Authentication} />
            <Route path="/login" component={AuthLogin} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
const Home = () => (
  <div className="body">
    <div className="content-box">
      <img className="content-img" src={Image} alt="woman workingout"></img>
      <div className="inspiration-quotes">
        <h3>
          The weight which weighs you down can be used to lift you up again.
        </h3>
        <ul>
          <div className="quote">
            <li>
              {" "}
              "Strength does not come from winning. Your struggles develop your
              strengths. When you go through hardships and decide not to
              surrender, that is strength."
            </li>
            <p>~ Arnold Schwarzenegger</p>
          </div>
          <div className="quote">
            <li>
              "I know I couldn't have done body building without the right
              supplements"
            </li>
            <p>~ Ronnie Coleman</p>
          </div>
          <div className="quote">
            <li>
              {" "}
              “Motivation is what gets you started. Habit is what keeps you
              going.”
            </li>
            <p>~ Jim Ryun</p>
          </div>
        </ul>
      </div>
    </div>
    <Carousel />
  </div>
);

export default App;
