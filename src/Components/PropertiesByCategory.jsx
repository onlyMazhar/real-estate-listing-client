import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const categories = [
    {
        name: "Rent",
        properties: 12,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    },
    {
        name: "Sale",
        properties: 8,
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800",
    },
    {
        name: "Commercial",
        properties: 5,
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
    },
    {
        name: "Land",
        properties: 4,
        image: "https://images.unsplash.com/photo-1509463536615-1ca163bcfb3f?q=80&w=1139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const PropertiesByCategory = () => {
    return (
        <div className="pt-20 px-4">
            <div className=" mx-auto">
                <div className="flex justify-between items-center    md:px-4">
                    <div>
                        <h2 className="text-xl md:text-3xl  font-bold text-gray-900 mb-2">
                            By Category
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Explore  based on property types
                        </p>
                    </div>
                    <Link to="/allproperties" className="text-gray-800 font-semibold flex items-center text-sm gap-1 hover:text-yellow-600 transition">
                        See All <MdOutlineArrowOutward />
                    </Link>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center pt-8 md:pt-12 pb-16 md:pb-20 md:px-12">
                    {categories.map((p) => (
                        <div key={p.name} className="flex flex-col xl:flex-row  items-center gap-4 bg-white rounded-xl p-4 hover:shadow-md transition cursor-pointer" >
                            <img
                                src={p.image}
                                alt={p.name}
                                className="w-32 h-32 rounded-lg object-cover mb-3"
                            />
                            <div className="text-center xl:text-left">
                                <h3 className="text-gray-900 font-semibold">{p.name}</h3>
                                <p className="text-gray-500 text-sm">
                                    {p.properties}{" "}
                                    {p.properties === 1 ? "Property" : "Properties"}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PropertiesByCategory;
