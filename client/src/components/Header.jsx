import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
    return (
            <Navbar expand='md' fixed="top">
                <Container>
                <LinkContainer to="/" >
                    <Navbar.Brand>
                        <h2>Matthew Baiamonte</h2>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">   
                    <Nav className='ms-auto justify-content-around w-100'>
                        <LinkContainer to='/Projects'>
                            <Nav.Link >Projects</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/Work_History'>
                            <Nav.Link >Work History</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/Education'>
                            <Nav.Link >Education</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/About_Me'>
                            <Nav.Link >About Me</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                    </Container>
            </Navbar>
    )
}

export default Header