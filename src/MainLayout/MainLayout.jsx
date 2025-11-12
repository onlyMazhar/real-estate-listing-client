import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div >
            <Navbar />
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer />
            <ToastContainer />

        </div>
    );
};

export default MainLayout; <Navbar />
