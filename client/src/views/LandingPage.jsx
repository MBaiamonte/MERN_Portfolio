import React, {useEffect} from 'react';
import AOS from 'aos';
import Header from '../components/Header';
import EducationQuickView from '../components/EducationQuickView';
import Footer from '../components/Footer';
import WorkHistory from '../components/WorkHistory';
import Projects from '../components/Projects';
import LandingHeader from '../components/LandingHeader';
import Hobbies from '../components/Hobbies';

const LandingPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // values from 0 to 3000, with step 50ms
            once: false, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them
        });
        AOS.refresh();
    }, []);

    return (
        <div className='overflow-x-hidden'>
            <Header/>
            <LandingHeader/>
            <Projects/>
            <div data-aos="zoom-in">
                <WorkHistory/>
            </div>
            <div data-aos="zoom-in">
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