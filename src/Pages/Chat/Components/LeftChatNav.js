import React, { useEffect, useState } from "react";
import LeftNavBanner from "./LeftNavBanner";
import axios from "axios";

const LeftChatNav = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const selectedUser = (user) => {
    // console.log(id);
    setSelectedId(user);
  };
  useEffect(() => {
    try {
      const user = async () => {
        const user = localStorage.getItem("jwt");
        const config = {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        };
        const { data } = await axios.get(
          `https://devhiveserver.vercel.app/user/user?search=${search}`,

          config
        );
        setUsers(data);
      };
      user();
    } catch (error) {
      console.log(error);
    }
  }, [search]);
  console.log(users);
  return (
    <div>
      <div class="flex flex-col py-8 pl-6 pr-2 w-full bg-white ">
        <div class="flex flex-row items-center justify-center h-12 w-full">
          <div class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              ></path>
            </svg>
          </div>
          <div class="ml-2 font-bold text-2xl">DevHiveChat</div>
        </div>
        <LeftNavBanner></LeftNavBanner>
        <div class="flex flex-col mt-8">
          <div class="flex flex-row items-center justify-between text-xs mt-2">
            <span class="font-bold">Search User</span>
            <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
              {users?.length}
            </span>
          </div>
          {!selectedId && (
            <div class="flex flex-col space-y-1 mt-4 mx-2">
              <label
                htmlFor="UserEmail"
                className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
              >
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="email"
                  id="UserEmail"
                  placeholder="Email"
                  className="peer h-8 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Email
                </span>
              </label>
            </div>
          )}
          <div class="w-full  flex flex-col space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            {selectedId && (
              <button
                // onClick={addAdmin}
                type="button "
                class="flex items-center border justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                <svg
                  class="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Chat with {selectedId.name}
              </button>
            )}
            {/* The button to open modal */}
            {/* <label htmlFor="my-modal-6" className="btn">
                  open modal
                </label> */}
          </div>
          {search && !selectedId && (
            <div className="relative top-6">
              <ul className="absolute menu p-2 shadow bg-base-100 rounded-box w-full">
                {users.map((user) => (
                  <li className="flex flex-row overflow-clip" key={user?._id}>
                    <a
                      className="w-full"
                      onClick={() => {
                        selectedUser(user);
                      }}
                    >
                      {" "}
                      <img src={user?.pic} className="w-6" alt="" />{" "}
                      {user?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div class="flex flex-row items-center justify-between mt-6 text-xs">
            <span class="font-bold">Active Conversations</span>
            <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
              4
            </span>
          </div>
          <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
            <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
              <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                H
              </div>
              <div class="ml-2 text-sm font-semibold">Henry Boyd</div>
            </button>
            <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
              <div class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                M
              </div>
              <div class="ml-2 text-sm font-semibold">Marta Curtis</div>
              <div class="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                2
              </div>
            </button>
            <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
              <div class="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full">
                P
              </div>
              <div class="ml-2 text-sm font-semibold">Philip Tucker</div>
            </button>
            <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
              <div class="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full">
                C
              </div>
              <div class="ml-2 text-sm font-semibold">Christine Reid</div>
            </button>
            <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
              <div class="flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full">
                J
              </div>
              <div class="ml-2 text-sm font-semibold">Jerry Guzman</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftChatNav;
