import React from 'react';
import HomeTemplate from '../Templates/HomeTemplate/HomeTemplate';
import Services from '../views/Services/Services';
import Calculator from '../views/Calculator/Calculator';
import Contact from '../views/Contact/Contact';
import Footer from '../components/Organisms/Footer/Footer';
import NavBar from '../components/Organisms/NavBar/NavBar';

const Home = () => (
  <>
    <NavBar />
    <HomeTemplate />
    <Services />
    <Calculator />
    <Contact />
    <Footer />
  </>
);

export default Home;
