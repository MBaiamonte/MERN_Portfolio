import React from 'react';
import Header from '../components/Header';
import EducationQuickView from '../components/EducationQuickView';
import Footer from '../components/Footer';
import WorkHistory from '../components/WorkHistory';
import Projects from '../components/Projects';
import LandingHeader from '../components/LandingHeader';
import Hobbies from '../components/Hobbies';

const LandingPage = () => {
    return (
        <div className='overflow-x-hidden'>
            <Header/>
            <LandingHeader/>
            <Projects/>
            <div data-aos="zoom-in">
                <WorkHistory/>
            </div>
            <div data-aos="zoom-out">
            <EducationQuickView/>
            </div>
            <div data-aos="fade-up">
                <Hobbies/>
            </div>
            <div data-aos="flip-up">
                <Footer/>
            </div>
        </div>
    )
}

export default LandingPage