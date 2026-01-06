import React from "react";
import { useLoaderData, Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import Container from "../../Components/Container";

const PropertyDetails = () => {
    // const { id } = useParams();
    const data = useLoaderData();
    const property = data.result;
    // console.log(property)



    return (
        <Container>
            <div className=" mx-auto px-4 pt-16 lg:px-0 py-10">
                <img
                    src={property.image}
                    alt={property.property_name}
                    className="w-full h-[66vh] object-cover rounded-lg shadow"
                />

                <div className="mt-6 space-y-3">
                    {/* Changed text-gray-800 to text-base-content */}
                    <h1 className="text-3xl font-bold text-base-content">
                        {property.property_name}
                        {/* Added text-secondary to make badge text readable on yellow */}
                        <sup className="text-sm animate-bounce badge bg-primary border-none text-secondary"> {property.category}</sup>
                    </h1>
                    {/* Changed text-gray-600 to opacity-70 text-base-content */}
                    <p className="text-base-content opacity-70 text-sm flex items-center gap-2">
                        <FaLocationDot /> {property.location}
                    </p>
                    {/* Changed text-yellow-600 to text-primary */}
                    <p className="text-lg font-semibold text-primary">
                        ${property.price}
                    </p>

                    {/* Changed text-gray-700 to text-base-content */}
                    <p className="text-base-content mt-4 leading-relaxed">{property.description}</p>

                    {/* Updated labels and values to use theme-aware colors */}
                    <p className="text-base-content opacity-70 mt-3">
                        <span className="font-medium text-base-content">Property owner mail: </span> {property.user_email}
                    </p>
                    <p className="text-base-content opacity-70 mt-3">
                        <span className="font-medium text-base-content">Property owner:</span>{" "}
                        {property.user_name}
                    </p>
                </div>

                <div className="mt-6">
                    <Link
                        to="/allproperties"
                        /* Swapped bg-yellow-500 for bg-primary and text-white for text-secondary */
                        className="btn bg-primary hover:bg-yellow-500 border-none text-secondary font-bold"
                    >
                        Back to All Properties
                    </Link>
                </div>
            </div>
        </Container>


    );
};

export default PropertyDetails;
