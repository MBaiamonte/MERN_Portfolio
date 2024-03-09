import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Projects = () => {
    const reactIcon = '../images/React_Icon.png'
    return (
        <div id='projects-container'>
            <div className='d-flex align-items-center justify-content-center'>
                <h4 className='align-self-center' style={{'color':'#fff'}}>My Projects</h4>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid #fff' }}
                    date="Feb 2024 - Current"
                    iconStyle={{ background: '#fff' }}
                    icon={<img src='../images/React_Icon.png' style={{'width': 'auto', 'height':'100%'}}/>}
                >
                    <h3 className="vertical-timeline-element-title" style={{'color':'#163958'}}>Portfolio</h3>
                    <h6 className="vertical-timeline-element-subtitle mb-2" style={{'color':'#1F577A'}}>React</h6>
                    <div>
                        <li style={{'color':'#256E91'}}> Developed customized UI & UX through CSS stylesheet and Bootstrap library to seamless display content for users </li>
                        <li style={{'color':'#256E91'}}> Incorporated react libraries such as React-Slick to enable interactive content display for users </li>
                        <li style={{'color':'#256E91'}}> Designed components to allow for simple reusability on any page </li>
                    </div>
                    <div className='mt-2'>
                        <button className='wiggle'>
                            <span className='wiggle-span'><a style={{'color':'#40916c'}} href="https://github.com/MBaiamonte/MERN_Portfolio">Git</a></span>
                        </button>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 2023 - Feb 2023"
                    iconStyle={{background: '#fff' }}
                    icon={<img src='../images/React_Icon.png' style={{'width': 'auto', 'height':'100%'}}/>}
                >
                    <h3 className="vertical-timeline-element-title" style={{'color':'#163958'}}>Barber Shop Booking App</h3>
                    <h6 className="vertical-timeline-element-subtitle mb-2" style={{'color':'#1F577A'}}>React,Express, MongoDB Atlas, Node.js</h6>
                    <div>
                        <li style={{'color':'#256E91'}}>Developed custom error codes and validations for seamless debugging and consistent data entry storage</li>
                        <li style={{'color':'#256E91'}}>Implemented Google Maps API for user-friendly display of store location and directions. </li>
                        <li style={{'color':'#256E91'}}>Utilized custom CSS and Bootstrap for a clean and intuitive user interface, resulting in an enhanced user experience </li>
                    </div>
                    <div className='mt-2'>
                        <button className='wiggle'>
                            <span className='wiggle-span'><a style={{'color':'#40916c'}} href="https://github.com/MBaiamonte/MERN_Barber_Shop">Git</a></span>
                        </button>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Oct 2023 - Dec 2023"
                    iconStyle={{background: '#fff' }}
                    icon={<img src='../images/React_Icon.png' style={{'width': 'auto', 'height':'100%'}}/>}
                    >
                    <h3 className="vertical-timeline-element-title" style={{'color':'#163958'}}>Ecommerce Mock Store Demo</h3>
                    <h6 className="vertical-timeline-element-subtitle mb-2" style={{'color':'#1F577A'}}>React, Express, MongoDB Atlas, Node.js, Redux</h6>
                    <div>
                        <li style={{'color':'#256E91'}}>Developed admin-protected routes and functions to securely and easily manage users, products, and orders</li>
                        <li style={{'color':'#256E91'}}>Incorporated Redux for easy frontend state management and troubleshooting</li>
                        <li style={{'color':'#256E91'}}>Enabled PayPal and debit card payments for simplified user checkout</li>
                        <li style={{'color':'#256E91'}}>Utilized custom bootstrap style sheet for a clean and intuitive user interface, resulting in an enhanced user experience </li>
                    </div>
                    <div className='mt-2 d-flex '>
                        <button className='wiggle mr-3'>
                            <span className='wiggle-span'><a style={{'color':'#40916c'}} href="https://github.com/MBaiamonte/MERN_Ecom_Store_Demo">Git</a></span>
                        </button>
                        <button className='wiggle wiggle-deploy-btn '>
                            <span className='wiggle-span'><a style={{'color':'#40916c'}} href="https://mern-ecommerce-mock-store.onrender.com/">Deployed Link</a></span>
                        </button>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Dec 2023 - Current"
                    iconStyle={{background: '#fff' }}
                    icon={<img src='../images/css_html_js_icon.png' style={{'width': '100%', 'height':'auto'}} className='mt-2'/>}
                    >
                    <h3 className="vertical-timeline-element-title" style={{'color':'#163958'}}>50 CSS, JS and HTML Mini Projects</h3>
                    <h6 className="vertical-timeline-element-subtitle mb-2" style={{'color':'#1F577A'}}>HTML5, JS, CSS</h6>
                    <li style={{'color':'#256E91'}}>Utilized DOM manipulation, events, array methods, HTTP requests & more to conditionally render content based on user interactions</li>
                    <li style={{'color':'#256E91'}}>Developed custom CSS stylesheets to uniquely display content that is adaptive to user interactions</li>
                    <div className='mt-2'>
                        <button className='wiggle mr-3'>
                            <span className='wiggle-span'><a  style={{'color':'#40916c'}} href="https://github.com/MBaiamonte/50_css_js_mini_projects">Git</a></span>
                        </button>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Projects