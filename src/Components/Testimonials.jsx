import React from "react";
import { FaStar } from "react-icons/fa";
import user1 from "../assets/user1.jpg"; // Replace with your real images
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import Container from "./Container";

const testimonials = [
    {
        name: "Ali Tufan",
        role: "Marketing",
        review:
            "HomeNest made renting effortless. The process was quick, transparent, and the team was always available when I had questions.",
        rating: 5,
        image: user1,
        title: "Great Work",
    },
    {
        name: "Albert Flores",
        role: "Designer",
        review:
            "I found my dream apartment in just two days! The platform’s filters and map search made the experience seamless.",
        rating: 4,
        image: user2,
        title: "Good Job",
    },
    {
        name: "Robert Fox",
        role: "Developer",
        review:
            "The property listings are accurate and well-detailed. I love how easy it is to connect directly with owners.",
        rating: 5,
        image: user3,
        title: "Perfect",
    },
    {
        name: "Marvin McKinney",
        role: "Marketing",
        review:
            "Excellent support team and user-friendly interface. HomeNest helped me find the perfect place within my budget.",
        rating: 4,
        image: user4,
        title: "Work Hard",
    },
];

const Testimonials = () => {
    return (

        <div className="py-20">
            <div className=" mx-auto px-4 md:px-0">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold mb-4 text-base-content">
                        People Love Living with HomeNest
                    </h2>
                    <p className="text-base-content opacity-70 max-w-2xl mx-auto">
                        Real stories from people who found their perfect home through us.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-base-100 border border-base-200 p-6 rounded-md hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
                        >
                            <h4 className="font-semibold text-lg mb-2 text-base-content">
                                {t.title}
                            </h4>
                            <p className="text-base-content opacity-80 text-sm leading-relaxed mb-4">
                                “{t.review}”
                            </p>

                            <div className="flex text-primary mb-4">
                                {[...Array(t.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            <div className="flex items-center gap-3 border-t border-base-200 pt-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <h5 className="font-semibold text-base-content">{t.name}</h5>
                                    <p className="text-base-content opacity-60 text-sm">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Testimonials;
