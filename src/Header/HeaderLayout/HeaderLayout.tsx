import React, { FC, useState } from "react";

type LinkProps = {
  label: string;
  url: string;
};

type HeaderLayoutProps = {
  links: LinkProps[];
};

const HeaderLayout: FC<HeaderLayoutProps> = ({ links }) => {
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
        {menuButton}
        <div className="logo">
          <h1>My Website</h1>
        </div>
        {navLinks}
      </div>
    </header>
  );
};

export default HeaderLayout;
