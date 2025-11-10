import React from "react";
import { FaKey, FaMoneyBillWave, FaBuilding } from "react-icons/fa";
import homeImg from "../assets/h34.jpg.svg"; // replace with your real image
import Container from "./Container";

const WhyUs = () => {
    return (
        <Container>  
            <div className="py-20 border border-red-400">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Side - Image */}
                <div className="relative">
                    <img
                        src={homeImg}
                        alt="Modern property"
                        className=" w-full object-cover"
                    />
                    <div className="absolute bottom-6 left-6 bg-white shadow-md px-5 py-3 rounded-xl flex items-center space-x-3">
                        <div className="bg-black text-white p-2 rounded-full">
                            <FaBuilding size={20} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Total Rent</p>
                            <h3 className="font-semibold text-gray-800">4,382 Unit</h3>
                        </div>
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            Why Choose Us
                        </h2>
                        <p className="text-gray-500 max-w-md text-justify">
                            We focus on transparency, trust, and technology to make property
                            management simple, secure, and rewarding. Our team ensures that
                            every client receives professional guidance and consistent support
                            in every step of their real estate journey.
                        </p>
                    </div>

                    {/* Services List */}
                    <div className="space-y-5">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#FFAC12]/10 p-3 rounded-full text-[#FFAC12]">
                                <FaBuilding size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">
                                    Property Management
                                </h4>
                                <p className="text-gray-500 text-sm">
                                    We handle everything — from tenant screening to maintenance —
                                    ensuring your properties stay profitable and stress-free.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-[#FFAC12]/10 p-3 rounded-full text-[#FFAC12]">
                                <FaKey size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">
                                    Mortgage Services
                                </h4>
                                <p className="text-gray-500 text-sm">
                                    Our experts connect you with the best mortgage plans that fit
                                    your financial goals, making ownership easier than ever.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-[#FFAC12]/10 p-3 rounded-full text-[#FFAC12]">
                                <FaMoneyBillWave size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">
                                    Currency Services
                                </h4>
                                <p className="text-gray-500 text-sm">
                                    We provide fast, secure, and multi-currency transactions so
                                    you can buy or rent properties globally with confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Stats */}
            <div className="max-w-5xl mx-auto mt-16 grid grid-cols-3 text-center">
                <div>
                    <h3 className="text-3xl font-bold text-gray-900">4M</h3>
                    <p className="text-gray-500 text-sm">Award Winning</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-gray-900">18K</h3>
                    <p className="text-gray-500 text-sm">Property Ready</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-gray-900">23M</h3>
                    <p className="text-gray-500 text-sm">Happy Customer</p>
                </div>
            </div>
        </div>

        </Container>
    );
};

export default WhyUs;
