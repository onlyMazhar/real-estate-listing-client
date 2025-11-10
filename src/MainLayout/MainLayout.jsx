import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div >
            <Navbar />
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout; <Navbar />
