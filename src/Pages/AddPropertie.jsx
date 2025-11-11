import React, { use } from 'react';
import Container from '../Components/Container';
import { AuthContext } from '../Context/AuthContext';

const AddPropertie = () => {
    const { user } = use(AuthContext)
    return (
        <Container>
            <div className="flex justify-center items-center min-h-screen  py-6 sm:py- px-4 pb-14">
                <div className="w-full max-w-2xl sm:p-2">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">Add a New Property</h1>
                        <p className="text-gray-500 text-sm mt-2">
                            Fill in the details below to list your property.
                        </p>
                    </div>

                    <form className="space-y-6">
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