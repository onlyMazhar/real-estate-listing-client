import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router';
import { Bounce, toast } from 'react-toastify';
import { ExternalLink, LogOutIcon, User } from 'lucide-react';
import { MdExitToApp } from 'react-icons/md';

const UserProfile = () => {
    const { user, logoutUser } = use(AuthContext)
    const navigate = useNavigate();

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
        <div className="dropdown   dropdown-end navbar-end">
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
                            className=" menu menu-sm border rounded-md border-primary dropdown-content bg-white/30 backdrop-blur-sm text-black z-1 mt-38  p-2 ">
                            <div className='px-1 pb-3'>
                                <h3>{user.displayName}</h3>
                                {/* <h3>User displayName</h3> */}
                                <p><small>{user.email}</small></p></div>
                            <Link to={'/dashboard/profile'}>
                                <p className='flex gap-2 p-1'> <User size={16} /> Profile</p >
                            </Link>
                            <p onClick={handleLogout} className='p-1 flex text-red-500 rounded-md hover:bg-red-100 items-center gap-2 cursor-pointer hover text-left'> <LogOutIcon size={14} /> Logout</p>
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
    );
};

export default UserProfile;