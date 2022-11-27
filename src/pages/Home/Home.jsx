import React from 'react';
import AdvertisedSection from './AdvertisedSection';
import BannerHome from './BannerHome';
import BrandName from './BrandName';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <BannerHome />
            <BrandName />
            <AdvertisedSection />
            <Contact />
        </div>
    );
};

export default Home;