import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Bussness from './Bussness';
import ContactUs from './ContactUs';
import MakeAuto from './MakeAuto';
import Tools from './Tools';



const Home = () => {
    return (
        <section  >
            <Banner></Banner>
            <Tools></Tools>
            <Bussness></Bussness>
            <MakeAuto></MakeAuto>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </section>
    );
};

export default Home;