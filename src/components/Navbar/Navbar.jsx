import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
  }, [user]);
  return (
    <div className="navbar flex justify-between max-w-[1320px] mx-auto sticky top-0 z-50 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/marathons">Marathons</NavLink>
            <Link to="/login">
              <p className="btn bg-[#469ee2] text-white text-xl">Login</p>
            </Link>
            <Link to="/register">
              <p className="btn bg-[#469ee2] text-white text-xl">Register</p>
            </Link>
          </ul>
        </div>
        <Link to="/" className="btn px-0 btn-ghost text-lg lg:text-2xl">
          Marathon
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1 space-x-5 text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-md bg-blue-500 text-white"
                : "px-4 py-2 rounded-md"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/marathons"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-md bg-blue-500 text-white"
                : "px-4 py-2 rounded-md"
            }
          >
            Marathons
          </NavLink>
        </ul>

        {/* If User Exist */}

        {user?.photoURL ? (
          <div className="flex gap-6 text-lg font-semibold">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 rounded-md bg-blue-500 text-white"
                  : "px-4 py-2 rounded-md"
              }
            >
              Dashboard
            </NavLink>
            <div
              className="w-full h-12 rounded-full overflow-hidden cursor-pointer"
              
            >
              <div className="avatar online">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL}  className=""/>
                </div>
              </div>
             
            </div>
            <button
              onClick={logOut}
              className="w-full text-center px-2 py-2 bg-error text-white rounded-lg hover:opacity-70 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-xl px-4 py-2 rounded-md bg-green-500 text-white"
                  : "font-semibold text-green-500 text-xl px-4 py-2 rounded-md"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-xl px-4 py-2 rounded-md bg-green-500 text-white"
                  : "font-semibold text-green-500 text-xl px-4 py-2 rounded-md"
              }
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
