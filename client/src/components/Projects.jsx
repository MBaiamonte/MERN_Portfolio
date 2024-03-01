import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Projects = () => {
    const reactIcon = '../images/React_Icon.png'
    return (
        <div style={{'backgroundColor' : 'lightcoral'}}>
            <div className='d-flex align-items-center justify-content-center'>
                <h4 className='align-self-center '>My Projects</h4>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Feb 2024 - Current"
                    iconStyle={{ background: '#fff' }}
                    icon={<img src='../images/React_Icon.png' style={{'width': 'auto', 'height':'100%'}}/>}
                >
                    <h3 className="vertical-timeline-element-title">Portfolio</h3>
                    <h4 className="vertical-timeline-element-subtitle">React</h4>
                    <p>
                        dec dec dec dec
                    </p>
                    <button>Git</button>
                    <button>Deployed Link</button>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 2023 - Feb 2023"
                    iconStyle={{background: '#fff' }}
                    icon={<img src='../images/React_Icon.png' style={{'width': 'auto', 'height':'100%'}}/>}
                >
                    <h3 className="vertical-timeline-element-title">Barber Shop Booking App</h3>
                    <h4 className="vertical-timeline-element-subtitle">React,Express, MongoDB Atlas, Node.js</h4>
                    <p>
                        dec dec dec
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Oct 2023 - Dec 2023"
                    iconStyle={{background: '#fff' }}
                    icon={<img src='../images/React_Icon.png' style={{'width': 'auto', 'height':'100%'}}/>}
                    >
                    <h3 className="vertical-timeline-element-title">Ecommerce Mock Store Demo</h3>
                    <h4 className="vertical-timeline-element-subtitle">React, Express, MongoDB Atlas, Node.js, Redux</h4>
                    <p>
                        dec dec dec
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Dec 2023 - Current"
                    iconStyle={{background: '#fff' }}
                    icon={<img src='../images/React_Icon.png' style={{'width': 'auto', 'height':'100%'}}/>}
                    >
                    <h3 className="vertical-timeline-element-title">50 CSS, JS and HTML Mini Projects</h3>
                    <h4 className="vertical-timeline-element-subtitle">HTML5, JS, CSS</h4>
                    <p>
                        dec dec dec
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Projects