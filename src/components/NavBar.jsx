import React from "react";

import logo from "../assets/collection/gog-logo.webp";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <nav className="d-flex justify-content-between container pt-3">
          <a className="navbar-brand link-light" href="/">
            <img src={logo} alt="logo" />
          </a>
          <div className="nav">
            <a className="nav-link link-light" href="/">
              Home
            </a>
            <a className="nav-link link-light" href="/about">
              About
            </a>
            <a className="nav-link link-light" href="/avatar">
              Avatar
            </a>
            <a className="nav-link link-light" href="/heroes">
              Heroes
            </a>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;