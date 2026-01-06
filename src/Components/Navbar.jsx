import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo-colored.png'
import Container from './Container';
import { AuthContext } from "../Context/AuthContext";
import { Menu, Moon, Sun } from 'lucide-react';
import UserProfile from './UserProfile';
import { ThemeContext } from '../Context/ThemeContext';



const Navbar = () => {

    const { user } = use(AuthContext)
    const { theme, toggleTheme } = use(ThemeContext);
    const links = <>
        <NavLink className="px-2" to={'/'}>Home</NavLink>
        <NavLink className="px-2" to={'/allproperties'}> All Properties</NavLink>
        <NavLink className="px-2" to={'/addpropertie'}> Add Properties</NavLink>
        {
            user && <>
                <NavLink className="px-2" to={'/myproperties'}> My Properties </NavLink>
                <NavLink className="px-2" to={'/dashboard'}> Dashboard </NavLink>

            </>
        }
        {/* dark teke switch toggle */}
        <div className='ml-2 lg:ml-0'>
            <label className="swap  md:ml-0 swap-rotate self-start">
            <input
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === "dark"}
            />
            <Sun className="swap-off h-5 w-5 text-warning" />
            <Moon className="swap-on h-5 w-5 text-primary" />
        </label>
        </div>

    </>

    // console.log("User Photo URL:", user?.photoURL);


    return (
        <div className='bg-secondary fixed w-full z-50 '>

            <Container>
                <div className="navbar relative  px-0 bg-transparent  z-100 ">
                    {/* Small device */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="text-white btn btn-ghost lg:hidden">
                                <Menu />
                            </div>
                            <nav
                                tabIndex="-1"
                                className="menu text-blace menu-sm dropdown-content rounded-box z-1 w-44 ml-4 p-2 bg-white/30 backdrop-blur-sm">{links}
                            </nav>
                        </div>
                        <Link to={'/'} className="  text-xl "><img className='h-9 md:h-10 lg:14  ' src={logo} alt="" /></Link>
                    </div>
                    {/* Large device */}
                    <div className="navbar-center hidden lg:flex">
                        <nav className="menu menu-horizontal  space-x-12 text-white">
                            {links}

                        </nav>
                    </div>
                    <div className="dropdown   dropdown-end navbar-end space-x-4 pr-4 md:pr-0 ">
                        <UserProfile />
                    </div>
                </div>
            </Container>
        </div>


    );
};

export default Navbar;