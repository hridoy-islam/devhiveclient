import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const ManageUsers = () => {
  const [userData, setUserData] = useState();
  const handleDelete = (id) => {
    try {
      const user = async () => {
        const user = localStorage.getItem("jwt");
        const config = {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        };
        const { data } = await axios.delete(
          `https://devhiveserver.vercel.app/admin/user/${id}`,

          config
        );
        console.log(data);
        alert("user deleted");
      };
      user();
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
      alert("something went wrong");
      console.log("something went wrong");
    }
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
          `https://devhiveserver.vercel.app/user/all`,

          config
        );
        setUserData(data);
      };
      user();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="w-full lg:w-[750px]">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Credential</th>
              <th>About</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {userData?.map((userData) => (
              <tr
                data-aos-duration="3000"
                data-aos="fade-left"
                key={userData._id}
              >
                <th>
                  <label>
                    <input type="checkbox" className="checkbox " />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={userData?.pic} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{userData?.name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  {userData?.email}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {userData?.uid}
                  </span>
                </td>
                <td>Buyer</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    Make Verified
                  </button>
                  <button
                    onClick={() => handleDelete(userData?._id)}
                    className="btn btn-danger btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
            {/* row 2 */}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Credential</th>
              <th>About</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
