import React from 'react';
import {Col, Container, Image, Row} from 'react-bootstrap';

const Footer = () => {

    const emailHandler = () =>{
        alert('Email: Fcblov17@gmail.com')
    }
    const linkedinHandler = () =>{
        window.open('https://www.linkedin.com/in/matthew-baiamonte/')
    }
    const gitHandler = () =>{
        window.open('https://github.com/mbaiamonte')
    }
    const upWorkHandler = () =>{
        window.open('https://www.upwork.com/freelancers/~01836d4c5ac87b28d4')
    }
    return (
        <Container className=' d-flex pt-3 flex-column align-items-center'>
            <h3 className='mb-4' style={{'color':'#163958'}}>Contact Me!</h3>
            <Row className='d-flex justify-content-around align-items-center w-100 my-3'>
                <Col className='col-3  d-flex flex-column justify-content-center align-items-center'>
                <a onClick={emailHandler} className='shake'>
                            <Image src='/images/GMail_Icon.png' style={{'height': '75px', 'width': 'auto'}}/>
                    </a>   
                </Col>
                <Col className='col-3 d-flex flex-column justify-content-center align-items-center' style={{'backgroundColor': 'transparent'}}>
                    <a  onClick={linkedinHandler} className='shake'>
                            <Image src='/images/LinkedIn_Icon.png' style={{'height': '75px', 'width': 'auto'}}/>
                    </a>
                </Col>
                <Col className='col-3 d-flex flex-column justify-content-center align-items-center'>
                    <a onClick={gitHandler} className='shake'>
                            <Image src='/images/GitHub_Icon.png' style={{'height': '75px', 'width': 'auto'}}/>
                    </a>
                </Col>
                <Col className='col-3 d-flex flex-column justify-content-center align-items-center' style={{'backgroundColor': 'transparent'}}>
                    <a onClick={upWorkHandler} className='shake'>
                        <Image src='/images/UpWork_Icon.png' style={{'height': '75px', 'width': 'auto'}}/>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer