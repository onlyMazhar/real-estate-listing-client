import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Banner from "../Components/Banner";
import Home from "../Pages/Home";
import AllProperties from "../Pages/AllProperties/AllProperties";
import AddPropertie from "../Pages/AddPropertie";
import Login from "../Pages/Lgoin";
import Signup from "../Pages/Signup";
import MyRatings from "../Pages/MyRatings";
import MyProperties from "../Pages/MyProperties";
import PrivateRoute from "./PrivateRoute";
import Page404 from "../Pages/Page404";
import PropertyDetails from "../Pages/AllProperties/PropertyDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/allproperties',
                element: <AllProperties />,
                loader: () => fetch('http://localhost:3000/lists')
            },
            {
                path: '/allproperties/:id',
                element: <PrivateRoute>
                    <PropertyDetails />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/lists/${params.id}`)
            },
            {
                path: '/addpropertie',
                element: <PrivateRoute>
                    <AddPropertie />
                </PrivateRoute>
            },
            {
                path: '/myratings',
                element: <PrivateRoute>
                    <MyRatings />
                </PrivateRoute>
            },
            {
                path: '/myproperties',
                element: <PrivateRoute>
                    <MyProperties />
                </PrivateRoute>
            },
            {
                path:'/myproperties',
                element: <PrivateRoute></PrivateRoute>
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
    }
])

export default router;