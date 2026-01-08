import React from 'react';
import Container from './Container';
import AllPropertiesCard from '../Pages/AllProperties/AllPropertiesCard';
import { Link } from 'react-router';
import { MdOutlineArrowOutward } from 'react-icons/md';
import PropertiesByCategory from './PropertiesByCategory';

const Latest = ({ data }) => {
    console.log(data)
    return (
        <>
            <PropertiesByCategory />
            <div className='py-10'>
                <div className="pb-4 pt-1 flex justify-between items-center px-4 md:px-0">
                    <div className='text-left'>
                        {/* Changed text-gray-800 to text-base-content */}
                        <h1 className="text-xl md:text-3xl font-bold text-base-content">Featured Properties</h1>
                        {/* Changed text-gray-500 to opacity-70 text-base-content */}
                        <p className="opacity-70 text-base-content text-sm mt-2">
                            Latest property list you may like.
                        </p>
                    </div>
                    <div>
                        {/* Changed text-gray-800 to text-base-content and hover to primary color */}
                        <Link to="/allproperties" className="text-base-content font-semibold flex text-sm items-center gap-1 hover:text-primary transition">
                            See All <MdOutlineArrowOutward />
                        </Link>
                    </div>
                </div>
                <div className='px-4 md:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                    {
                        data.map(list => <AllPropertiesCard key={list._id} list={list} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Latest;