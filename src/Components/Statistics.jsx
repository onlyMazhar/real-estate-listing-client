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
        <div className="py-20  text-white">
            <div className=" mx-auto px-4 lg:px-0">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl text-slate-900 font-black mb-4">
                        Trusted by Thousands
                    </h2>
                    <p className="text-slate-400">
                        Numbers that show our growth and reliability
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6   ">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="group bg-slate-800 border border-slate-700 rounded-md p-8 text-center hover:border-yellow-500 hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-500 group-hover:text-black transition">
                                {React.cloneElement(stat.icon, { size: 32 })}
                            </div>

                            {/* Number */}
                            <h3 className="text-4xl font-extrabold mb-2">
                                {stat.value}
                            </h3>

                            {/* Label */}
                            <p className="text-slate-400 text-sm uppercase tracking-wide">
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
