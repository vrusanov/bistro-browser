import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./header.css";
import { Container } from "react-bootstrap";
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <Link to="/" className="nav__link">
            <div className="logo">
              <h2>
                <span>
                  <i className="ri-restaurant-line"></i> Bistro Browser
                </span>
              </h2>
            </div>
          </Link>
          <div className={`nav__menu ${isMobileMenuOpen ? "show" : ""}`}>
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/about" className="nav__link">
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/menu" className="nav__link">
                  Menu
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/contact" className="nav__link">
                  Contact
                </Link>
              </li>
              <div className="search__box search__box--mobile">
                <input type="text" placeholder={"search..."} />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </ul>
          </div>
          <div className="menu__right">
            <div className="search__box ">
              <input type="text" placeholder={"search..."} />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </div>
          <div className="mobile__menu" onClick={toggleMobileMenu}>
            <span>
              <i
                className={`ri-${
                  isMobileMenuOpen ? "close-line" : "menu-line"
                }`}
              ></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
