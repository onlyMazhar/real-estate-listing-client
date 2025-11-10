import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Banner from "../Components/Banner";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    }
])

export default router;