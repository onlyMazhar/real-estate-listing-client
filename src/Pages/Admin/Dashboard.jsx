import { Link, NavLink, Outlet, } from 'react-router';
import { Database, EditIcon, HdIcon, Home, LayoutDashboard, Moon, Settings, Sun, UserCheck, Users } from 'lucide-react';
import UserProfile from '../../Components/UserProfile';
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import './dashboard.css'
import { ThemeContext } from '../../Context/ThemeContext';


const Dashboard = () => {
    const { role } = use(AuthContext)
    const { theme, toggleTheme } = use(ThemeContext);


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                {/* Navbar */}
                {/* Changed bg-secondary and text-white to base-100 and base-content */}
                <nav className="navbar w-full bg-base-100 border-b border-base-300 flex justify-between text-base-content text-3xl font-bold ">
                    <div className='flex '>
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/* Sidebar toggle icon */}
                            <LayoutDashboard />
                        </label>
                        <div className="px-4">Dashboard</div>
                    </div>
                    <div className='navbar-end mr-38.5 mb-1'>
                        <label className="swap swap-rotate self-start">
                            <input
                                type="checkbox"
                                onChange={toggleTheme}
                                checked={theme === "dark"}
                            />
                            <Sun className="swap-off h-5 w-5 text-warning" />
                            <Moon className="swap-on h-5 w-5 text-primary" />
                        </label>
                    </div>
                    {/* */}
                    <div className='mr-5.5 pb-0 -mb-1.5'>
                        <UserProfile />
                    </div>
                </nav>


                {/* Page content here */}
                <Outlet />

            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                {/* Changed bg-secondary/80 to bg-base-200 */}
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    {/* Changed text-white and bg-gray-700 to base-content and bg-base-300 */}
                    <ul className="menu w-full grow text-base-content space-y-3  [&>a]:bg-base-300 [&>a]:rounded-md">
                        {/* List item */}
                        <NavLink to={'/'}>
                            <li>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                    {/* Home icon */}
                                    <Home size={20} />
                                    <span className="is-drawer-close:hidden">Homepage</span>
                                </button>
                            </li>

                        </NavLink>


                        {role === "admin" && <>
                            <NavLink to={'/dashboard/all-posted-property'}>
                                <li>
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Posts">
                                        {/* Home icon */}
                                        <Database size={20} />
                                        <span className="is-drawer-close:hidden">All Posts</span>
                                    </button>
                                </li>
                            </NavLink>

                            <NavLink to={'/dashboard/all-users'}>
                                <li>
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Users">
                                        {/* Home icon */}
                                        <Users size={20} />
                                        <span className="is-drawer-close:hidden">All Users</span>
                                    </button>
                                </li>
                            </NavLink>
                        </>}

                        {/* List item */}
                        <NavLink to={'/dashboard/profile'}>
                            <li>
                                <button className="is-drawer-close:tooltip  is-drawer-close:tooltip-right" data-tip="Profile">
                                    {/* Settings icon */}
                                    <UserCheck size={20} />
                                    <span className="is-drawer-close:hidden">Profile</span>
                                </button>
                            </li>
                        </NavLink>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;