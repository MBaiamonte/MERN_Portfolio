import React,{useEffect} from 'react'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Separator from '../components/Separator'

const ProjectsPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <Header/>
            <Separator/>
            <Projects/>
            <div  data-aos="flip-up">
                <Footer/>
            </div>
        </>
    )
}

export default ProjectsPage