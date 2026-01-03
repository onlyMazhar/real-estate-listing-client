import React from 'react';

const MyPropertiesSkeleton = () => (
    <div className="pt-10 animate-pulse">
        <h2 className="h-8 w-1/3 bg-gray-300 rounded mx-auto mb-8"></h2>

        {/* Desktop table skeleton */}
        <div className="hidden md:block border rounded">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="grid grid-cols-6 gap-4 p-4 border-b">
                    {[...Array(6)].map((_, j) => (
                        <div key={j} className="h-4 bg-gray-300 rounded"></div>
                    ))}
                </div>
            ))}
        </div>

        {/* Mobile card skeleton */}
        <div className="md:hidden space-y-4">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="border p-4 rounded">
                    <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                </div>
            ))}
        </div>
    </div>
);

export default MyPropertiesSkeleton;
