import React,{ useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
    const [navBar, setNavBar] = useState(false)

    const changeBackground = () =>{
        if(window.scrollY >= 10){
            setNavBar(true)
        } else{
            setNavBar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
                // <Container className='mb-3'>
                    <Navbar expand='md' fixed="top" className={navBar ? 'navbar active' : 'navbar'}>
                        <LinkContainer to="/" >
                            <Navbar.Brand>
                                <h3 style={{color: '#163958'}} className='text-wrap'>Matthew Baiamonte</h3>
                            </Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">   
                            <Nav className='ms-auto justify-content-around w-100'>
                                <LinkContainer to='/Projects'>
                                    <Nav.Link className='shake'>Projects</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/Work_History'>
                                    <Nav.Link className='shake'>Work History</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/Education'>
                                    <Nav.Link className='shake'>Education</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/About_Me'>
                                    <Nav.Link className='shake'>About Me</Nav.Link>
                                </LinkContainer>
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    // </Container>
    )
}

export default Header