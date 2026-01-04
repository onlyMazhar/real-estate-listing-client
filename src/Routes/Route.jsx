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

//https://real-estate-listing-server.vercel.app

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('https://real-estate-listing-server.vercel.app/latest-property')
            },
            {
                path: '/allproperties',
                element: <AllProperties />,
                loader: () => fetch('https://real-estate-listing-server.vercel.app/lists')
            },
            {
                path: '/allproperties/:id',
                element: <PrivateRoute>
                    <PropertyDetails />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://real-estate-listing-server.vercel.app/lists/${params.id}`)
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
                loader: () => fetch(`https://real-estate-listing-server.vercel.app/lists`)
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
                loader: ({ params }) => fetch(`https://real-estate-listing-server.vercel.app/lists/${params.id}`)

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
        </PrivateRoute>
    },
])

export default router;