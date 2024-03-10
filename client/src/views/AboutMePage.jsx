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
            <div className='d-flex align-items-center justify-content-center'>
                <h3 style={{'color':'#163958'}}>A little bit about me</h3>
            </div>
            <div className='d-flex justify-content-around mt-2 text-center'>
                <div style={{'width': '50%'}}>
                    <h4  style={{'color':'#163958'}}>Matthew Baiamonte</h4>
                    <p style={{'color':'#256E91'}}>
                    I am a dynamic full-stack web developer, skilled in the MERN stack (MongoDB, Express.js, React.js, Node.js), Java, and Python. 
                    My initial academic journey led to earning a degree in Biology from the University of Alaska Fairbanks, where I developed a keen 
                    analytical and problem-solving mindset but also instilled a methodical approach to challenges. 
                    This scientific background, coupled with a natural curiosity for technology, propelled me into the world of coding, 
                    where I further honed my skills through an intensive program at Coding Dojo.
                    </p>
                    <p style={{'color':'#256E91'}}>
                    At Coding Dojo, known for its rigorous, comprehensive curriculum, I quickly absorbed the principles of software development, 
                    embracing both the technical challenges and the collaborative dynamics essential to thriving in the fast-paced tech industry.
                    This transformative experience equipped me with the diverse skill set required to 
                    navigate the complexities of both front-end and back-end development with equal proficiency.
                    </p>
                    <p style={{'color':'#256E91'}}>
                    Outside the coding world, I enjoy the spirit of adventure and love for nature. As an enthusiast of the great outdoors, I frequently engage in rafting, fly fishing, hunting, and other outdoor activities. 
                    These experiences not only offer me a refreshing break from technology but also inspire creativity and resilience in my professional work.
                    </p>
                    <p style={{'color':'#256E91'}}>
                    In my personal projects, I leverage my diverse background, seamlessly integrating my scientific analytical abilities with my technical skills to develop intuitive, efficient web applications. 
                    My commitment to excellence, coupled with a lifelong love of learning, drives me to continuously evolve as a developer.
                    My unique perspective and diverse skill set make me a valuable contributor to any tech team, capable of crafting innovative solutions that meet complex user needs.
                    </p>
                </div>
                <div>
                    <img  src="../images/profile_photo.jpg" alt="" style={{'maxHeight':'500px' ,'maxWidth':'100%', 'borderRadius': '1000px'}} className='mt-5'/>
                </div>
            </div>
            <Hobbies/>
            <div  data-aos="flip-up">
                <Footer/>
            </div>
        </div>
    )
}

export default AboutMePage