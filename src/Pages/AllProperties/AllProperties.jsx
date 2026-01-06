import React, { useState, useEffect } from 'react';
import Container from '../../Components/Container';
import { useLoaderData } from 'react-router';
import AllPropertiesCard from './AllPropertiesCard';

const AllProperties = () => {
    const data = useLoaderData();

    const [allProperties, setAllProperties] = useState(data);
    const [properties, setProperties] = useState(data);
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        setAllProperties(data);
        setProperties(data);
    }, [data]);

    // ===== SEARCH =====
    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value.trim();

        if (!searchText) {
            setProperties(allProperties);
            return;
        }

        fetch(`${import.meta.env.VITE_API_LINK}/search?search=${searchText}`)
            .then(res => res.json())
            .then(result => {
                setProperties(result);
            })
            .catch(err => console.error("Search Error:", err));
    };

    // ===== SORT =====
    const handleSort = (value) => {
        setSortBy(value);

        let sorted = [...properties];

        if (value === "price-asc") {
            sorted.sort((a, b) => a.price - b.price);
        }
        if (value === "price-desc") {
            sorted.sort((a, b) => b.price - a.price);
        }
        if (value === "latest") {
            sorted.sort(
                (a, b) => new Date(b.posted_date || b.created_at) - new Date(a.posted_date || a.created_at)
            );
        }

        setProperties(sorted);
    };

    return (
        <Container>
            {/* ===== HEADER ===== */}
            <div className="text-center pt-24 px-4 max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-base-content">
                    Explore Our Latest Properties
                </h3>
                <p className="opacity-70 mt-2 text-sm">
                    Discover handpicked homes, apartments, and villas.
                </p>
            </div>

            {/* ===== SEARCH + SORT ===== */}
            <div className="flex flex-col md:flex-row gap-4 justify-end py-10 px-4 md:px-0">
                <select
                    value={sortBy}
                    onChange={(e) => handleSort(e.target.value)}
                    className="select w-42 select-bordered border-primary"
                >
                    <option value="">Sort By</option>
                    <option value="latest">Latest</option>
                    <option value="price-asc">Price: Low → High</option>
                    <option value="price-desc">Price: High → Low</option>
                </select>
                <form onSubmit={handleSearch} className="flex ">
                    <input
                        type="search"
                        name="search"
                        placeholder="Search by location or title..."
                        className="input input-bordered rounded-r-none border-primary"
                    />
                    <button className="btn btn-primary rounded-l-none text-secondary font-bold">
                        Search
                    </button>
                </form>


            </div>

            {/* ===== LIST ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-0 pb-20">
                {properties.length > 0 ? (
                    properties.map(list => (
                        <AllPropertiesCard key={list._id} list={list} />
                    ))
                ) : (
                    <div className="col-span-full text-center opacity-50">
                        No properties found.
                    </div>
                )}
            </div>
        </Container>
    );
};

export default AllProperties;
