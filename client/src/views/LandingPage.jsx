import React from 'react';
import Header from '../components/Header';
import EducationQuickView from '../components/EducationQuickView';
import Footer from '../components/Footer';
import WorkHistory from '../components/WorkHistory';
import Separator from '../components/Separator'
import Projects from '../components/Projects';

const LandingPage = () => {
    return (
        <>
            <Header/>
            <Separator/>
            <Projects/>
            <EducationQuickView/>
            <WorkHistory/>
            <Footer/>
        </>
    )
}

export default LandingPage