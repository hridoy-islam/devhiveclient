import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import DeveloperChat from "../../Pages/DeveloperProfile/DeveloperChat";
import DeveloperGIg from "./DeveloperGIg";

const DeveloperIntro = ({ profile,serviceData }) => {
  const userData = useSelector((state) => state.login.userData);

  // const {photoURL, displayName, username, title, language, about } = profile[0];
  const developerId = profile[0]?.userId;
  return (
    <div>
      <div class="p-16 lg:flex md:flex">
        <div class="lg:w-4/12 md:w-4/12 mx-auto p-8 bg-gray shadow text-center">
          {" "}
          <div>
            {" "}
            <div class="">
              {" "}
              <div class="w-32 h-32 bg-indigo-100 mx-auto rounded-full shadow-xl inset-x-0 flex items-center justify-center text-indigo-500">
                <img
                  className="rounded-full"
                  src={profile[0]?.photoURL}
                  alt=""
                />
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div class="mt-8 border-b pb-12">
            {" "}
            <h1 class="text-2xl font-semibold text-gray-600">
              {profile[0]?.displayName}
            </h1>
            <h1 class="text-lg font-medium text-gray-300">
              {profile[0]?.username}
            </h1>
            <p class="font-bold text-md mb-4 text-gray-600 mt-2">
              {profile[0]?.title}
            </p>{" "}
            {profile[0]?.userId != localStorage.getItem("user_id") && (
              <DeveloperChat developerId={developerId}></DeveloperChat>
            )}
          </div>{" "}
          <div>
            <p class="mt-8 text-left font-semibold text-2xl text-gray-600">
              Language:
            </p>
            <div class="mt-3 ml-6 text-left font-medium text-lg text-gray-500">
              <p className="block">{profile[0]?.language}</p>
            </div>
          </div>
        </div>
        <div class="lg:w-8/12 md:w-8/12 mt-6 flex flex-col lg:px-16 md:pl-6">
          <div>
          <p className="font-semibold text-2xl pb-6 ">Description</p>
          <p class="text-gray-600 font-medium text-md mb-2">
            {profile[0]?.about}
          </p>{" "}
          </div>
          <div>
            <DeveloperGIg serviceData={serviceData}></DeveloperGIg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperIntro;
