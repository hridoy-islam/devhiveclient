import React from "react";
import "./HeaderDrawer.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <Link>nk> for styles
import { Link, NavLink } from "react-router-dom";
import DrawerBanner from './DrawerBanner'
// ..
AOS.init();
const HeaderDrawer = () => {
  return (
    <div className="block z-50 lg:hidden">
      <aside
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        class="fixed  top-0 left-0 w-64 h-full"
        aria-label="Sidenav"
      >
        <div class="overflow-y-auto HeaderDrawer py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="sticky px-auto flex flex-col justify-center">
            <div  class="flex sticky  justify-center mr-4">
                <img
                  src="https://avatars.githubusercontent.com/u/109535601?v=4"
                  class="mr-3 h-8"
                  alt="paradox Logo"
                />
                <span class="self-center text-2xl  font-semibold whitespace-nowrap dark:text-white">
                  DevHive
                </span>
              </div>
         <DrawerBanner></DrawerBanner>
            <Link to="/register"><button className="btn btn-info w-full btn-md">JOIN Now</button></Link>
          </div>
          
        

          <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <Link to='/' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ml-3">Home</span>
            </Link>
            <Link to='/chat' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ml-3">Inbox</span>
            </Link>
            <Link to='/track-orders' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ml-3">Manage Orders</span>
            </Link>
            <Link to='/lists' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ml-3">Lists</span>
            </Link>
            <Link className="dropdown pl-3 flex justify-start items-center group dropdown-end">
              <label
                tabIndex={0}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                Categories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-5 h-5 ml-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </label>
              <ul
                tabIndex={0}
                id="dropdown-pages"
                className="flex items-center absolute dropdown-content flex-col m-2 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white group"
              >
                <Link className="flex items-center min-w-max p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ">
                  <a className="">Categories Item 1</a>
                </Link>
                <Link className="flex items-center  min-w-max p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ">
                  <a>Categories Item 2</a>
                </Link>
              </ul>
            </Link>
            <Link to='/settings' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ml-3">Settings</span>
            </Link>
          </ul>
          <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <span class="ml-3">Developer Section</span>
            <Link to='/developer-profile' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ml-3">Manage Profile</span>
            </Link>
            <Link to='/my-gists' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ml-3">Manage Gigs</span>
            </Link>
          </ul>
          <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <span class="ml-3">Admin Section</span>
            <Link to='/all-gigs'>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="ml-3">Manage Gigs</span>
              </a>
            </Link>
            <Link to='/all-users'>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
                <span class="ml-3">Manage Users</span>
              </a>
            </Link>
            <Link to='/issues'>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="ml-3">Issues</span>
              </a>
            </Link>
          </ul>
          </div>
      </aside>
    </div>
  );
};

export default HeaderDrawer;
