import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-vui">
      
      <div className="logo-vui">
      <img src="/36650c664e257c37760d0f7a27fe0a8d.jpg" alt="Logo" className="logohead" />
      </div>
      
     
      <nav className="nav-vui">
        <a href="#" className="aheadvui">Nav 1</a>
        <a href="#"className="aheadvui">Nav 2</a>
        <a href="#"className="aheadvui">Nav 3</a>
        <a href="#"className="aheadvui">Download Mobile App</a>
      </nav>
    
      <div className="actions">
        <button className="host-button">Become A Host</button>
        <div className="menu-icon">
          <span className="que">&#9776;</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
