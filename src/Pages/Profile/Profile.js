import React from "react";
import useLogout from "../../hooks/useLogout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavThemeToggle from "../../Components/Navbar/NavThemeToggle";
import ProfileBanner from "./Components/ProfileBanner";
import Wallets from "./Components/Wallets";

const Profile = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userData = useSelector((state) => state.login.userData);
  return (
    <div>
      <NavThemeToggle></NavThemeToggle>
      <h1 className="text-5xl text-center font-bold m-5">Profile</h1>
      <div className="grid grid-cols-12 lg:m-6 m-auto px-auto ">
        <div className="md:col-span-5 col-span-11 flex flex-col items-center justify-center gap-10 ">
          <ProfileBanner></ProfileBanner>
          <Wallets></Wallets>
        </div>
        <div className="col-span-0 hidden rounded md:block border md:col-span-7">
          right
        </div>
      </div>
    </div>
  );
};

export default Profile;
