import React, { Component } from 'react'
import { MenuItems } from "./MenuItems";
import { FaWeightHanging } from 'react-icons/fa';
import './Nav.css'
import { Button } from "./../Buttons";

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }


  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Gains & Losses<i className="logo-icon"> <FaWeightHanging /> </i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    );
  }
}

export default Navbar;