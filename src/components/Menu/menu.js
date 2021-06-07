import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div id="menu">
      <ul id="menuUl">
        <li className="menuLi">
          <Link to="/">Home</Link>
        </li>
        <li className="menuLi">
          <Link to="/about">About</Link>
        </li>
        <li className="menuLi">
          <Link to="/works">Works</Link>
        </li>
        <li className="menuLi">
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
