import React from 'react';
import Container from '../../Components/Container';
import { useLoaderData } from 'react-router';
import AllPropertiesCard from './AllPropertiesCard';

const AllProperties = () => {
    const allList = useLoaderData()
    return (
        <Container>
            <div className='text-center pt-15 px-4 md:max-w-1/3 mx-auto'>
                <h3 className='text-3xl font-bold text-gray-800'>
                    Explore Our Latest Properties
                </h3>
                <p className='text-gray-500 mt-2 text-sm'>
                    Discover handpicked homes, apartments, and villas that match your lifestyle and budget — all verified and ready for you.
                </p>
            </div>
            <div>
                
            </div>
            <div className=' py-10 md:py-16 lg:py-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4'>
                {
                    allList.map(list => <AllPropertiesCard key={list._id} list={list} />)
                }
            </div>
        </Container>
    );
};

export default AllProperties;