import React from "react";
import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 p-4 md:p-6">
      <Helmet>
        <title>Dashboard | Add Marathon</title>
      </Helmet>

      {/* Sidebar Navigation */}
      <div className="col-span-1 md:col-span-2 lg:col-span-1 px-4 py-6 flex flex-col text-white space-y-2 border-2 border-gray-300 bg-accent min-h-[400px] md:min-h-[600px] lg:min-h-[800px] rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-white">
          Dashboard
        </h2>

        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive
              ? "text-accent font-semibold py-2 md:py-3 px-3 md:px-4 rounded-lg bg-white shadow-md text-sm transition-all duration-300 ease-in-out"
              : "text-white py-2 md:py-3 px-3 md:px-4 rounded-lg text-sm hover:bg-accent hover:text-white transition-all duration-300 ease-in-out"
          }
        >
          Add Marathon
        </NavLink>

        <NavLink
          to="my-marathon"
          className={({ isActive }) =>
            isActive
              ? "text-accent font-semibold py-2 md:py-3 px-3 md:px-4 rounded-lg bg-white shadow-md text-sm transition-all duration-300 ease-in-out"
              : "text-white py-2 md:py-3 px-3 md:px-4 rounded-lg text-sm hover:bg-accent hover:text-white transition-all duration-300 ease-in-out"
          }
        >
          My Marathon List
        </NavLink>

        <NavLink
          to="my-apply"
          className={({ isActive }) =>
            isActive
              ? "text-accent font-semibold py-2 md:py-3 px-3 md:px-4 rounded-lg bg-white shadow-md text-sm transition-all duration-300 ease-in-out"
              : "text-white py-2 md:py-3 px-3 md:px-4 rounded-lg text-sm hover:bg-accent hover:text-white transition-all duration-300 ease-in-out"
          }
        >
          My Apply List
        </NavLink>
      </div>

      {/* Main Content */}
      <div className="col-span-1 md:col-span-4 lg:col-span-5 bg-gray-50 shadow-xl rounded-xl p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
