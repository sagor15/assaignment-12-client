import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import UseAdmin from '../../../hooks/UseAdmin';
import "./Dashboard.css";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = UseAdmin(user);
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

                       {
                           user &&  <li><Link to='/dashboard'>My Order</Link ></li>
                          
                       }
                       {user &&  <li><Link to="/dashboard/addreview">Add a Review</Link></li>}
                        <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                        {admin && <li><Link to="/dashboard/allusers">All Users</Link></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;