import React from 'react';
import Banner from '../Components/Banner';
import WhyUs from '../Components/WhyUs';
import Testimonials from '../Components/Testimonials';
import InquiryForm from '../Components/InquiryForm';
import Latest from '../Components/Latest';
import { useLoaderData } from 'react-router';
import Container from '../Components/Container';

const Home = () => {
    const data = useLoaderData()
    // console.log(data)

    return (
        <div>
            <Banner />
            <Container>
                <Latest data={data} />
                <WhyUs />
                <Testimonials />
                <InquiryForm />
            </Container>

        </div>
    );
};

export default Home;