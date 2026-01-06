import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PostedProperties = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_LINK}/lists`)
            .then(res => setData(res.data)).catch(err => console.error(err));
    }, []);

    return (
        <div className=" px-4.5  mx-auto  py-4.5 text-base-content">

            {/* ===== Desktop Table ===== */}
            <div className="hidden md:block overflow-x-auto">
                <table className="table w-full ">
                     <thead className="bg-base-200 text-base-content">
                        <tr>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Posted By</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((property, i) => (
                             <tr key={property._id} className="hover:bg-base-200 border-b border-base-300">
                                <td>{i + 1}</td>
                                <td>
                                    <img
                                        src={property.image}
                                        alt={property.property_name}
                                        className="w-16 h-12 object-cover rounded border border-base-300"
                                    />
                                </td>
                                <td className="font-semibold">{property.property_name}</td>
                                <td>{property.category}</td>
                                <td>{property.location}</td>
                                 <td className="text-primary font-semibold">
                                    ৳ {property.price}
                                </td>
                                <td>{property.user_name}</td>
                                 <td className="text-sm opacity-70">
                                    {new Date(property.posted_date).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ===== Mobile Cards ===== */}
            <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4.5">
                {data.map((property, i) => (
                     <div
                        key={property._id}
                        className="bg-base-100 border border-base-300 hover:shadow-lg relative rounded-lg p-4 shadow-sm"
                    >
                         <div className='badge bg-primary/10 backdrop-blur-sm absolute top-4 rounded-sm left-4 border-none text-primary '>
                            {i + 1}
                        </div>

                        <img
                            src={property.image}
                            alt={property.property_name}
                            className="w-full h-40 object-cover rounded mb-3 border border-base-300"
                        />

                        <h3 className="text-lg font-bold text-base-content">
                            {property.property_name}
                        </h3>

                        {/* Changed text-gray-600 to opacity-80 */}
                        <p className="text-sm opacity-80">
                            {property.location}
                        </p>

                        <div className="flex justify-between mt-2 text-sm">
                            <span className="font-medium">{property.category}</span>
                             <span className="text-primary font-bold">
                                ৳ {property.price}
                            </span>
                        </div>

                         <div className="mt-2 text-xs opacity-70">
                            Posted by {property.user_name}
                        </div>

                        <div className="text-xs opacity-50">
                            {new Date(property.posted_date).toLocaleDateString()}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PostedProperties;