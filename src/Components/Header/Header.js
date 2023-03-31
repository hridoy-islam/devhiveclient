import React from "react";
import "./Header.module.css";
import HeaderDrawer from "./HeaderComponents/HeaderDrawer";

const Header = () => {
  const [drawer, setDrawer] = React.useState(false);
  return (
    <div className="navbar  bg-base-100">
      {drawer && <HeaderDrawer></HeaderDrawer>}
      {drawer && (
        <button
          onClick={() => setDrawer(false)}
          className="fixed btn p-4 btn-circle btn-outline lg:hidden top-[50%] right-5 bg-black opacity-50"
        >
          Close
        </button>
      )}

      <label
        onClick={() => setDrawer(true)}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 menu-right">
          <li tabIndex={0}>
            <a>Home</a>
          </li>
          <li tabIndex={0}>
            <a>Service</a>
          </li>
          <li tabIndex={0}>
            <a>Contact</a>
          </li>
          <li tabIndex={0}>
            <a>About</a>
          </li>
          <button className="btn btn-outline btn-primary ml-3">Join</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
