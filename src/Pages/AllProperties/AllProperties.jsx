import React, { useState } from 'react';
import Container from '../../Components/Container';
import { useLoaderData } from 'react-router';
import AllPropertiesCard from './AllPropertiesCard';

const AllProperties = () => {
    const data = useLoaderData()
    const [property, setProperty] = useState(data)


    const handleSearch = (e) => {
        e.preventDefault()
        const search_text = e.target.search.value
        console.log(search_text)

        fetch(`https://real-estate-listing-server.vercel.app/search?search=${search_text}`)
            .then(res => res.json())
            .then(data => {
                setProperty(data)
            })

    }
    return (
        <Container>
            <div className='text-center pt-24  top-16 px-4 xl:max-w-2/5 md:max-w-4/5 max-w-5/5 mx-auto'>
                <h3 className='text-3xl font-bold text-gray-800'>
                    Explore Our Latest Properties
                </h3>
                <p className='text-gray-500 mt-2 text-sm'>
                    Discover handpicked homes, apartments, and villas that match your lifestyle and budget — all verified and ready for you.
                </p>
            </div>
            <form onSubmit={handleSearch} className='py-10 text-right px-4 md:px-0 flex  justify-end'>
                <label className="input border border-primary">
                    <svg className="h-[1em] opacity-50 text-primary " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" name='search' required placeholder="Search" />
                </label>
                <button className='btn btn-primary ml-2 text-white'>Search</button>

            </form >
            <div className=' pb-10 md:pb-16 lg:pb-20  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-0'>
                {
                    property.map(list => <AllPropertiesCard key={list._id} list={list} />)
                }
            </div>
        </Container>
    );
};

export default AllProperties;