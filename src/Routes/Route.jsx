import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Banner from "../Components/Banner";
import Home from "../Pages/Home";
import AllProperties from "../Pages/AllProperties/AllProperties";
import AddPropertie from "../Pages/AddPropertie";
import Login from "../Pages/Lgoin";
import Register from "../Pages/Register";

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
                loader: ()=> fetch('http://localhost:3000/lists')
            },
            {
                path: '/addpropertie',
                element: <AddPropertie />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default router;