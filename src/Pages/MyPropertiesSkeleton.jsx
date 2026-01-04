 
const MyPropertiesSkeleton = () => {
    return (
        <>
            {/* ===== Desktop Table Skeleton ===== */}
            <div className="hidden lg:block overflow-x-auto animate-pulse">
                <table className="table w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            {[...Array(6)].map((_, i) => (
                                <th key={i} className="p-3">
                                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(6)].map((_, row) => (
                            <tr key={row} className="border-t">
                                {[...Array(6)].map((_, col) => (
                                    <td key={col} className="p-3">
                                        <div className="h-4 bg-gray-300 rounded w-full"></div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ===== Mobile Card Skeleton ===== */}
            <div className="lg:hidden space-y-4 animate-pulse">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="border border-gray-200 rounded-md p-4 bg-white"
                    >
                        <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                        <div className="flex gap-3 mt-3">
                            <div className="h-5 w-5 bg-gray-300 rounded"></div>
                            <div className="h-5 w-5 bg-gray-300 rounded"></div>
                            <div className="h-5 w-5 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MyPropertiesSkeleton;

 
