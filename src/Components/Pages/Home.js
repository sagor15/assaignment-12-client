import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Bussness from './Bussness';
import ContactUs from './ContactUs';
import MakeAuto from './MakeAuto';
import Review from './Review';
import Tools from './Tools';



const Home = () => {
    return (
        <section  >
            <Banner></Banner>
            <Tools></Tools>
            <Bussness></Bussness>
            <MakeAuto></MakeAuto>
            <Review></Review>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </section>
    );
};

export default Home;