import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../assets/logo-colored.png'
import Container from './Container';
import { AuthContext } from "../Context/AuthContext";
import { Bounce, toast } from 'react-toastify';
import { Menu } from 'lucide-react';



const Navbar = () => {

    const { user, logoutUser } = use(AuthContext)
    const navigate = useNavigate();
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
    </>

    // console.log("User Photo URL:", user?.photoURL);

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                // console.log(result.user)
                toast.success('Logout Successfull!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
                navigate('/')
            })
            .catch(error => {
                // console.log(error)
                toast.error(`${error.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
    }

    return (
        <div className='bg-secondary fixed w-full z-50 '>

            <Container>
                <div className="navbar relative  px-0 bg-transparent  z-100 ">
                    {/* Small device */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="text-white btn btn-ghost lg:hidden">
                                <Menu/>
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
                    <div className="dropdown dropdown-end navbar-end space-x-4 pr-4 md:pr-0">
                        {
                            user
                                ? <>
                                    <div tabIndex={0} role="button" className="btn mr-0 btn-ghost btn-circle avatar">
                                        <div className="w-12 rounded-full border-3  border-primary">
                                            <img
                                                title={user.email}
                                                alt={user?.displayName}
                                                src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/8792/8792047.png"} />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex="-1"
                                        className=" menu menu-sm border rounded-md border-primary dropdown-content bg-white/30 backdrop-blur-sm text-black rounded-sm z-1 mt-38  p-2 ">
                                        <div className='px-1 pb-3'>
                                            <h3>{user.displayName}</h3>
                                            {/* <h3>User displayName</h3> */}
                                            <p><small>{user.email}</small></p></div>
                                        <button onClick={handleLogout} className='mx-auto btn btn-ghost bg-primary'>Logout</button>
                                    </ul>
                                </>
                                : <div className='space-x-4'>
                                    <Link to={'/login'}>
                                        <button className='btn btn-primary text-secondary' >Login</button>
                                    </Link>
                                    <Link to={'/signup'}>
                                        <button className='btn btn-primary text-secondary' >Signup</button>
                                    </Link>
                                </div>
                        }


                    </div>
                </div>
            </Container>
        </div>


    );
};

export default Navbar;