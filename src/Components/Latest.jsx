import React from 'react';
import Container from './Container';
import AllPropertiesCard from '../Pages/AllProperties/AllPropertiesCard';
import { Link } from 'react-router';
import { MdOutlineArrowOutward } from 'react-icons/md';
import PropertiesByCategory from './PropertiesByCategory';

const Latest = ({ data }) => {
    console.log(data)
    return (
        <Container>
            <PropertiesByCategory />
            <div className="pb-4 flex justify-between items-center px-4">
                <div className='text-left'>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Latest Properties</h1>
                    <p className="text-gray-500 text-sm mt-2">
                        Latest property list you may like.
                    </p>
                </div>
                <div>
                    <Link to="/allproperties" className="text-gray-800 font-semibold flex items-center gap-1 hover:text-yellow-600 transition">
                        See All <MdOutlineArrowOutward />
                    </Link>
                </div>
            </div>
            <div className=' pb-10 md:pb-16 lg:pb-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
                {
                    data.map(list => <AllPropertiesCard key={list._id} list={list} />)
                }
            </div>
        </Container>
    );
};

export default Latest;