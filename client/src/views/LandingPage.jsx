import React from 'react';
import Header from '../components/Header';
import EducationQuickView from '../components/EducationQuickView';
import Footer from '../components/Footer';
import WorkHistory from '../components/WorkHistory';

const LandingPage = () => {
    return (
        <>
            <Header/>
            <EducationQuickView/>
            <WorkHistory/>
            <Footer/>
        </>
    )
}

export default LandingPage