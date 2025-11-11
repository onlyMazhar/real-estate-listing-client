import React from 'react';
import Banner from '../Components/Banner';
import WhyUs from '../Components/WhyUs';
import Testimonials from '../Components/Testimonials';
import InquiryForm from '../Components/InquiryForm';

const Home = () => {
    return (
        <div>
            <Banner/>
            <WhyUs/>
            <Testimonials/>
            <InquiryForm/>
        </div>
    );
};

export default Home;