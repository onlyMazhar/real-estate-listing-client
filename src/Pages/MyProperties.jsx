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

        fetch(`https://localhost:3000/myProperties?email=${user.email}`)
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
                fetch(`https://localhost:3000/lists/${id}`, {
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
                {/* Swapped gray-800 for base-content */}
                <h2 className="text-3xl font-bold text-base-content text-center mb-8">
                    My Property Listings
                </h2>

                {/* ================= LOADING STATE ================= */}
                {pageLoading && <MyPropertiesSkeleton />}

                {/* ================= EMPTY STATE ================= */}
                {!pageLoading && myProperties.length === 0 && (
                    <p className="text-center text-base-content opacity-60">
                        You haven’t posted any properties yet.
                    </p>
                )}

                {/* ================= DESKTOP TABLE ================= */}
                {!pageLoading && myProperties.length > 0 && (
                    <>
                        <div className="hidden lg:block overflow-x-auto">
                            {/* Changed border-gray-200 to border-base-300 */}
                            <table className="table w-full border border-base-300 shadow-sm">
                                {/* Changed bg-gray-100 to bg-base-200 and text-gray-700 to base-content */}
                                <thead className="bg-base-200 text-base-content">
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
                                        /* Changed border-t to border-base-200 and hover:bg-gray-50 to hover:bg-base-200/50 */
                                        <tr key={property._id} className="border-t border-base-200 hover:bg-base-200/50 transition-colors">
                                            <td className="p-3 font-medium text-base-content">
                                                {property.property_name}
                                            </td>
                                            <td className="p-3 text-base-content opacity-80">{property.category}</td>
                                            {/* Changed yellow-600 to text-primary */}
                                            <td className="p-3 text-primary font-semibold">
                                                ${property.price}
                                            </td>
                                            <td className="p-3 text-base-content opacity-80">{property.location}</td>
                                            <td className="p-3 text-base-content opacity-80">
                                                {new Date(property.posted_date).toLocaleDateString()}
                                            </td>
                                            <td className="p-3 flex justify-center gap-4">
                                                <Link title="Update Info" to={`/update/${property._id}`}>
                                                    <SquarePen className="text-primary hover:scale-110 transition-transform" size={18} />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(property._id)}
                                                    title="Delete Property"
                                                >
                                                    <Trash
                                                        className="text-error cursor-pointer hover:scale-110 transition-transform"
                                                        size={18} />
                                                </button>
                                                <Link title="Details" to={`/allproperties/${property._id}`}>
                                                    <Info className="text-info hover:scale-110 transition-transform" size={20} />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* ================= MOBILE CARDS ================= */}
                        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
                            {myProperties.map((property) => (
                                <div
                                    key={property._id}
                                    /* Swapped bg-white for bg-base-100 and border-gray-200 for border-base-300 */
                                    className="border border-base-300 bg-base-100 rounded-md p-4 shadow-sm"
                                >
                                    <h3 className="font-semibold text-base-content">
                                        {property.property_name}
                                    </h3>
                                    <p className="text-sm text-base-content opacity-70">Category: {property.category}</p>
                                    <p className="text-sm text-primary font-semibold">
                                        Price: ${property.price}
                                    </p>
                                    <p className="text-sm text-base-content opacity-70">Location: {property.location}</p>
                                    <p className="text-sm text-base-content opacity-70">
                                        Posted: {new Date(property.posted_date).toLocaleDateString()}
                                    </p>

                                    <div className="flex gap-4 mt-4 pt-3 border-t border-base-200">
                                        <Link title="Update Info" to={`/update/${property._id}`}>
                                            <SquarePen className="text-primary" size={20} />
                                        </Link>
                                        <button onClick={() => handleDelete(property._id)}>
                                            <Trash className="text-error" size={20} />
                                        </button>
                                        <Link title="Details" to={`/allproperties/${property._id}`}>
                                            <Info className="text-info" size={22} />
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
