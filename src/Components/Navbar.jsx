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
          <NavLink className=" hover:bg-green-700 hover:rounded-md hover:text-white transition duration-200 pt-2 pb-2 pl-3 pr-3" to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className=" hover:bg-green-700 hover:rounded-md hover:text-white transition duration-200 pt-2 pb-2 pl-3 pr-3" to="/allNews">
            NEWS
          </NavLink>
        </li>
        <li>
          <NavLink className=" hover:bg-green-700 hover:rounded-md hover:text-white transition duration-200 pt-2 pb-2 pl-3 pr-3" to="/allEvents">
            EVENTS
          </NavLink>
        </li>
        <li>
          <NavLink className=" hover:bg-green-700 hover:rounded-md hover:text-white transition duration-200 pt-2 pb-2 pl-3 pr-3" to="">
            SOCIAL ACTIVITY
          </NavLink>
        </li>
        <li>
          <NavLink className=" hover:bg-red-600  hover:text-white text-red-600 pt-2 pb-2 transition duration-200 border-red-600 border-4 pl-3 pr-3" to="">
            DONATE
          </NavLink>
        </li>
        <li>
          <NavLink  className=" hover:bg-green-700 hover:rounded-md hover:text-white pt-2 pb-2 transition duration-200 pl-3 pr-3"  to="/login">
            LOGIN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
