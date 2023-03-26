import React, { useState, FC } from "react";
import "./HeaderLayout.css";

type LinkProps = {
  label: string;
  url: string;
};

type HeaderLayoutProps = {
  links: LinkProps[];
  children?: React.ReactNode;
};

const HeaderLayout: FC<HeaderLayoutProps> = ({ links, children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuButton = (
    <div className="menu-button" onClick={toggleMenu}>
      <div className={`menu-icon ${showMenu ? "active" : ""}`}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  );

  const navLinks = (
    <nav className={`nav-links ${showMenu ? "active" : ""}`}>
      {links.map((link, index) => (
        <a key={index} href={link.url}>
          {link.label}
        </a>
      ))}
    </nav>
  );

  return (
    <header>
      <div className="container">
        <div className="logo">{children}</div>
        {menuButton}
        {navLinks}
      </div>
    </header>
  );
};

export default HeaderLayout;
