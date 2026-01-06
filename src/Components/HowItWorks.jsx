import React from "react";
import { Search, Home, PhoneCall, CheckCircle } from "lucide-react";

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            icon: <Search />,
            title: "Browse Properties",
            desc: "Search from verified rent, sale, land, and commercial listings.",
        },
        {
            id: 2,
            icon: <Home />,
            title: "View Details",
            desc: "Check price, location, images, and full property information.",
        },
        {
            id: 3,
            icon: <PhoneCall />,
            title: "Contact Owner",
            desc: "Directly connect with the property owner or agent.",
        },
        {
            id: 4,
            icon: <CheckCircle />,
            title: "Close the Deal",
            desc: "Finalize your rent or purchase with confidence.",
        },
    ];

    return (
        <div className="py-20 overflow-hidden">
            <div className=" mx-auto px-4 lg:px-0">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Changed text-slate-900 to text-base-content */}
                    <h2 className="text-4xl font-black text-base-content mb-4">
                        How It Works
                    </h2>
                    {/* Changed text-slate-500 to opacity-70 text-base-content */}
                    <p className="text-base-content opacity-70">
                        Finding the right property is simple and hassle-free.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative flex flex-col md:flex-row justify-between items-start gap-8">
                    {/* Connector Line (Desktop Only) */}
                    {/* Changed bg-slate-100 to bg-base-300 and bg-yellow-500 to bg-primary */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-base-300 z-0">
                        <div className="h-full bg-primary animate-pulse"></div>
                    </div>

                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="relative z-10 flex flex-col items-center text-center group w-full"
                        >
                            {/* Icon */}
                            {/* Changed border-slate-100 to border-base-300, text-yellow-500 to text-primary, and shadow-slate to shadow-black/20 */}
                            <div className="w-24 h-24 rounded-3xl border-2 border-base-300 flex items-center justify-center bg-secondary text-primary mb-6 group-hover:bg-primary group-hover:text-secondary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-black/10">
                                {React.cloneElement(step.icon, { size: 38 })}
                            </div>

                            {/* Step Number */}
                            {/* Kept bg-secondary and text-white as they work well in both themes */}
                            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4 shadow-lg">
                                {step.id}
                            </div>

                            {/* Text */}
                            {/* Changed text color to text-base-content */}
                            <h3 className="text-xl font-bold mb-2 text-base-content">
                                {step.title}
                            </h3>
                            {/* Changed text-slate-500 to opacity-70 text-base-content */}
                            <p className="text-base-content opacity-70 text-sm px-4 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
