import React from "react";
import useLogout from "../../hooks/useLogout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavThemeToggle from "../../Components/Navbar/NavThemeToggle";
import ProfileBanner from "./Components/ProfileBanner";
import Wallets from "./Components/Wallets";
import image from "../../image/seller.jpg";
import "./Profile.css";
import ProfileDescription from "./Components/ProfileDescription";
import SharedInformation from "./Components/SharedInformation";
import ProfileLottie from "./Components/ProfileLottie/ProfileLottie";

const Profile = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userData = useSelector((state) => state.login.userData);
  return (
    <div>
      <NavThemeToggle></NavThemeToggle>
      <h1 className="text-3xl text-center font-bold m-5">Profile</h1>
      <div className="grid grid-cols-12 lg:m-6 m-auto px-auto ">
        <div className="md:col-span-5 col-span-11 flex flex-col items-center justify-center gap-10 ">
          <ProfileBanner></ProfileBanner>
          <Wallets></Wallets>
          <ProfileDescription></ProfileDescription>
          <SharedInformation></SharedInformation>
        </div>
        <div className="h-[100vh]  col-span-0 hidden rounded md:block border md:col-span-7">
          <div className="seller-buyer w-full">
            {/* <img src={image} alt="" /> */}
            <ProfileLottie className="mt-6"></ProfileLottie>
            <h1 className="text-center text-3xl font-bold">
              Ready to earn on your own terms?
            </h1>
            <div className="flex justify-center">
              <button>Become a seller</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
