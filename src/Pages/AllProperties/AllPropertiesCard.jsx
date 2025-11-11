import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdLocationPin } from 'react-icons/md';

const AllPropertiesCard = ({ list }) => {
    console.log(list)
    const { name, image_link, location, category, posted_by, property_price } = list;
    return (
        <div>
            <div className="bg-white h-full flex flex-col justify-between  hover:shadow-lg transition p-4 max-w-sm mx-auto">
                {/* Thumbnail */}
                <img
                    src={image_link}
                    alt={name}
                    className="w-full h-56 object-cover mb-4"
                />

                {/* Info */}
                <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                    <p className="text-gray-500 text-sm capitalize">{category}</p>
                    <p className="text-yellow-600 font-bold text-lg">${property_price}</p>
                    <p className="text-gray-500 text-sm flex items-center"> <FaLocationDot /> {location}</p>
                    <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium text-gray-700">Posted by:</span> {posted_by}
                    </p>
                </div>

                {/* Button */}
                <button
                    className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2.5 rounded-lg font-medium transition"
                    onClick={() => alert(`Viewing details of ${name}`)}
                >
                    See Details
                </button>
            </div>
        </div>
    );
};

export default AllPropertiesCard;