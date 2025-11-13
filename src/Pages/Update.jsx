import { use } from 'react';
import Container from '../Components/Container';
import { AuthContext } from '../Context/AuthContext';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Update = () => {
    const { user } = use(AuthContext)
    const data = useLoaderData();
    const property = data.result;
        const navigate = useNavigate();

    // console.log(property)
    // const handleUpdate = () = {
    // const handleUpdate = e => {
    //     e.preventDefault()

    //     const propertyData = {
    //         property_name: e.target.name.value,
    //         description: e.target.description.value,
    //         category: e.target.category.value,
    //         price: e.target.price.value,
    //         location: e.target.location.value,
    //         image: e.target.image.value,
   
    //     }
    //     fetch(`http://localhost:3000/lists/${property._id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //         body: JSON.stringify(propertyData)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('after adding data', data)
    //         })

    //     // console.log(propertyData)
    //     e.target.reset();
    //     Swal.fire({
    //         title: "Details Updated",
    //         icon: "success",
    //         draggable: true
    //     });
    // }
    const handleUpdate = e => {
        e.preventDefault();

        const propertyData = {
            property_name: e.target.name.value,
            description: e.target.description.value,
            category: e.target.category.value,
            price: e.target.price.value,
            location: e.target.location.value,
            image: e.target.image.value,
        };

        fetch(`http://localhost:3000/lists/${property._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(propertyData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after updating', data);
                Swal.fire({
                    title: "Details Updated",
                    icon: "success",
                    draggable: true
                });
                navigate('/myproperties');
            })
            .catch(err => console.error(err));
        }
    // }
    return (
        <Container>
            <div className='py-12 px-4'>
                <div className='w-full max-w-2xl p-4 sm:p-8  border-2 rounded-sm border-primary mx-auto '>
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">Update Property Info</h1>
                        <p className="text-gray-500 text-sm mt-2">
                            Fill in new details of your property.
                        </p>
                    </div>
                    <form onSubmit={handleUpdate} className="space-y-6">
                        {/* Property Name */}
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700">Property Name</label>
                            <input
                                defaultValue={property.property_name}
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
                                defaultValue={property.description}
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
                                    <option defaultValue={property.category} disabled>
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
                                    defaultValue={property.price}
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
                                defaultValue={property.location}
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
                                defaultValue={property.image}
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
                                    value={user.displayName || "User Name"}
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
                                // onSubmit={propertySubmit}
                                type="submit"
                                className="btn bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-full text-lg"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Update;