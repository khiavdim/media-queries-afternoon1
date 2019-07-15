import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor() {
    super();
    this.dropdown = React.createRef();
  }

  flipShow = () => {
    console.log(this.dropdown.current);
    let { current } = this.dropdown;
    if (current.classList.contains("show-dropdown")) {
      current.classList.add("hide-dropdown");
      current.classList.remove("show-dropdown");
    } else {
      current.classList.add("show-dropdown");
      current.classList.remove("hide-dropdown");
    }
  };

  render() {
    return (
      <div>
        <nav>
          <div className="nav-title">Start Bootstrap</div>
          <div className="nav-menu">
            <span className="nav-menu-span">Services</span>
            <span className="nav-menu-span">Portfolio</span>
            <span className="nav-menu-span">About</span>
            <span className="nav-menu-span">Team</span>
            <span className="nav-menu-span">Contact</span>
          </div>
          <div className="nav-hamburger" onClick={this.flipShow}>
            <span className="nav-hamburger-span">menu</span>
            <i className="fas fa-bars" />
          </div>
        </nav>
        <div className="nav-mobile-menu" ref={this.dropdown}>
            <ul className="nav-menu-span">Services</ul>
            <ul className="nav-menu-span">Portfolio</ul>
            <ul className="nav-menu-span">About</ul>
            <ul className="nav-menu-span">Team</ul>
            <ul className="nav-menu-span">Contact</ul>
          </div>
      </div>
    );
  }
}

export default Nav;
