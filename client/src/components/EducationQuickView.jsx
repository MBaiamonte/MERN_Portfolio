import React from 'react';
import { Container, Card, Row , Col, Button} from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom'

const EducationQuickView = () => {
    return (
        <Container className='pt-5'>
            <Row>
                <Col >
                    <Card>
                        <Card.Body>
                        <Row className='d-flex justify-content-center align-items-center mb-3'>
                            <Card.Img variant="top" style={{'maxHeight':'75px', 'height': '70%' ,'width':'auto'}} src="../images/UAF_Banner.png" />
                        </Row> 
                        <Row className='d-flex justify-content-center flex-column align-items-center'> 
                            <Card.Title>University of Alaska Fairbanks</Card.Title>
                            <Card.Subtitle>Bachelors in Biology</Card.Subtitle>
                            <Card.Text>August 2019 - May 2021</Card.Text>
                        </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Body>
                        <Row className='d-flex justify-content-center align-items-center'>
                            <Card.Img variant="top" style={{'maxHeight':'75px', 'height': '80%' ,'width':'auto'}} src="../images/Coding_Dojo_Bootcamp_Banner.png" />
                        </Row>
                        <Row className='d-flex justify-content-center flex-column align-items-center'> 
                            <Card.Title className='mt-3'>Coding Dojo Bootcamp</Card.Title>
                            <Card.Subtitle>Full-Stack Web Development</Card.Subtitle>
                            <Card.Subtitle className='mt-1'>MERN, Java, and Python</Card.Subtitle>
                            <Card.Text>Dec 2022 - Oct 2023</Card.Text>
                        </Row>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                    <Card >
                        <Card.Body>
                            <Row className='d-flex justify-content-center alight-items-center mb-3'>
                                <Card.Img variant="top" style={{'maxHeight':'75px', 'height': '80%' ,'width':'auto'}} src="../images/CU_Boulder_Banner_2.png" />
                            </Row>
                            <Row className='d-flex justify-content-center flex-column align-items-center'> 
                                <Card.Title>University Colorado Boulder</Card.Title>
                                <Card.Subtitle>Studied Integrated Physiology</Card.Subtitle>
                                <Card.Text>August 2016 - May 2018</Card.Text>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center mt-4'>
                <Link to={`/Education`}>Check out in detail</Link>
            </Row>

        </Container>
    )
}

export default EducationQuickView