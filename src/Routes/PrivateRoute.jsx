import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { RefreshCcwDot } from 'lucide-react';

const PrivateRoute = ({ children, skeleton = null }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation();


    if (loading) {
        return skeleton ? skeleton : <div className='min-h-screen flex items-center justify-center container mx-auto '>
            <p className='text-5xl text-secondary flex justify-center items-center font-bold'>L<span className='animate-spin'><RefreshCcwDot size={35} className="transform scale-x-[-1]" /></span>ADING...</p>
        </div>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate state={location?.pathname} to={'/login'}></Navigate>

    }
};

export default PrivateRoute;