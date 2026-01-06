import React from "react";
import { Home, Users, Building2, Star } from "lucide-react";

const Statistics = () => {
    const stats = [
        {
            id: 1,
            icon: <Home />,
            value: "1,200+",
            label: "Total Properties",
        },
        {
            id: 2,
            icon: <Users />,
            value: "800+",
            label: "Happy Clients",
        },
        {
            id: 3,
            icon: <Building2 />,
            value: "150+",
            label: "Verified Agents",
        },
        {
            id: 4,
            icon: <Star />,
            value: "4.8 / 5",
            label: "Average Rating",
        },
    ];

    return (
        <div className="py-20">
            <div className=" mx-auto px-4 lg:px-0">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl text-base-content font-black mb-4">
                        Trusted by Thousands
                    </h2>
                    <p className="text-base-content opacity-70">
                        Numbers that show our growth and reliability
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="group bg-base-200 border border-base-300 rounded-md p-8 text-center hover:border-primary hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition">
                                {React.cloneElement(stat.icon, { size: 32 })}
                            </div>

                            <h3 className="text-4xl font-extrabold mb-2 text-base-content">
                                {stat.value}
                            </h3>
                            <p className="text-base-content opacity-60 text-sm uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Statistics;
