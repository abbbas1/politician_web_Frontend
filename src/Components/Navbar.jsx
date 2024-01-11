import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.png"

function Navbar() {
  return (
    <nav className="relative">
      <ul className="flex  flex-wrap   py-4 justify-evenly  m-0 items-center font-bold  ">
        <NavLink  to="/">
          <img src={logo} className="top-1  w-14 h-14 " alt="LOGO" />
        </NavLink>

        <li>
          <NavLink className=" hover:text-green-700 " to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className=" hover:text-green-700 " to="">
            NEWS
          </NavLink>
        </li>
        <li>
          <NavLink className=" hover:text-green-700 " to="">
            EVENTS
          </NavLink>
        </li>
        <li>
          <NavLink className=" hover:text-green-700 " to="">
            SOCIAL ACTIVITY
          </NavLink>
        </li>
        <li>
          <NavLink className=" hover:text-green-700 " to="">
            DONATE
          </NavLink>
        </li>
        <li>
          <NavLink  className=" hover:text-green-700 "  to="/login">
            LOGIN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
