import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className=" bg-stone-900 flex justify-around relative">
        <span className="text-stone-200  h-60 pl-5">
          <ul className="list-disc ">
            <li className="mb-2 mt-5 ">
              <NavLink>News</NavLink>
            </li>
            <li className="mb-2 mt-5">
              <NavLink>Social Activity</NavLink>
            </li>
            <li className="mb-2 mt-5">
              <NavLink>About Party</NavLink>
            </li>
            <li className="mb-2 mt-5">
              <NavLink>Struggle for our Vision</NavLink>
            </li>
            <li className="mb-2 mt-5">
              <NavLink>History</NavLink>
            </li>
            <li className="mb-2 mt-5">
              <NavLink>What we do</NavLink>
            </li>
          </ul>
        </span>
        <span className="text-stone-200  h-80 pl-5">
          <ul className="list-disc">
            <li className="mb-2 mt-5">
              <NavLink>Regions</NavLink>
            </li>
            <li className="mb-2 mt-5">
              <NavLink>PTI experts group</NavLink>
            </li>
            <li className="mb-2 mt-5">
              <NavLink>Become Member</NavLink>
            </li>
            <li className="mb-2 mt-5">
              <NavLink>Past Political History</NavLink>
            </li>
            <li className="mb-2 mt-5">
              <NavLink>Donate</NavLink>
            </li>
            <li className="mb-2 mt-5">
              <NavLink>Youth Policy</NavLink>
            </li>
          </ul>
        </span>
      </footer>
      <hr className="bg-slate-400"/>
      <div className="bg-stone-900 text-stone-200 font-medium flex justify-center items-center h-10 ">
        <p>© Copyright Pakistan Tehreek-e-Insaf 2023&nbsp;All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
