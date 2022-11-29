import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useStatus from '../../hooks/useStatus';
import Loading from '../../shared/Loading';

const DashBoard = () => {

    const { user, loadingUser } = useContext(AuthContext);
    const [status, statusLoading] = useStatus(user);
    // console.log(status)

    if (loadingUser || statusLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>
                {/* <h2 className='text-3xl text-orange-300'>Dashboard</h2> */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-slate-400 text-base-content space-y-4 ">
                    {/* <li><NavLink className='btn btn-primary'>Dashboard</NavLink></li>s */}
                    <li><NavLink to="my-profile" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>My Profile</NavLink></li>
                    {
                        status === "Admin" &&
                        <>
                            <li><NavLink to="all-sellers" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>All Sellers</NavLink></li>
                            <li><NavLink to="all-buyers" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>All Buyers</NavLink></li>
                            <li><NavLink to="all-products" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>All Products</NavLink></li>
                            <li><NavLink to="reported-items" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>Reported Items</NavLink></li>
                        </>
                    }
                    {
                        status === "Seller" &&
                        <>
                            <li><NavLink to="add-a-product" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white " : "btn btn-outline"}>Add A Product</NavLink></li>
                            <li><NavLink to="my-products" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>My Products</NavLink></li>
                            <li><NavLink to="my-buyers" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>My Buyers</NavLink></li>
                        </>
                    }
                    {
                        status === "Buyers" &&
                        <>
                            <li><NavLink to="my-orders" className={({ isActive }) => isActive ? "btn bg-[#3A4256] text-white" : "btn btn-outline"}>My Orders</NavLink></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;