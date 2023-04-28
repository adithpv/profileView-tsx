import "../styles/header.css";
import { SlUser } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="menu-wrapper">
          <div className="logo">
            <SlUser />
            <h1>{title}</h1>
          </div>

          <ul className={`menu ${isOpen ? "open" : ""}`}>
            <li className="menu-list">
              <Link to="/">Home</Link>
            </li>
            <li className="menu-list">
              <Link to="#">About</Link>
            </li>
            <li className="menu-list">
              <Link to="#">Contact</Link>
            </li>
            <li className="menu-list">
              <Link to="#">FAQ</Link>
            </li>
          </ul>

          <div className="toggle" onClick={toggleMenu}>
            <RxCross2 />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
