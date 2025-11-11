import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo-colored.png'
import Container from './Container';
import { AuthContext } from "../Context/AuthContext";


const Navbar = () => {

    const { user,logoutUser } = use(AuthContext)

    const handleLogout =()=>{
        logoutUser()
        .then(()=>{

        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <Container>
            <div className="navbar relative top-0 bg-transparent lg:pt-5 z-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <nav
                            tabIndex="-1"
                            className="menu text-blace menu-sm dropdown-content rounded-box z-1 mt- w-44 p-2 bg-white/30 backdrop-blur-sm">
                            <NavLink className="px-2" to={'/'}>Home</NavLink>
                            <NavLink className="px-2" to={'/allproperties'}> All Properties</NavLink>
                            <NavLink className="px-2" to={'/addpropertie'}> Add Properties</NavLink>

                        </nav>
                    </div>
                    <Link to={'/'} className=" md:pl-2 lg:pl-2 text-xl "><img className='h-9 md:h-10 lg:14  ' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <nav className="menu menu-horizontal  space-x-12 text-black">
                        <NavLink className="px-2" to={'/'}>Home</NavLink>
                        <NavLink className="px-2" to={'/allproperties'}> All Properties</NavLink>
                        <NavLink className="px-2" to={'/addpropertie'}> Add Properties</NavLink>

                    </nav>
                </div>
                <div className="dropdown dropdown-end navbar-end space-x-4">
                    {
                        user
                            ? <>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            title={user.email}
                                            alt="Tailwind CSS Navbar component"
                                            src="https://cdn-icons-png.flaticon.com/512/8792/8792047.png" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-white/30 backdrop-blur-sm text-black rounded-box z-1 mt-44 w-52 p-2 ">
                                    <li><NavLink to={'/myproperties'} className="justify-between"> My Properties</NavLink></li>
                                    <li> <NavLink to={'/myratings'} > My Ratings</NavLink> </li>
                                    <button onClick={handleLogout} className=' py-1 w-1/2 mx-auto   btn btn-ghost bg-primary'>Logout</button>
                                </ul>
                            </>
                            : <div className='space-x-4'>
                                <Link to={'/login'}>
                                    <button className='btn btn-primary text-black' >Login</button>
                                </Link>
                                <Link to={'/signup'}>
                                    <button className='btn btn-primary text-black' >SignUP</button>
                                </Link>
                            </div>
                    }


                </div>
            </div>
        </Container>

    );
};

export default Navbar;