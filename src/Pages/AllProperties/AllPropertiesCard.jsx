import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router';

const AllPropertiesCard = ({ list }) => {
    // console.log(list)
    const { property_name, image, location, category, user_name, price, _id } = list;
    return (
        <div>
            <div className="bg-white h-full flex flex-col justify-between  hover:shadow-lg transition p-4 max-w-sm mx-auto">
                {/* Thumbnail */}
                <img
                    src={image}
                    alt={property_name}
                    className="w-full h-56 object-cover mb-4"
                />

                {/* Info */}
                <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-gray-800">{property_name}</h3>
                    <p className="text-gray-500 text-sm capitalize">{category}</p>
                    <p className="text-yellow-600 font-bold text-lg">${price}</p>
                    <p className="text-gray-500 text-sm flex items-center"> <FaLocationDot /> {location}</p>
                    <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium text-gray-700">Posted by:</span> {user_name}
                    </p>
                </div>

                {/* Button */}
                <Link to={`/allproperties/${_id}`}>
                    <button
                        className="btn mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2.5 rounded-lg font-medium transition"
                    >
                        See Details
                    </button></Link>
            </div>
        </div>
    );
};

export default AllPropertiesCard;