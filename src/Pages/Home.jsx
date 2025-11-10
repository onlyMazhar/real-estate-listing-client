import React from 'react';
import Banner from '../Components/Banner';
import WhyUs from '../Components/WhyUs';
import Testimonials from '../Components/Testimonials';
import RealEstateInquiryForm from '../Components/RealEstateInquiryForm';

const Home = () => {
    return (
        <div>
            <Banner/>
            <WhyUs/>
            <Testimonials/>
            <RealEstateInquiryForm/>
        </div>
    );
};

export default Home;