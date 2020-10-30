import React, { Component } from "react";
import { FaWeightHanging } from "react-icons/fa";
import "./Nav.css";
import Calc from "../Calculator/Calc";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          Gains & Losses
          <i className="logo-icon">
            {" "}
            <FaWeightHanging />{" "}
          </i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <Link to="/">
            <li className="nav-links">Home</li>
          </Link>
          <Link to="/calculator">
            <li className="nav-links">Calculator</li>
          </Link>
          <Link to="/login">
            <li className="nav-links">Sign Up</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
