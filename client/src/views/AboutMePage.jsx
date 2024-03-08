import React, {useEffect} from 'react';
import Header from '../components/Header';
import Separator from '../components/Separator';
import Footer from '../components/Footer';
import Hobbies from '../components/Hobbies';

const AboutMePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        AOS.refresh();
    }, []);
    return (
        <div  className='overflow-x-hidden'>
            <Header/>
            <Separator/>
            <Hobbies/>
            <div  data-aos="flip-up">
                <Footer/>
            </div>
        </div>
    )
}

export default AboutMePage