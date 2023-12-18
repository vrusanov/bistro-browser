import React from "react";
import "./header.css";
import { Container } from "react-bootstrap";
const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2>
              <span></span>
            </h2>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
