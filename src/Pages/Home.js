import React from 'react';
import CarouselSlider from '../Components/CarouselSlider/CarouselSlider';
import Info from '../Components/Info/Info';
import MarketPlace from '../Components/MarketPlace/MarketPlace';
import Services from '../Components/Services/Services';
import FiverrBusiness from '../Components/FiverrBusiness';

const Home = () => {
    return (
        <div>
            <CarouselSlider />
            <Services />
            <Info />
            <MarketPlace />
            <FiverrBusiness/>
        </div>
    );
};

export default Home;