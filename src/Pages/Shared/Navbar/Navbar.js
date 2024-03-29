import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, loading_signOut, error_signOut] = useSignOut(auth);

  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const navButton = (
    <>
      <li>
        <Link to="/Home">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/review">Review</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      {user ? (
        <li>
          <button onClick={() => logOut()} className="btn btn-active btn-ghost">
            Sign Out
          </button>
        </li>
      ) : (
        <li tabIndex="0">
          <a className="justify-between">Login</a>
          <ul className="p-2">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Register</Link>
            </li>
          </ul>
        </li>
      )}
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-gradient-to-r from-cyan-500 to-transparent">
        {/* <div className="navbar bg-gradient-to-r from-emerald-400 to-transparent"> */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navButton}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            SmileCraft Dentistry{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navButton}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
