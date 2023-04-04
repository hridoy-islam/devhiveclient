import React from "react";
import useLogout from "../hooks/useLogout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavThemeToggle from "../Components/Navbar/NavThemeToggle";

const Profile = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userData = useSelector((state) => state.login.userData);
  return (
    <div>
      <div
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="App  flex justify-center flex-col items-center"
      >
        <h1 className="text-5xl font-bold m-5">Profile</h1>
        <div>
          <NavThemeToggle></NavThemeToggle>
        </div>
        <img
          className="w-20 "
          title={userData?.displayName}
          src={userData?.photoURL}
          alt={userData?.displayName}
        />
        <h2 className="text-3xl">{userData?.displayName}</h2>
        <h2 className="text-xl">{userData?.email}</h2>
        <h4 className="text-xl">uid: {userData?.uid}</h4>
        <h4 className="text-xl">{userData?.phoneNumber}</h4>

        <div className="flex m-3">
          {/* <Link to="/settings">
          <Button className="mr-6 w-28" gradientMonochrome="lime">
            Edit Profile
          </Button>
        </Link> */}
          <Link to="/user-profile/edit">
            <button className=" btn btn-info" gradientMonochrome="failure">
              Edit Profile
            </button>
          </Link>
          <button
            className="ml-3 btn btn-warning"
            gradientMonochrome="failure"
            onClick={useLogout()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
