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
        <Container>
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            People Love Living with HomeNest
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Real stories from people who found their perfect home through us.
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {testimonials.map((t, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h4 className="font-semibold text-lg mb-2 text-gray-900">
                                    {t.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    “{t.review}”
                                </p>

                                {/* Rating */}
                                <div className="flex text-[#FFAC12] mb-4">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>

                                {/* User Info */}
                                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <h5 className="font-semibold text-gray-900">{t.name}</h5>
                                        <p className="text-gray-500 text-sm">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Testimonials;
