import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import DeveloperChat from "../../Pages/DeveloperProfile/DeveloperChat";

const DeveloperIntro = ({ profile,serviceData }) => {
  const userData = useSelector((state) => state.login.userData);
  console.log(serviceData);

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
          <div className="">
            <div className="mx-auto py-8 w-full max-w-7xl bg-white">
            <div className="mx-auto max-w-xs sm:max-w-2xl lg:max-w-none">
              
              {/* :CATEGORY TITLE */}
              <h2 className="text-2xl text-gray-700 font-bold">My Services</h2>


              {/* :PRODUCT LIST */}
              <div className="mt-6">
                <ul className="grid grid-cols-2 gap-10">
                  {serviceData.map(product => (
                    <li key={product.id} className="col-span-full border rounded-2xl p-6 sm:col-span-2 lg:col-span-1 group relative">
                      <a href={product.href} className="w-full h-full flex flex-col">
                        {/* ::Container */}
                        <div className="relative">
                          {/* :::Picture container */}
                          <div className="aspect-w-1 aspect-h-1 shadow-sm rounded-lg overflow-hidden group-hover:shadow-md">
                            {/* ::::picture */}
                            <img src={product?.serviceImage?.img1} alt={product?.pictureAlt} className="w-full h-full object-cover object-center" />
                            {/* ::::overlay background */}
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-800 via-transparent opacity-70 group-hover:from-transparent" />
                          </div>
                          {/* :::price */}
                          {/* <span className="z-20 absolute bottom-3 right-5 px-0.5 rounded-md text-2xl text-white font-semibold antialiased group-hover:text-gray-700 group-hover:bg-white group-hover:bg-opacity-70">{`$${product.price}`}</span> */}
                        </div>
                        {/* ::Product Details */}
                        <div className="flex-grow mt-2 px-3 h-full">
                          {/* :::Info container */}
                          <div className="relative flex flex-col">
                            {/* ::::name */}
                            <h3 className="text-base text-gray-800 font-semibold">{product?.slugTitle}</h3>
                            {/* ::::colors description */}
                            <p className="mt-1 text-sm text-gray-500 font-medium">{product?.aboutService}</p>
                            {/* ::::add to cart button */}
                            {/* <div>
                            <p className="z-20 absolute bottom-3 right-5 px-0.5 rounded-md text-2xl text-white font-semibold antialiased group-hover:text-gray-700 group-hover:bg-white group-hover:bg-opacity-70">{`$${product.price}`}</p>
                            </div> */}
                            <div className="flex">
                            <button className="mt-4 py-1.5 w-full rounded-md mr-4 bg-primary text-sm text-[white] font-semibold tracking-wide hover:bg-gray-300 hover:text-gray-800">Edit</button>
                            <button className="mt-4 py-1.5 w-full rounded-md bg-secondary text-sm text-[white] font-semibold tracking-wide hover:bg-gray-300 hover:text-gray-800">Delete</button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperIntro;
