import React from 'react';
import {Container, Row, Card} from 'react-bootstrap';

const Education = () => {
    return (
        <Container className='pt-5'>
            <Row>
                <h3>My Academic Journey</h3>
            </Row>
            <Row>
                <Card>
                    <Card.Body>
                        <Row className='d-flex justify-content-center alight-items-center mb-3'>
                            <Card.Img variant="top" style={{'maxHeight':'150px', 'height': '80%' ,'width':'auto'}} src="../images/Coding_Dojo_Bootcamp_Banner.png" />
                        </Row>
                        <Card.Title className='mt-3'>Coding Dojo Bootcamp | Part of Colorado Technical University </Card.Title>
                        <Card.Subtitle>Certificate in Full-Stack Software Development for MERN, Java, and Python</Card.Subtitle>
                        <Card.Text>Dec 2022 - Oct 2023</Card.Text>
                        <div>
                            <h6>Description</h6>
                            <Card.Text>
                                Coding Dojo Started out by teaching Web Fundaments with HTML5, CSS and JavaScript and general practices. 
                                After getting these core concepts down, I moved on to the Python Full stack course. 
                                Here I learned overarching coding principles such as development life cycles, MVC, OOP as well as code with python syntax. 
                                Along with python I learned how to utilize Flask and non-relational databases such a MySQL. 
                                By the end of this stack I was able to build full CRUD (create,read,update,Delete) applications with validations, authentication and M2M relationships.
                            </Card.Text>
                            <Card.Text>
                                The next full language stack I completed was Java with Spring Boot. 
                                Here I once again utilized over arching coding methodologies/principles to build full stack Java applications.
                            </Card.Text>
                            <Card.Text>
                                The last full language stack I learned was MERN (MongoDB, Express, React, Node.js). While similar to my previous stack, it had its own unique traits such as being Single Page Application. 
                                This stack also taught me how to incorporate non-relation databases such as MongoDB. Once again by the end of the program I was able to build full stack MERN applications that could authenticate routes/user, 
                                validate data entry,conditionally render and more. 
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card>
                    <Card.Body>
                    <Row className='d-flex justify-content-center alight-items-center mb-3'>
                        <Card.Img variant="top" style={{'maxHeight':'150px', 'height': '70%' ,'width':'auto'}} src="../images/UAF_Banner.png" />
                    </Row>    
                        
                        <Card.Title>University of Alaska Fairbanks</Card.Title>
                        <Card.Subtitle>Bachelors in Biology</Card.Subtitle>
                        <Card.Text>August 2019 - May 2021</Card.Text>
                        <Card.Text>GPA: 3.7</Card.Text>
                        <div>
                            <h6>Description</h6>
                            <Card.Text>
                                Majority of my coursework consisted of advanced chemistry and bio-chemical systems coursework such as genetics, neurology and biochemical metabolism. 
                                All these were supplemented with in depth libratory time were I learned proper laboratory procedures ranging from safety, chemical handling, scientific equipment use and more.
                            </Card.Text>
                            <Card.Text>
                                As part of the biology degree I also completed a plethora of credit hours in natural sciences such as biogeography, ecology and principles of evolution. 
                                In my final semester I even completed a compressive meta analysis on different disturbance types and intensity's on invasive plant genus establishment in an ecosystem. 
                            </Card.Text>
                            <Card.Text>
                                When not taking my core classes I repeatedly chose electives to expand my sphere of knowledge such as interpersonal communication, media literacy and misc business coursework.
                            </Card.Text>
                        </div>
                        <div className='mt-2'>
                            <h6>Achievements: </h6>
                            <Card.Text>Chancellor's List, Deans List</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card >
                    <Card.Body>
                        <Row className='d-flex justify-content-center alight-items-center mb-3'>
                            <Card.Img variant="top" style={{'maxHeight':'150px', 'height': '80%' ,'width':'auto'}} src="../images/CU_Boulder_Banner_2.png" />
                        </Row>
                        <Card.Title>University Colorado Boulder</Card.Title>
                        <Card.Subtitle>Studied Integrated Physiology</Card.Subtitle>
                        <Card.Text>August 2016 - May 2018</Card.Text>
                        <Card.Text className='mt-2'>GPA: 3.3</Card.Text>
                        <div>
                            <h6>Description</h6>
                            <Card.Text>
                                Attended for four semesters completing pre-requisite coursework before transferring to University of Alaska Fairbanks to finish my degree.
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Row>

        </Container>
    )
}

export default Education