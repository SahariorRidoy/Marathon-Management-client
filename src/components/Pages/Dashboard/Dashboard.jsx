import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="max-w-[1320px] mx-auto grid grid-cols-6">
      {/* Sidebar Navigation */}
      <div className="col-span-1 border-2 border-red-600 flex flex-col text-white space-y-2 p-4
       bg-gray-200">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "text-gray-600"
          }
        >
          Add Marathon
        </NavLink>
        <NavLink
          to="my-marathon"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "text-gray-600"
          }
        >
          My Marathon List
        </NavLink>
        <NavLink
          to="my-apply"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "text-gray-600"
          }
        >
          My Apply List
        </NavLink>
      </div>

      {/* Main Content */}
      <div className="col-span-5 border-2 border-red-600 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
