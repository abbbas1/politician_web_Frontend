import React from "react";
import { NavLink, useParams,Link } from "react-router-dom";

function SideBar() {
  const{id}=useParams()
  return (
    <>
      <span className="h-96 bg-green-600 shadow-lg w-36 flex">
        <ul className=" ">
          
          <li className="pb-5 pt-2 pl-2 font-semibold text-lg shadow-sm hover:bg-green-900 hover:h-14 hover:w-36">
            <Link to={`/memberDashboard/${id}/`}>Profile</Link>
          </li>

          <li className="pb-5 pt-2 pl-2 font-semibold text-lg shadow-sm hover:bg-green-900 hover:h-14 hover:w-36">
            <Link to={`/memberDashboard/${id}/memberEvents`}>Events</Link>
          </li>
          <li className="pb-5 pt-2 pl-2 font-semibold text-lg shadow-sm hover:bg-green-900 hover:h-14 hover:w-36">
            <Link to={`/memberDashboard/${id}/memberNewsPage`}>News</Link>
          </li>
          <li className="pb-5 pt-2 pl-2 font-semibold text-lg shadow-sm hover:bg-green-900 hover:h-14 hover:w-36">
            <NavLink to="">
              Social Activity
            </NavLink>
          </li>
          <li className="pb-5 pt-2 pl-2 font-semibold text-lg shadow-sm hover:bg-green-900 hover:h-14 hover:w-36">
            <NavLink to="">
              Polling Stations
            </NavLink>
          </li>
          <li className="pb-5 pt-2 pl-2 font-semibold text-lg shadow-sm hover:bg-green-900 hover:h-14 hover:w-36">
            <NavLink to="">Chats</NavLink>
          </li>
        </ul>
      </span>
    </>
  );
}

export default SideBar;
