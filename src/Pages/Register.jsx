import React, { useState } from "react";
import { Link } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Registration = () => {
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleRegistration = (e) => {
        e.preventDefault();
        setError("");

        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, photoUrl, email, password);
    };

    return (
        <>
            <title>Home Nest - Register</title>

            <section className="flex justify-center items-center min-h-screen bg-gray-100 p-6 sm:p-8 lg:p-16">
                <div className="  w-full max-w-2xl  p-8 sm:p-12">
                    {/* Header */}
                    <header className="mb-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-800">Create an Account</h2>
                        <p className="text-gray-500 mt-2 text-sm">
                            Register now to access all exclusive properties and manage your listings easily.
                        </p>
                    </header>

                    {/* Form */}
                    <form onSubmit={handleRegistration} className="space-y-6">
                        {/* Full Name */}
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700">Full Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Your full name"
                                className="input input-bordered w-full bg-gray-50 border-gray-300 focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                        </div>

                        {/* Photo URL */}
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700">Photo URL</label>
                            <input
                                name="photoUrl"
                                type="text"
                                placeholder="Paste your photo URL"
                                className="input input-bordered w-full bg-gray-50 border-gray-300 focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                        </div>

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
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="btn btn-warning w-full text-black font-bold text-lg"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="my-6 text-center text-gray-400 text-sm">— or —</div>

                    {/* Google Login */}
                    <button className="flex items-center justify-center gap-2 w-full border border-gray-300 text-gray-800 py-3 rounded-lg hover:bg-gray-100 transition">
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
                    <p className="text-sm text-center mt-6 text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-yellow-500 font-semibold hover:text-yellow-600"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Registration;
