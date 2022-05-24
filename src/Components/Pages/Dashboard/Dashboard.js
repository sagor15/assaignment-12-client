import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className='mt-16'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-start sagor">
                    <label for="my-drawer-2" class="btn btn-primary drawer-button dashbord ">Open</label>
                    <h4 className='text-purple-500 mt-0'>wellcome to dashboard</h4>

                    <Outlet></Outlet>



                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul style={{ textDecoration: 'none' }} class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Order</Link ></li>
                        <li><Link to="/dashboard/addreview">Add a Review</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;