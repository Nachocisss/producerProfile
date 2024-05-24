import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import links from "../constants/Screens.json";

export function Header() {
  return (
    <div className="headerContainer">
      <h1>Nombre</h1>
      <div className="linksContainer">
        {links.map((link, index) => {
          return (
            <NavLink className="routeLink" to={link.link} key={index}>
              {link.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
export default Header;
