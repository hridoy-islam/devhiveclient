import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import "./Header.module.css";
import HeaderDrawer from "./HeaderComponents/HeaderDrawer";
import DrawerBanner from "./HeaderComponents/DrawerBanner"
import NavThemeToggle from '../Navbar/NavThemeToggle'
const Header = () => {
  const [drawer, setDrawer] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {

    setIsModalOpen(false);
  };
  return (

    <div>
      <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div class="flex flex-wrap justify-between items-center">
            <div class="flex justify-start items-center">
              {drawer && <HeaderDrawer></HeaderDrawer>}
              {drawer && (
                <button
                  onClick={() => setDrawer(false)}
                  className="fixed z-50 btn btn-lg p-4 btn-circle btn-error btn-outline lg:hidden top-[50%] right-5 "
                >
                  <img className='w-[800px]' src='https://cdn-icons-png.flaticon.com/512/1243/1243911.png?w=740&t=st=1680274314~exp=1680274914~hmac=ed5d0844f7d089ca8499a94fde6f979885ce9710e81c4871c16d66005a8c37c5' title="close drawer" alt="close drawer" />
                </button>
              )}
              <button
                onClick={() => setDrawer(true)}
                class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Toggle sidebar</span>
              </button>
              <Link to='/' class="flex mr-1">
                <img
                  src="https://avatars.githubusercontent.com/u/109535601?v=4"
                  class="mr-1 h-8"
                  alt="paradox Logo"
                />
                <span class="self-center text-2xl hidden sm:block font-semibold whitespace-nowrap dark:text-white">
                  DevHive
                </span>
              </Link>
              <form action="#" method="GET" class="hidden lg:block lg:pl-2">
                <label for="topbar-search" class="sr-only ">
                  Search
                </label>
                <div class="relative mt-1 lg:w-72">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="search"
                    id="topbar-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search Gists"
                  />
                </div>
              </form>
               {/* home  */}
    <Link to='/'>
    <button
                type="button"
                data-dropdown-toggle="apps-dropdown"
                class="flex flex-row gap-1 p-2 mt-1 ml-0 sm:ml-3 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 "
              >
                {/* <!-- Icon --> */}
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              <span className="hidden sm:block">HOME</span>
              </button></Link>
    <Link to='/contact'>
    <button
                type="button"
                data-dropdown-toggle="apps-dropdown"
                class="flex flex-row gap-1 p-2 mt-1 ml-0 sm:ml-3 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 "
              >
                {/* <!-- Icon --> */}
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
               <span className="hidden sm:block">Contact</span>
              </button></Link>
              {/* developer start */}
<div className="dropdown mt-1 dropdown-end">
      <label tabIndex={0} >
          <button
                type="button"
                data-dropdown-toggle="apps-dropdown"
                class="p-2 hidden lg:block text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
               <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
     
              </button>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        
        <li><Link to='/developer-profile'>Manage Profile</Link></li>
        <li><Link to='/all-gigs'>Manage Gigs</Link></li>
      </ul>
    </div>
{/* developer end  */}
            {/* admin start */}
<div className="dropdown mt-1 dropdown-end">
      <label tabIndex={0} > 
          <button
                type="button"
                data-dropdown-toggle="apps-dropdown"
                class="p-2 hidden lg:block text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
             <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
              </button>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        
        <li><Link to='/all-gigs'>Manage Gigs</Link></li>
        <li><Link to='/all-users'>Manage Users</Link></li>
        <li><Link to='/issues'>Issues</Link></li>
      </ul>
    </div>
{/* admin end  */}
            </div>

            {/* 2nd section */}
            <div class="flex items-center lg:order-2">
              
              <button
                id="toggleSidebarMobileSearch"
                type="button"
                onClick={handleOpenModal}
                class="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Search</span>
                {/* <!-- Search icon --> */}
                <svg
                  aria-hidden="true"
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              
              <>
      <div className="flex items-center justify-center">
        
      </div>

      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute z-40 inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            <div className="inline-block align-bottom bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-100">Search</h3>
                  <div className="mt-2">
                    <form>
                      <input type="text" placeholder="Search" className="border-gray-200 border-2 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400" />
                      <div className="mt-4">
                        <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Search</button>
                        <button type="button" className="ml-4 bg-gray-200 text-gray-600 rounded-lg px-4 py-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" onClick={handleCloseModal}>Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>

   
              {/* <!-- Notifications --> */}
              <button
                type="button"
                data-dropdown-toggle="notification-dropdown"
                class="p-2  text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span class="sr-only">View notifications</span>
                {/* <!-- Bell icon --> */}
                <svg
                  aria-hidden="true"
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                class="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700"
                id="notification-dropdown"
              >
                <div class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  Notifications
                </div>
                
                <a
                  href="#"
                  class="block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline"
                >
                  <div class="inline-flex items-center ">
                    <svg
                      aria-hidden="true"
                      class="mr-2 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    View all
                  </div>
                </a>
              </div>
              {/* theme */}
              <button
                type="button"
                data-dropdown-toggle="apps-dropdown"
                class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 focus:ring-3 "
              >
                {/* <!-- Icon --> */}
                <NavThemeToggle></NavThemeToggle>
              </button>
              
              {/* <!-- Apps --> */}
            

{/* components start */}
<div className="dropdown dropdown-end">
      <label tabIndex={0} >
          <button
                type="button"
                data-dropdown-toggle="apps-dropdown"
                class="p-2 hidden lg:block text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
              </button>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        
        <li><Link>List 1</Link></li>
        <li><Link>List 2</Link></li>
      </ul>
    </div>
{/* components end  */}

              <div className="dropdown dropdown-end">
                
      <label tabIndex={0} >
        <button
                type="button"
                class="flex mx-3  text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://avatars.githubusercontent.com/u/67302140?v=4"
                  alt="user photo"
                />
              </button>
      </label>
      <ul tabIndex={0} className="mt-3 py-2 px-4 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-60">
        <DrawerBanner></DrawerBanner>
        
        <li><Link to='/chat'>Inbox</Link></li>
        <li><Link to='/track-orders'>Manage Orders</Link></li>
        <li><Link to='/lists'>Wishlist</Link></li>
        <li><Link to='/settings'>Settings</Link></li>
      </ul>
    </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
