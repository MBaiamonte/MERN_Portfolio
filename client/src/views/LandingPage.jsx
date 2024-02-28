import React from 'react';
import Header from '../components/Header';
import EducationQuickView from '../components/EducationQuickView';
import Footer from '../components/Footer';
import WorkHistory from '../components/WorkHistory';
import Separator from '../components/Separator'

const LandingPage = () => {
    return (
        <>
            <Header/>
            <Separator/>
            <EducationQuickView/>
            <WorkHistory/>
            <Footer/>
        </>
    )
}

export default LandingPage