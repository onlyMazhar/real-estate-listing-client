import React from "react";
import { FaKey, FaMoneyBillWave, FaBuilding } from "react-icons/fa";
import homeImg from "../assets/h34.jpg.svg"; // replace with your real image

const WhyUs = () => {
    return (
        <div className="py-20 ">
            <div className=" mx-auto px-4 md:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Side - Image */}
                <div className="relative">
                    <img
                        src={homeImg}
                        alt="Modern property"
                        className=" w-full rounded-xl object-cover"
                    />
                    {/* Changed bg-white to bg-base-100 and text-gray-x to base-content */}
                    <div className="absolute bottom-6 left-6 bg-base-100 shadow-md px-5 py-3 rounded-xl flex items-center space-x-3">
                        <div className="bg-secondary text-white p-2 rounded-full">
                            <FaBuilding size={20} />
                        </div>
                        <div>
                            <p className="text-base-content opacity-70 text-sm">Total Rent</p>
                            <h3 className="font-semibold text-base-content">4,382 Unit</h3>
                        </div>
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="space-y-6">
                    <div>
                        {/* Changed text-gray-900 to text-base-content */}
                        <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-2">
                            Why Choose Us
                        </h2>
                        {/* Changed text-gray-500 to opacity-70 text-base-content */}
                        <p className="text-base-content opacity-70 max-w-md text-justify">
                            We focus on transparency, trust, and technology to make property
                            management simple, secure, and rewarding. Our team ensures that
                            every client receives professional guidance and consistent support
                            in every step of their real estate journey.
                        </p>
                    </div>

                    {/* Services List */}
                    <div className="space-y-5">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <FaBuilding size={20} />
                            </div>
                            <div>
                                {/* Changed text-gray-900 to text-base-content */}
                                <h4 className="font-semibold text-base-content">
                                    Property Management
                                </h4>
                                <p className="text-base-content opacity-60 text-sm">
                                    We handle everything — from tenant screening to maintenance —
                                    ensuring your properties stay profitable and stress-free.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <FaKey size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-base-content">
                                    Mortgage Services
                                </h4>
                                <p className="text-base-content opacity-60 text-sm">
                                    Our experts connect you with the best mortgage plans that fit
                                    your financial goals, making ownership easier than ever.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <FaMoneyBillWave size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-base-content">
                                    Currency Services
                                </h4>
                                <p className="text-base-content opacity-60 text-sm">
                                    We provide fast, secure, and multi-currency transactions so
                                    you can buy or rent properties globally with confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Stats */}
            <div className="max-w-5xl mx-auto mt-16 grid grid-cols-3 text-center px-4">
                <div>
                    {/* Changed text-gray-900 to text-base-content */}
                    <h3 className="text-3xl font-bold text-base-content">4M</h3>
                    <p className="text-base-content opacity-60 text-sm">Award Winning</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-base-content">18K</h3>
                    <p className="text-base-content opacity-60 text-sm">Property Ready</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-base-content">23M</h3>
                    <p className="text-base-content opacity-60 text-sm">Happy Customer</p>
                </div>
            </div>
        </div>


    );
};

export default WhyUs;
