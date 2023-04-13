import React from "react";
import { Outlet } from "react-router";
import AdminNavigation from "../Components/Admin/AdminNavigation/AdminNavigation";

const AdminLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-evenly ">
      <AdminNavigation></AdminNavigation>
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;
