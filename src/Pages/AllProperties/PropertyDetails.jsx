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
            <div className=" mx-auto px-4 lg:px-0 py-10">
                <img
                    src={property.image}
                    alt={property.property_name}
                    className="w-full h-[66vh] object-cover rounded-lg shadow"
                />

                <div className="mt-6 space-y-3">
                    <h1 className="text-3xl font-bold text-gray-800">
                        {property.property_name}
                        <sup className="text-sm animate-bounce badge bg-primary"> {property.category}</sup>
                    </h1>
                    <p className="text-gray-600 text-sm flex items-center gap-2">
                        <FaLocationDot /> {property.location}
                    </p>
                    <p className="text-lg font-semibold text-yellow-600">
                        ${property.price}
                    </p>

                    <p className="text-gray-700 mt-4">{property.description}</p>

                    <p className="text-gray-600 mt-3"> <span className="font-medium text-gray-700">Property owner mail: </span> {property.user_email}</p>
                    <p className="text-gray-600 mt-3">
                        <span className="font-medium text-gray-700">Property owner:</span>{" "}
                        {property.user_name}
                    </p>
                </div>

                <div className="mt-6">
                    <Link
                        to="/allproperties"
                        className="btn bg-yellow-500 hover:bg-yellow-600 text-white"
                    >
                        Back to All Properties
                    </Link>
                </div>
            </div>
        </Container>


    );
};

export default PropertyDetails;
