import React from "react";
import { Link, NavLink } from "react-router-dom";
const DrawerBanner=()=>{
    return(
        <>
             
          <div className=" w-full h-[80px] bg-gray-300 mt-5 rounded-lg"></div>
            <div className="avatar relative bottom-10 left-2  rounded-lg ">
              <div className="w-12 relative top-3 left-1 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://avatars.githubusercontent.com/u/67302140?v=4" />
              </div>
            </div>
            <div className="">
              <div className="text-base-content font-medium  dark:text-gray-200">
                Name
              </div>
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Name.com
            </div>
            <div className="flex flex-row justify-evenly items-center my-3">
              <Link to="/settings/profile" className="btn  btn-xs btn-circle btn-ghost">
                <img src="https://cdn-icons-png.flaticon.com/512/1256/1256291.png" alt="edit profile" title="edit profile" />
              </Link>
              <Link to="/settings/generel" className="btn  btn-xs btn-circle btn-ghost">
                <img src="https://cdn-icons-png.flaticon.com/512/655/655707.png" alt="settings" title="settings" />
              </Link>
              <Link to="/logout" className="btn  btn-xs btn-circle btn-ghost">
                <img src="https://cdn-icons-png.flaticon.com/512/166/166456.png" alt="logout" title="logout" />
              </Link>
            </div>
        </>
    )
}

export default DrawerBanner;