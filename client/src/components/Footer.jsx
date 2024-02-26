import React from 'react';
import {Col, Container, Card, Image, Row} from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className=' d-flex pt-3 flex-column align-items-center' style={{'backgroundColor': 'lightgreen'}}>
            <h3>Contact Me!</h3>
            <Row className='d-flex justify-content-around align-items-center w-100 my-3'>
                <Col className='col-3  d-flex flex-column justify-content-center align-items-center'>
                <a href="#">
                            <Image src='/images/GMail_Icon.png' style={{'height': '75px', 'width': 'auto'}}/>
                    </a>   
                </Col>
                <Col className='col-3 d-flex flex-column justify-content-center align-items-center' style={{'backgroundColor': 'transparent'}}>
                    <a href="https://www.linkedin.com/in/matthew-baiamonte/">
                            <Image src='/images/LinkedIn_Icon.png' style={{'height': '75px', 'width': 'auto'}}/>
                    </a>
                </Col>
                <Col className='col-3 d-flex flex-column justify-content-center align-items-center'>
                    <a href="https://github.com/mbaiamonte">
                            <Image src='/images/GitHub_Icon.png' style={{'height': '75px', 'width': 'auto'}}/>
                    </a>
                </Col>
                <Col className='col-3 d-flex flex-column justify-content-center align-items-center' style={{'backgroundColor': 'transparent'}}>
                    <a href="https://www.upwork.com/freelancers/~01836d4c5ac87b28d4">
                        <Image src='/images/UpWork_Icon.png' style={{'height': '75px', 'width': 'auto'}}/>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer