import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import pages from "../constants/Screens.json";

export function Header() {
  return (
    <div className="headerContainer">
      <h1>Nombre</h1>
      <div className="linksContainer">
        {pages.map((page, index) => {
          return (
            <NavLink className="routeLink" to={page.link} key={index}>
              {page.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
export default Header;
