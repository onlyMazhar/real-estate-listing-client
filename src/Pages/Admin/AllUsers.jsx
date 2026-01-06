import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';

const AllUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const auth = getAuth();
                const currentUser = auth.currentUser;

                if (!currentUser) return;

                const token = await currentUser.getIdToken();

                const res = await axios.get(
                    `${import.meta.env.VITE_API_LINK}/user`,
                    {
                        headers: {
                            authorization: `Bearer ${token}`,
                        },
                    }
                );

                setUsers(res.data);
            } catch (err) {
                console.error("Unauthorized or failed request", err);
            }
        };

        fetchUsers();
    }, []);
    console.table(users)
    return (

        <div className=" min-h-[99vh] mx-auto pl-4.5 pr-13 py-8 text-base-content">
            {/* ===== Desktop Table ===== */}
            <div className="hidden md:block overflow-x-auto">

                <table className="table w-full ">
                    {/* Changed bg-gray-100 to bg-base-200 */}
                    <thead className="bg-base-200 text-base-content">
                        <tr>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Registered </th>
                            <th>Last Login</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user, i) => (
                            /* Changed hover:bg-gray-50 to hover:bg-base-200 */
                            <tr key={user._id} className="hover:bg-base-200 border-b border-base-300">
                                <td>{i + 1}</td>
                                <td>
                                    <img
                                        src={user.image}
                                        alt={user.name}
                                        className="w-16 h-12 object-cover rounded border border-base-300"
                                    />
                                </td>
                                <td className="font-semibold flex flex-col">
                                    {user.name}
                                    {/* Changed text-gray-400 to opacity-60 */}
                                    <small className='text-[.75rem] opacity-60'>{user.email}</small>
                                </td>
                                {/* Changed text-yellow-600 to text-primary */}
                                <td className="text-primary font-semibold">{user.role}</td>
                                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                <td>{new Date(user.last_loggedIn).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ===== Mobile Cards ===== */}
            <div className="md:hidden grid gap-6 grid-cols-1 sm:grid-cols-2  min-h-[95vh]">
                {users.map((user, i) => (
                    <div
                        key={user._id}
                        /* Changed bg-white to bg-base-100 and added border-base-300 */
                        className="flex gap-4 relative rounded-md p-4 h-46 items-center bg-base-100 border border-base-300 hover:shadow-md transition"
                    >
                        <div className='badge absolute top-2 rounded-sm left-2 border-secondary bg-secondary text-secondary-content'>{i + 1}</div>

                        {/* User Image */}
                        <img
                            src={user.image}
                            alt={user.name}
                            className="w-20 h-20 rounded-full object-cover border border-base-300"
                        />

                        {/* User Info */}
                        <div className="flex-1">
                            {/* Changed text-gray-900 to text-base-content */}
                            <h3 className="text-lg font-semibold text-base-content">
                                {user.name}
                            </h3>

                            {/* Changed text-yellow-600 to text-primary */}
                            <p className="text-sm font-medium text-primary capitalize">
                                {user.role}
                            </p>

                            {/* Changed text-gray-500 to opacity-70 */}
                            <div className="mt-2 text-xs opacity-70 space-y-1 text-base-content">
                                <p>
                                    Registered on{" "}
                                    {new Date(user.createdAt).toLocaleDateString()}
                                </p>
                                <p>
                                    Last login{" "}
                                    {new Date(user.last_loggedIn).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    );
};

export default AllUsers;