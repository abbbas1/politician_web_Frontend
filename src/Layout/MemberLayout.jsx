import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/sidebar";
import Footer from "../Components/Footer";

function MemberLayout() {
  return (
    <div className="min-h-screen flex flex-col">
    <div>
      <Navbar />
    </div>
    <div className="flex-1 flex">
      <div className="flex-none w-3/12">
        <SideBar />
      </div>
      <div className="flex-grow overflow-y-auto">
        <Outlet />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
  
  );
}

export default MemberLayout;
