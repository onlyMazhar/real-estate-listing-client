import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Container from "../Components/Container";
import { Link } from "react-router-dom";

const MyProperties = () => {
    const { user, setLoading } = useContext(AuthContext);
    const [myProperties, setMyProperties] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:3000/myProperties?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyProperties(data);
                setLoading(false)
            })
            .catch((err) => console.error("Error loading properties:", err));

    }, [user, setLoading]);

    return (
        <Container>
            <div className="pt-10">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    My Property Listings
                </h2>

                {myProperties.length === 0 ? (
                    <p className="text-center text-gray-500">
                        You haven’t posted any properties yet.
                    </p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table w-full border border-gray-200 shadow-sm">
                            <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                    <th className="p-3 text-left">Property Name</th>
                                    <th className="p-3 text-left">Category</th>
                                    <th className="p-3 text-left">Price</th>
                                    <th className="p-3 text-left">Location</th>
                                    <th className="p-3 text-left">Posted Date</th>
                                    <th className="p-3 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myProperties.map((property) => (
                                    <tr
                                        key={property._id}
                                        className="border-t hover:bg-gray-50 transition"
                                    >
                                        <td className="p-3 font-medium text-gray-800">
                                            {property.property_name}
                                        </td>
                                        <td className="p-3">{property.category}</td>
                                        <td className="p-3 text-yellow-600 font-semibold">
                                            ${property.price}
                                        </td>
                                        <td className="p-3">{property.location}</td>
                                        <td className="p-3">
                                            {new Date(property.posted_date).toLocaleDateString()}
                                        </td>
                                        <td className="p-3 flex justify-center gap-2">
                                            <Link to={`/update/${property._id}`}>
                                                <button className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                                                    Update
                                                </button>
                                            </Link>
                                            <button className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                                                Delete
                                            </button>
                                            <Link to={`/allproperties/${property._id}`}>
                                                <button className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                                                    View Details
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default MyProperties;
