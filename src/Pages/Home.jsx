import React from 'react';
import Banner from '../Components/Banner';
import WhyUs from '../Components/WhyUs';
import Testimonials from '../Components/Testimonials';
import InquiryForm from '../Components/InquiryForm';
import Latest from '../Components/Latest';
import { useLoaderData } from 'react-router';
import Container from '../Components/Container';
import PopularLocations from '../Components/PopularLocations';
import HowItWorks from '../Components/HowItWorks';
import Statistics from '../Components/Statistics';
import FAQ from '../Components/FAQ';

const Home = () => {
    const data = useLoaderData()
    // console.log(data)

    return (
        <div>
            <Banner />
            <Container>
                <Latest data={data} />
                <PopularLocations/>
                <WhyUs />
                <HowItWorks/>
                <Statistics/>
                <Testimonials />
                <FAQ/>
                <InquiryForm />
            </Container>

        </div>
    );
};

export default Home;