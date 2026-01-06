import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import { Bounce, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { addOrUpdate } from "../Utils";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, loginWithGooGle, updateUser } = use(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    const handleSignup = async (data) => {
        const { name, photoUrl, email, password } = data;

        try {
            const result = await createUser(email, password);
            const user = result.user;

            await updateUser({
                displayName: name,
                photoURL: photoUrl,
            });

            await addOrUpdate({
                email: user.email,
                name,
                image: photoUrl,
                createdAt: new Date(),
            });

            toast.success("Registration successful!", {
                position: "top-center",
                autoClose: 2000,
            });

            navigate("/");
        } catch (err) {
            console.error(err);
            toast.error(err.message || "Signup failed", {
                position: "top-right",
                transition: Bounce,
            });
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await loginWithGooGle();
            const user = result.user;

            await addOrUpdate({
                email: user.email,
                name: user.displayName,
                image: user.photoURL,
                createdAt: new Date(),
            });

            toast.success("Login successful!", {
                position: "top-center",
                autoClose: 2000,
            });

            navigate("/");
        } catch (err) {
            toast.error(err.message, {
                position: "top-right",
                transition: Bounce,
            });
        }
    };

    return (
        <>
            <title>Home Nest - Register</title>

            <div className="flex justify-center items-center bg-gray-100 p-6 lg:p-16">
                <div className="mt-12 w-full max-w-lg p-4 sm:px-8 border-2 rounded-sm border-primary">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-800">Create an Account</h2>
                        <p className="text-gray-500 mt-2 text-sm">
                            Register now to access all exclusive properties.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(handleSignup)} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="label font-semibold">Full Name</label>
                            <input
                                {...register("name", { required: "Name is required" })}
                                className="input input-bordered w-full"
                                placeholder="Your full name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Photo */}
                        <div>
                            <label className="label font-semibold">Photo URL</label>
                            <input
                                {...register("photoUrl", { required: "Photo URL is required" })}
                                className="input input-bordered w-full"
                                placeholder="Photo URL"
                            />
                            {errors.photoUrl && (
                                <p className="text-red-500 text-sm">{errors.photoUrl.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="label font-semibold">Email</label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: emailRegex,
                                        message: "Enter a valid email",
                                    },
                                })}
                                className="input input-bordered w-full"
                                placeholder="example@email.com"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label font-semibold">Password</label>
                            <div className="relative">
                                <input
                                    {...register("password", {
                                        required: "Password is required",
                                        pattern: {
                                            value: passwordRegex,
                                            message:
                                                "Min 6 chars, uppercase, lowercase, number & special char",
                                        },
                                    })}
                                    type={showPassword ? "text" : "password"}
                                    className="input input-bordered w-full pr-10"
                                />
                                <span
                                    className="absolute right-3 top-3 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                </span>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password.message}</p>
                            )}
                        </div>

                        <button className="btn btn-primary w-full text-black font-bold">
                            Sign Up
                        </button>
                    </form>

                    <div className="my-6 text-center text-gray-400">— or —</div>

                    <button
                        onClick={handleGoogleSignIn}
                        className="btn flex items-center justify-center gap-2 w-full border border-gray-300 text-gray-800 py-3 rounded-lg hover:bg-gray-100 transition"
                    >
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

                    <p className="text-sm text-center mt-6">
                        Already have an account?{" "}
                        <Link to="/login" className="text-yellow-500 font-semibold">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Signup;
