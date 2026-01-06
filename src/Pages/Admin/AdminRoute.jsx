import React from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Navigate} from 'react-router';
import { use } from 'react';

const AdminRoute = ({ children }) => {
    const { user, loading, role } = use(AuthContext);
    // const location = useLocation();

    if (loading) return <div>
        <div className='min-h-screen flex items-center justify-center container mx-auto '>
            <p className='text-5xl text-secondary flex justify-center items-center font-bold'>L<span className='animate-spin'><RefreshCcwDot size={35} className="transform scale-x-[-1]" /></span>ADING...</p>
        </div>
    </div>
    if(!user || role !== "admin"){
        return <Navigate to={'/dashboard/profile'}/>
    }
    return children;
};

export default AdminRoute;
