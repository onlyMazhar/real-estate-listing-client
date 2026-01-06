import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router';

const AllPropertiesCard = ({ list }) => {
    // console.log(list)
    const { property_name, image, location, category,
        // user_name, 
        price, _id } = list;


    return (
        <Link to={`/allproperties/${_id}`}>

            <div className="  w-full relavent rounded-md hover:scale-103 transition-transform duration-400  h-full flex flex-col justify-between  max-w-sm mx-auto ">
                <p className=" absolute ml-2 mt-2 badge   rounded-md text-sm capetalize">{category}</p>
                 <img
                    src={image}
                    alt={property_name}
                    className="w-full rounded-md h-56 object-cover mb-2"
                />
                <div>
                     <h3 className="text-xl font-semibold text-base-content">{property_name}</h3>
                </div>

                <div className='flex gap-3'>
                     <p className="text-primary font-bold text-[.75rem]">${price}</p>

                     <p className="text-base-content opacity-70 text-[.75rem] flex items-center gap-1">
                        <FaLocationDot /> {location}
                    </p>
                </div>
            </div>
        </Link>

    );
};

export default AllPropertiesCard;