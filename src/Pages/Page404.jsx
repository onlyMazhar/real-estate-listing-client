import React from "react";
import { Link } from "react-router";

const Page404 = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
            <div className="max-w-md">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
                    alt="404 image"
                    className="w-60 mx-auto mb-6 opacity-90"
                />
            </div>

            <h1 className="text-6xl font-extrabold text-gray-800 mb-3">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Oops! Page Not Found</h2>
            <p className="text-gray-500 mb-6 max-w-md">
                The page you’re looking for might have been removed, had its name
                changed, or is temporarily unavailable.
            </p>


            <Link to="/" className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-200" >
                Back to Home
            </Link>
        </div>
    );
};

export default Page404;
