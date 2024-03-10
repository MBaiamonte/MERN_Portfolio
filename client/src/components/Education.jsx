import React, {useEffect} from 'react';
import {Container, Row, Card} from 'react-bootstrap';

const Education = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
    }, []);
    return (
        <div className='d-flex flex-column align-items-center ' style={{'width':'75%', 'margin': 'auto'}}>
            <h3 style={{'color':'#163958'}} className='text-wrap'>My Academic Journey</h3>
            <div>
                <div className='headers text-wrap'>
                    <img className='mb-3' style={{'maxHeight':'150px', 'height': '80%' ,'width':'auto'}} src="../images/Coding_Dojo_Bootcamp_Banner.png" alt="bootcamp logo" />
                    <h4 style={{'color':'#163958'}}>Coding Dojo Bootcamp | Part of Colorado Technical University </h4>
                    <h5 style={{'color':'#163958'}}>Certificate in Full-Stack Software Development for MERN, Java, and Python</h5>
                    <p style={{color : '#e09f3e'}}>Dec 2022 - Oct 2023</p>
                </div>
                <div className='body text-wrap'>
                    <h4 style={{'color':'#163958'}}>Description</h4>
                    <p style={{'color':'#256E91'}} className='text-wrap'>
                        Coding Dojo started out by teaching Web Fundamentals  with HTML5, CSS,  JavaScript and general practices. 
                        After getting these core concepts down, I moved on to the Python Full stack course. 
                        Here I learned overarching coding principles such as development life cycles, MVC, OOP, as well as, code with python syntax. 
                        Along with python I learned how to utilize Flask and non-relational databases such as MySQL. 
                        By the end of this stack I was able to build full CRUD (create, read, update, delete) applications with validations, authentication and M2M relationships.
                    </p>
                    <p style={{'color':'#256E91'}} className='text-wrap'>
                        The next full language stack I completed was Java with Spring Boot. 
                        Here I once again utilized over arching coding methodologies/principles to build full stack Java applications.
                    </p>
                    <p style={{'color':'#256E91'}} className='text-wrap'>
                        The last full language stack I learned was MERN (MongoDB, Express, React, Node.js). While similar to my previous stack, it had its own unique traits such as being a Single Page Application. 
                        This stack also taught me how to incorporate non-relation databases such as MongoDB. Once again by the end of the program I was able to build full stack MERN applications that could authenticate routes/users, 
                        validate data entries, conditionally render and more.
                    </p>
                </div>
            </div>
            <img src="../images/luxury-gold-line.png" alt="line break" style={{'maxHeight': '25px', 'width':'100%'}} />
            <div data-aos="fade-up">
                <div className='headers text-wrap'>
                    <img className='mb-3' style={{'maxHeight':'150px', 'height': '80%' ,'width':'auto'}} src="../images/UAF_Banner.png" alt="UAF logo" />
                    <h4 style={{'color':'#163958'}}>University of Alaska Fairbanks</h4>
                    <h5 style={{'color':'#163958'}}>Bachelors in Biology</h5>
                    <p style={{color : '#e09f3e'}}>Aug 2019 - May 2021 | GPA: 3.7</p>
                </div>
                <div className='body'>
                    <h4 style={{'color':'#163958'}}>Description</h4>
                    <p style={{'color':'#256E91'}}> 
                        The majority of my coursework consisted of advanced chemistry and bio-chemical systems coursework such as genetics, neurology and biochemical metabolism. 
                        All these were supplemented with in depth laboratory time where I learned proper laboratory procedures ranging from safety, chemical handling, scientific equipment use and more.
                    </p>
                    <p style={{'color':'#256E91'}}>
                        As part of the biology degree I also completed a plethora of credit hours in natural sciences such as biogeography, ecology and principles of evolution. 
                        In my final semester I completed a comprehensive meta analysis on different disturbance types and intensity's on invasive plant genus establishment in an ecosystem.                     
                    </p>
                    <p style={{'color':'#256E91'}}>
                        When not taking my core classes I repeatedly chose electives to expand my sphere of knowledge such as interpersonal communication, media literacy and misc business coursework.  
                    </p>
                    <h6 style={{'color':'#163958'}}>Achievements: </h6>
                    <p style={{'color':'#256E91'}}>
                    Chancellor's List, Deans List
                    </p>
                </div>
            </div>
            <img src="../images/luxury-gold-line.png" alt="line break" style={{'maxHeight': '25px', 'width':'100%'}} />
            <div data-aos="fade-up">
                <div className='headers'>
                    <img className='mb-3' style={{'maxHeight':'150px', 'height': '80%' ,'width':'auto'}} src="../images/CU_Boulder_Banner_2.png" />
                    <h4 style={{'color':'#163958'}}>University Colorado Boulder</h4>
                    <h5 style={{'color':'#163958'}}>Studied Integrated Physiology</h5>
                    <p style={{color : '#e09f3e'}}>Aug 2016 - May 2018 | GPA: 3.3</p>
                </div>
                <div className='body'>
                    <h4 style={{'color':'#163958'}}>Description</h4>
                    <p style={{'color':'#256E91'}}> 
                        Attended four semesters completing pre-requisite coursework before transferring to University of Alaska Fairbanks to finish my degree in Biology.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Education