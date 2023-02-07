import React from 'react';
import Banner from "../../components/Banner";
import Products from "../../components/Products";
import Design from "../../components/Design";
import Procedure from "../../components/Procedure";
import About from "../../components/About";
import Values from "../../components/Values";
import Questions from "../../components/Questions";
import Clients from "../../components/Clients";
import Contact from "../../components/Contact";
import Wrapper from '../../components/Wrapper';


const HomePage = () => {
    return (
        <Wrapper>
            <Banner/>
            <Products/>
            <Design/>
            <Procedure/>
            <About/>
            <Values/>
            <Questions/>
            <Clients/>
            <Contact/>
        </Wrapper>
    );
}

export default HomePage;
