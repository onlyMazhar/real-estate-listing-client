import React from 'react';
import { Link, Outlet } from 'react-router';
import { EditIcon, Home, LayoutDashboard, Settings } from 'lucide-react';


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                {/* Navbar */}
                <nav className="navbar w-full bg-secondary text-white text-3xl font-bold">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <LayoutDashboard />
                    </label>
                    <div className="px-4">Navbar Title</div>
                </nav>

                {/* Page content here */}
                <Outlet />

            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-secondary/80 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow text-white">
                        {/* List item */}
                        <Link to={'/'}>
                            <li>

                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                    {/* Home icon */}
                                    <Home size={20} />
                                    <span className="is-drawer-close:hidden">Homepage</span>
                                </button>
                            </li>
                        </Link>


                        {/* List item */}
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                                {/* Settings icon */}
                                <EditIcon size={20} />
                                <span className="is-drawer-close:hidden">Settings</span>

                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;