import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Container from "../Components/Container";
import { Link } from "react-router-dom";
import { Trash, Info, SquarePen } from 'lucide-react';
import Swal from "sweetalert2";
import MyPropertiesSkeleton from "./MyPropertiesSkeleton";


const MyProperties = () => {
    const { user } = useContext(AuthContext);
    const [myProperties, setMyProperties] = useState([]);
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        setPageLoading(true);

        fetch(`https://real-estate-listing-server.vercel.app/myProperties?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyProperties(data);
                setPageLoading(false);
            })
            .catch((err) => {
                console.error("Error loading properties:", err);
                setPageLoading(false);
            });
    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This property will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://real-estate-listing-server.vercel.app/lists/${id}`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" }
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.success && data.result.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your property has been removed.", "success");
                            setMyProperties((prev) => prev.filter((p) => p._id !== id));
                        }
                    });
            }
        });
    };

    return (
        <Container>
            <div className="pt-24">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    My Property Listings
                </h2>

                {/* ================= LOADING STATE ================= */}
                {pageLoading && <MyPropertiesSkeleton/>}

                {/* ================= EMPTY STATE ================= */}
                {!pageLoading && myProperties.length === 0 && (
                    <p className="text-center text-gray-500">
                        You haven’t posted any properties yet.
                    </p>
                )}

                {/* ================= DESKTOP TABLE ================= */}
                {!pageLoading && myProperties.length > 0 && (
                    <>
                        <div className="hidden lg:block overflow-x-auto">
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
                                        <tr key={property._id} className="border-t hover:bg-gray-50">
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
                                                <Link title="Update Info" to={`/update/${property._id}`}>
                                                    <SquarePen className="text-yellow-500 hover:text-yellow-600" size={18} />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(property._id)}
                                                    title="Delete Property"
                                                >
                                                    <Trash
                                                        className="text-red-500 cursor-pointer hover:text-red-60  "
                                                        size={18} />
                                                </button>
                                                <Link title="Details" to={`/allproperties/${property._id}`}>
                                                    <Info className="text-yellow-500 hover:text-yellow-600" size={20} />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* ================= MOBILE CARDS ================= */}
                        <div className="lg:hidden   grid grid-cols-1 md:grid-cols-2 gap-6">
                            {myProperties.map((property) => (
                                <div
                                    key={property._id}
                                    className="border border-gray-200 bg-white rounded-md p-4"
                                >
                                    <h3 className="font-semibold text-gray-800">
                                        {property.property_name}
                                    </h3>
                                    <p className="text-sm">Category: {property.category}</p>
                                    <p className="text-sm text-yellow-600 font-semibold">
                                        Price: ${property.price}
                                    </p>
                                    <p className="text-sm">Location: {property.location}</p>
                                    <p className="text-sm">
                                        Posted: {new Date(property.posted_date).toLocaleDateString()}
                                    </p>

                                    <div className="flex gap-2 mt-3">
                                        <Link title="Update Info" to={`/update/${property._id}`}>
                                            <SquarePen className="text-yellow-500 hover:text-yellow-600" size={18} />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(property._id)}
                                            title="Delete Property"
                                        >
                                            <Trash
                                                className="text-red-500 cursor-pointer hover:text-red-60  "
                                                size={18} />
                                        </button>
                                        <Link title="Details" to={`/allproperties/${property._id}`}>
                                            <Info className="text-yellow-500 hover:text-yellow-600" size={20} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </Container>
    );
};

export default MyProperties;
