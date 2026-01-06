import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import Container from "./Container";

const faqs = [
    {
        question: "How do I list my property on HomeNest?",
        answer:
            "Create an account, go to Add Property, fill in the required details, and publish your listing instantly.",
    },
    {
        question: "Is HomeNest free to use?",
        answer:
            "Yes. Browsing properties and listing your own properties are completely free.",
    },
    {
        question: "How can I contact a property owner?",
        answer:
            "Each property details page shows the owner’s contact information so you can reach out directly.",
    },
    {
        question: "Can I update or delete my property?",
        answer:
            "Yes. You can manage all your listings from the My Properties page.",
    },
    {
        question: "Are listings verified?",
        answer:
            "We review listings regularly, but users should always verify details directly with the owner.",
    },
    {
        question: "Can I give ratings and reviews?",
        answer:
            "Yes. Logged-in users can rate properties and leave short reviews.",
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0); // auto-open first

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (

        <div className="py-20 px-4 lg:px-0">
            {/* Header */}
            <div className="text-center mb-14">
                 <h2 className="text-4xl font-extrabold text-base-content mb-4">
                    Frequently Asked Questions
                </h2>
                 <p className="text-base-content opacity-70 max-w-2xl mx-auto">
                    Everything you need to know about using HomeNest.
                </p>
            </div>

            {/* FAQ Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-6">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-base-300 rounded-xl overflow-hidden bg-base-100 transition"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-base-content hover:bg-base-200 transition"
                        >
                            <div className="flex items-center gap-3">
                                <HelpCircle className="text-primary" size={22} />
                                {faq.question}
                            </div>

                            <ChevronDown
                                size={20}
                                className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Animated Answer */}
                        <div
                            className={`grid transition-all duration-300 ease-in-out ${activeIndex === index
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <div className="overflow-hidden px-6 pb-5 text-base-content opacity-70 text-sm leading-relaxed">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default FAQ;
