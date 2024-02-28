import React from 'react';
import {Container, Row, Card} from 'react-bootstrap';

const Education = () => {
    return (
        <div className='d-flex flex-column mt-5 pt-4 align-items-center ' style={{'width':'70%', 'margin': 'auto', 'marginTop': '100px'}}>
            <h3>My Academic Journey</h3>
            <div>
                <div className='headers'>
                    <img className='mb-3' style={{'maxHeight':'150px', 'height': '80%' ,'width':'auto'}} src="../images/Coding_Dojo_Bootcamp_Banner.png" alt="bootcamp logo" />
                    <h4>Coding Dojo Bootcamp | Part of Colorado Technical University </h4>
                    <h5>Certificate in Full-Stack Software Development for MERN, Java, and Python</h5>
                    <p>Dec 2022 - Oct 2023</p>
                </div>
                <div className='body'>
                    <h4>Description</h4>
                    <p>Coding Dojo Started out by teaching Web Fundaments with HTML5, CSS and JavaScript and general practices. 
                        After getting these core concepts down, I moved on to the Python Full stack course. 
                        Here I learned overarching coding principles such as development life cycles, MVC, OOP as well as code with python syntax. 
                        Along with python I learned how to utilize Flask and non-relational databases such a MySQL. 
                        By the end of this stack I was able to build full CRUD (create,read,update,Delete) applications with validations, authentication and M2M relationships.
                    </p>
                    <p>The next full language stack I completed was Java with Spring Boot. 
                        Here I once again utilized over arching coding methodologies/principles to build full stack Java applications.
                    </p>
                    <p>The last full language stack I learned was MERN (MongoDB, Express, React, Node.js). While similar to my previous stack, it had its own unique traits such as being Single Page Application. 
                        This stack also taught me how to incorporate non-relation databases such as MongoDB. Once again by the end of the program I was able to build full stack MERN applications that could authenticate routes/user, 
                        validate data entry,conditionally render and more.
                    </p>
                </div>
            </div>
            <img src="../images/luxury-gold-line.png" alt="line break" style={{'maxHeight': '25px', 'width':'100%'}} />
            <div>
                <div className='headers'>
                    <img className='mb-3' style={{'maxHeight':'150px', 'height': '80%' ,'width':'auto'}} src="../images/UAF_Banner.png" alt="UAF logo" />
                    <h4>University of Alaska Fairbanks</h4>
                    <h5>Bachelors in Biology</h5>
                    <p>August 2019 - May 2021 | GPA: 3.7</p>
                </div>
                <div className='body'>
                    <h4>Description</h4>
                    <p> 
                        Majority of my coursework consisted of advanced chemistry and bio-chemical systems coursework such as genetics, neurology and biochemical metabolism. 
                        All these were supplemented with in depth libratory time were I learned proper laboratory procedures ranging from safety, chemical handling, scientific equipment use and more.
                    </p>
                    <p>
                        As part of the biology degree I also completed a plethora of credit hours in natural sciences such as biogeography, ecology and principles of evolution. 
                        In my final semester I even completed a compressive meta analysis on different disturbance types and intensity's on invasive plant genus establishment in an ecosystem.                     
                    </p>
                    <p>
                        When not taking my core classes I repeatedly chose electives to expand my sphere of knowledge such as interpersonal communication, media literacy and misc business coursework.  
                    </p>
                    <h6>Achievements: </h6>
                    <p>
                    Chancellor's List, Deans List
                    </p>
                </div>
            </div>
            <img src="../images/luxury-gold-line.png" alt="line break" style={{'maxHeight': '25px', 'width':'100%'}} />
            <div>
                <div className='headers'>
                    <img className='mb-3' style={{'maxHeight':'150px', 'height': '80%' ,'width':'auto'}} src="../images/CU_Boulder_Banner_2.png" />
                    <h4>University Colorado Boulder</h4>
                    <h5>Studied Integrated Physiology</h5>
                    <p>August 2016 - May 2018 | GPA: 3.7</p>
                </div>
                <div className='body'>
                    <h4>Description</h4>
                    <p> 
                        Attended for four semesters completing pre-requisite coursework before transferring to University of Alaska Fairbanks to finish my degree.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Education