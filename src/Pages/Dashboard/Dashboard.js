import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h1 className='text-3xl font-bold text-purple-600'>Welcome to your Dashboard</h1>
                {/* element upper Outlet will exist upper in all routes in nested routing */}
                {/* <h1 className='text-3xl font-bold text-blue-600'>Outlet experiencing</h1> */}

                <Outlet></Outlet>
                {/* element lower Outlet will exist lower in all routes in nested routing */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                {/* <h1 className='text-3xl font-bold text-blue-600'>Outlet experiencing</h1> */}


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Appointment</Link></li>
                    <li><Link to="/dashboard/myReview">My Review</Link></li>
                    <li><Link to="/dashboard/myHistory">My History</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;