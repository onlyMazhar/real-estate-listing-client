import React, { use } from 'react';
import Container from '../Components/Container';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const AddPropertie = () => {
    const { user } = use(AuthContext)
    const navigate = useNavigate();


    const propertySubmit = e => {
        e.preventDefault()

        const propertyData = {
            property_name: e.target.name.value,
            description: e.target.description.value,
            category: e.target.category.value,
            price: e.target.price.value,
            location: e.target.location.value,
            image: e.target.image.value,
            user_email: user.email,
            user_name: user.displayName,
            posted_date: new Date()

        }
        fetch('http://localhost:3000/lists', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(propertyData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after adding data', data)
                Swal.fire({
                    title: "Property Details Added",
                    icon: "success",
                    draggable: true
                });
                navigate('/myproperties');
            })

        // console.log(propertyData)
        e.target.reset();

    }
    return (
        <Container>
            <div className="flex justify-center   items-center min-h-screen  p-6 sm:py-  px-4 pb-14">
                <div className="w-full max-w-2xl sm:p-8 border-2 rounded-sm border-primary">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">Add a New Property</h1>
                        <p className="text-gray-500 text-sm mt-2">
                            Fill in the details below to list your property.
                        </p>
                    </div>

                    <form onSubmit={propertySubmit} className="space-y-6">
                        {/* Property Name */}
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700">Property Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter property name"
                                className="input input-bordered w-full bg-gray-50 border-gray-300"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700">Description</label>
                            <textarea
                                name="description"
                                placeholder="Write a short description..."
                                rows="3"
                                className="textarea textarea-bordered w-full bg-gray-50 border-gray-300"
                                required
                            ></textarea>
                        </div>

                        {/* Category & Price */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="form-control flex-1">
                                <label className="label font-semibold text-gray-700">Category</label>
                                <select
                                    name="category"
                                    className="select select-bordered w-full bg-gray-50 border-gray-300"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled>
                                        — Select Category —
                                    </option>
                                    <option>Rent</option>
                                    <option>Sale</option>
                                    <option>Commercial</option>
                                    <option>Land</option>
                                </select>
                            </div>

                            <div className="form-control flex-1">
                                <label className="label font-semibold text-gray-700">Price ($)</label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Enter price"
                                    className="input input-bordered w-full bg-gray-50 border-gray-300"
                                    required
                                />
                            </div>
                        </div>

                        {/* Location */}
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700">Location</label>
                            <input
                                type="text"
                                name="location"
                                placeholder="City, Area, or Address"
                                className="input input-bordered w-full bg-gray-50 border-gray-300"
                                required
                            />
                        </div>

                        {/* Image Link */}
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700">Thumbnail Image Link</label>
                            <input
                                type="url"
                                name="image"
                                placeholder="Paste image URL"
                                className="input input-bordered w-full bg-gray-50 border-gray-300"
                                required
                            />
                        </div>

                        {/* User Info */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="form-control flex-1">
                                <label className="label font-semibold text-gray-700">User Name</label>
                                <input
                                    value={user.displayName || ""}
                                    type="text"
                                    name="userName"
                                    readOnly
                                    className="input input-bordered w-full bg-gray-100 border-gray-300 cursor-not-allowed"
                                />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label font-semibold text-gray-700">User Email</label>
                                <input
                                    type="email"
                                    name="userEmail"
                                    readOnly
                                    value={user.email}
                                    className="input input-bordered w-full bg-gray-100 border-gray-300 cursor-not-allowed"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                onSubmit={propertySubmit}
                                type="submit"
                                className="btn bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-full text-lg"
                            >
                                Add Property
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default AddPropertie;