import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import { Bounce, toast } from "react-toastify";

const Registration = () => {
    // const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate()

    const { loginUser, loginWithGooGle } = use(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(() => {
                navigate(location?.state || '/')
                toast.success('Login Successfull!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            })
            .catch(err => {
                toast.error(`${err.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })

        // console.log(email, password);
    };
    const handleGoogleSignIN = () => {
        loginWithGooGle()
            .then(() => {
                // console.log(result.user)
                navigate(location?.state || '/')
                toast.success('Login Successfull!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            })
            .catch(error => {
                // console.log(error)
                toast.error(`${error.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
    }


    return (
        <>
            <title>Home Nest - Login</title>
            <div className="flex justify-center items-center bg-gray-100 p-6 pt-20 sm:p-8 lg:p-12 ">
                <div className=" mt-12 w-full max-w-lg   p-4 sm:p-8 border-2 rounded-sm border-primary">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-800">Login</h2>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email */}
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700">Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="example@email.com"
                                className="input input-bordered w-full bg-gray-50 border-gray-300 focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password"
                                    className="input input-bordered w-full bg-gray-50 border-gray-300 focus:ring-2 focus:ring-yellow-400 pr-10"
                                    required
                                />
                                <div
                                    className="absolute right-3 top-3.5 text-gray-500 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                </div>
                            </div>
                            {/* {error && <p className="text-red-500 text-sm mt-2">{error}</p>} */}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="btn btn-warning w-full text-black font-bold text-lg"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    {/* Divider */}
                    <div className="flex items-center my-5">
                        <div className="grow border-t border-gray-300"></div>
                        <span className="px-3 text-gray-500 text-sm">or</span>
                        <div className="grow border-t border-gray-300"></div>
                    </div>
                    {/* Google Login */}
                    <button onClick={handleGoogleSignIN} className="btn flex items-center justify-center gap-2 w-full border border-gray-300 text-gray-800 py-3 rounded-lg hover:bg-gray-100 transition">
                        <svg
                            aria-label="Google logo"
                            width="18"
                            height="18"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <g>
                                <path d="m0 0H512V512H0" fill="#fff"></path>
                                <path
                                    fill="#34a853"
                                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                                ></path>
                                <path
                                    fill="#4285f4"
                                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                                ></path>
                                <path
                                    fill="#fbbc02"
                                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                                ></path>
                                <path
                                    fill="#ea4335"
                                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                                ></path>
                            </g>
                        </svg>
                        Continue with Google
                    </button>

                    {/* Footer */}
                    <p className="text-center text-sm text-gray-600 mt-5">
                        New to Home Nest?
                        <Link to="/signup" className="text-yellow-600 font-semibold hover:underline" > Signup</Link>
                    </p>

                </div>
            </div >
        </>
    );
};

export default Registration;
