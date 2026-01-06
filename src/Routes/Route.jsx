import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Banner from "../Components/Banner";
import Home from "../Pages/Home";
import AllProperties from "../Pages/AllProperties/AllProperties";
import AddPropertie from "../Pages/AddPropertie";
import Login from "../Pages/Lgoin";
import Signup from "../Pages/Signup";
import MyProperties from "../Pages/MyProperties";
import PrivateRoute from "./PrivateRoute";
import Page404 from "../Pages/Page404";
import PropertyDetails from "../Pages/AllProperties/PropertyDetails";
import Update from "../Pages/Update";
import MyPropertiesSkeleton from "../Pages/MyPropertiesSkeleton";
import Dashboard from "../Pages/Admin/Dashboard";
import Profile from "../Pages/Admin/Profile";
import { RefreshCcwDot } from "lucide-react";
import PostedProperties from "../Pages/Admin/PostedProperties";
import AllUsers from "../Pages/Admin/AllUsers";
import AdminRoute from "../Pages/Admin/AdminRoute";

//https://localhost:3000

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        hydrateFallbackElement: <div className='min-h-screen flex items-center justify-center bg-base-100'>
            <p className='text-5xl text-base-content flex justify-center items-center font-bold tracking-widest'>L<span className='animate-spin mx-1'><RefreshCcwDot size={40} className="transform scale-x-[-1] text-primary" /></span>ADING... </p>
        </div>,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch(`${import.meta.env.VITE_API_LINK}/latest-property`)
            },
            {
                path: '/allproperties',
                element: <AllProperties />,
                loader: () => fetch(`${import.meta.env.VITE_API_LINK}/lists`)
            },
            {
                path: '/allproperties/:id',
                element: <PropertyDetails />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_LINK}/lists/${params.id}`)
            },
            {
                path: '/addpropertie',
                element: <PrivateRoute>
                    <AddPropertie />
                </PrivateRoute>
            },
            {
                path: '/myproperties',
                element: <PrivateRoute skeleton={MyPropertiesSkeleton}>
                    <MyProperties />
                </PrivateRoute>,
                loader: () => fetch(`${import.meta.env.VITE_API_LINK}/lists`)
            },

            // {
            //     path: '/myproperties',
            //     element: <PrivateRoute>
            //         <MyProperties />
            //     </PrivateRoute>
            // },
            {
                path: '/update/:id',
                element: <PrivateRoute>
                    <Update />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_LINK}/lists/${params.id}`)

            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '*',
        element: <Page404 />
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <Dashboard />
        </PrivateRoute>,
        children: [
            {
                index: true,
                element: <Profile />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'all-posted-property',
                element: <AdminRoute>
                    <PostedProperties />
                </AdminRoute>
            },
            {
                path: 'all-users',
                element: <AdminRoute>
                    <AllUsers />
                </AdminRoute>
            }
        ]

    },
])

export default router;