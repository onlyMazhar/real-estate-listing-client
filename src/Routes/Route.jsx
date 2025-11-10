import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Banner from "../Components/Banner";
import Home from "../Pages/Home";
import AllProperties from "../Pages/AllProperties";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/allproperties',
                element: <AllProperties/>
            },
            {
                path: '/addpropertie'
            }
        ]
    }
])

export default router;