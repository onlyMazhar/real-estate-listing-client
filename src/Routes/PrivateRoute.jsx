import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children, skeleton = null }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation();


    if (loading) {
        return skeleton ? skeleton :  <div className='min-h-[90vh] flex items-center justify-center container mx-auto '><span className="loading loading-dots loading-xl"></span></div>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate state={location?.pathname} to={'/login'}></Navigate>

    }
};

export default PrivateRoute;