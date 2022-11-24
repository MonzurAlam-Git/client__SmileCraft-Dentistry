import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navButton = <>
        <li> <Link to="/Home">Home</Link></li>
        <li tabIndex="0">
            <a className="justify-between">
                Login
            </a>
            <ul className="p-2">
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/'>Register</Link></li>
            </ul>
        </li>
        <li> <Link to="/appointment">Abhor</Link></li>
        <li> <Link to="/review">abject</Link></li>
        <li> <Link to="/contact">abnegate</Link></li>
        <li> <Link to="/about">abdicate</Link></li>



    </>
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-cyan-500 to-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navButton}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navButton}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary">Get started</a>
                </div>
            </div>

        </div>

    );
};

export default Navbar;