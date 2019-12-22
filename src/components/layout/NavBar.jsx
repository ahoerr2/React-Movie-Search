import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { IconContext } from "react-icons";
import { FaGithubSquare } from "react-icons/fa";
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar" variant="dark">
          <Navbar.Brand href="#home">Movie Search</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="https://github.com/ahoerr2/React-Movie-Search" target="_blank">
            <IconContext.Provider value={{ color: "white", size: "1.20em", className: "global-class-name" }}>
                <FaGithubSquare/>
            </IconContext.Provider>
              Github
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
