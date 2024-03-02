import React from 'react';
import Header from '../components/Header';
import EducationQuickView from '../components/EducationQuickView';
import Footer from '../components/Footer';
import WorkHistory from '../components/WorkHistory';
import Separator from '../components/Separator'
import Projects from '../components/Projects';
import LandingHeader from '../components/LandingHeader';

const LandingPage = () => {
    return (
        <>
            <Header/>
            <LandingHeader/>
            <Projects/>
            <WorkHistory/>
            <EducationQuickView/>
            <Footer/>
        </>
    )
}

export default LandingPage