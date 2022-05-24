import React from 'react';
import { Outlet } from 'react-router-dom';
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className='mt-16'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-start sagor">
                    <label for="my-drawer-2" class="btn btn-primary drawer-button dashbord ">Open drawer</label>
                        <Outlet></Outlet>
                    <h1>sagor is comming</h1>


                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;