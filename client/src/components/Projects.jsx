import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Projects = () => {
    const reactIcon = '../images/React_Icon.png'
    return (
        <div id='projects-container'>
            <div className='d-flex align-items-center justify-content-center'>
                <h4 className='align-self-center '>My Projects</h4>
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
                    <h3 className="vertical-timeline-element-title">Portfolio</h3>
                    <h6 className="vertical-timeline-element-subtitle mb-2">React</h6>
                    <div>
                        <li> Developed customized UI & UX through CSS stylesheet and Bootstrap library to seamless display content for users </li>
                        <li> Incorporated react libraries such as React-Slick to enable interactive content display for users </li>
                        <li> Designed components to allow for simple reusability on any page </li>
                    </div>
                    <div className='mt-2'>
                        <button><a href="https://github.com/MBaiamonte/MERN_Portfolio">Git</a></button>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 2023 - Feb 2023"
                    iconStyle={{background: '#fff' }}
                    icon={<img src='../images/React_Icon.png' style={{'width': 'auto', 'height':'100%'}}/>}
                >
                    <h3 className="vertical-timeline-element-title">Barber Shop Booking App</h3>
                    <h6 className="vertical-timeline-element-subtitle mb-2">React,Express, MongoDB Atlas, Node.js</h6>
                    <div>
                        <li>Developed custom error codes and validations for seamless debugging and consistent data entry storage</li>
                        <li>Implemented Google Maps API for user-friendly display of store location and directions. </li>
                        <li>Utilized custom CSS and Bootstrap for a clean and intuitive user interface, resulting in an enhanced user experience </li>
                    </div>
                    <div className='mt-2'>
                        <button><a href="https://github.com/MBaiamonte/MERN_Barber_Shop">Git</a></button>
                        {/* <button>Deployed Link</button> */}
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Oct 2023 - Dec 2023"
                    iconStyle={{background: '#fff' }}
                    icon={<img src='../images/React_Icon.png' style={{'width': 'auto', 'height':'100%'}}/>}
                    >
                    <h3 className="vertical-timeline-element-title">Ecommerce Mock Store Demo</h3>
                    <h6 className="vertical-timeline-element-subtitle mb-2">React, Express, MongoDB Atlas, Node.js, Redux</h6>
                    <div>
                        <li>Developed admin-protected routes and functions to securely and easily manage users, products, and orders</li>
                        <li>Incorporated Redux for easy frontend state management and troubleshooting</li>
                        <li>Enabled PayPal and debit card payments for simplified user checkout</li>
                        <li>Utilized custom bootstrap style sheet for a clean and intuitive user interface, resulting in an enhanced user experience </li>
                    </div>
                    <div className='mt-2'>
                        <button className='mr-3'><a href="https://github.com/MBaiamonte/MERN_Ecom_Store_Demo">Git</a></button>
                        <button><a href="https://mern-ecommerce-mock-store.onrender.com/">Deployed Link</a></button>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Dec 2023 - Current"
                    iconStyle={{background: '#fff' }}
                    icon={<img src='../images/css_html_js_icon.png' style={{'width': '100%', 'height':'auto'}} className='mt-2'/>}
                    >
                    <h3 className="vertical-timeline-element-title">50 CSS, JS and HTML Mini Projects</h3>
                    <h6 className="vertical-timeline-element-subtitle mb-2">HTML5, JS, CSS</h6>
                    <li>Utilized DOM manipulation, events, array methods, HTTP requests & more to conditionally render content based on user interactions</li>
                    <li>Developed custom CSS stylesheets to uniquely display content that is adaptive to user interactions</li>
                    <div className='mt-2'>
                        <button><a href="https://github.com/MBaiamonte/50_css_js_mini_projects">Git</a></button>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Projects