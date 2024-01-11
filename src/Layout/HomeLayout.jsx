import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const HomeLayout = ()=>{
  return(
    <>
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default HomeLayout;