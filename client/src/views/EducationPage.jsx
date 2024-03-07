import React, {useEffect} from 'react';
import Education from '../components/Education';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Separator from '../components/Separator';

const EducationPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        AOS.refresh();
    }, []);
    return (
        <div className='overflow-x-hidden'>
            <Header/>
            <Separator/>
            <Education/>
            <div  data-aos="flip-up">
                <Footer/>
            </div>
        </div>
    )
}

export default EducationPage