import React from "react";
import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="max-w-[1320px] mx-auto grid grid-cols-6 ">
      <Helmet>
        <title>Dashboard | Add Marathon</title>
      </Helmet>
      {/* Sidebar Navigation */}
      <div className="col-span-1 flex flex-col text-white space-y-2 py-4 border-2 shadow-lg border-r-slate-400 min-h-[800px] bg-slate-200
       ">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold  py-2 rounded bg-white text-xl " : "text-gray-600 border-b border-slate-500 text-xl"
          }
        >
          Add Marathon
        </NavLink>
        <NavLink
          to="my-marathon"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold  py-2 rounded bg-white  text-xl" : "text-gray-600 border-b border-slate-500 text-xl"
          }
        >
          My Marathon List
        </NavLink>
        <NavLink
          to="my-apply"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold  py-2  bg-white rounded text-xl" : "text-gray-600 border-b border-slate-500 text-xl"
          }
        >
          My Apply List
        </NavLink>
      </div>

      {/* Main Content */}
      <div className="col-span-5 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
