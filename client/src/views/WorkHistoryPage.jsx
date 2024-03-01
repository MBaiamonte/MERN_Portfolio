import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Separator from '../components/Separator';
import Slider from "react-slick";
import '../index.css'

const WorkHistoryPage = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };
    return (
        <div className='d-flex flex-column align-items-center'>
            <Header/>
            <Separator/>
            <h4>Work History</h4>
            <div className='mb-4' style={{'width': '70%', 'backgroundColor': 'lavenderblush'}}>
                <Slider {...settings} >
                <div className='slide'>
                        <div className='justify-content-center d-flex align-items-center'>
                            <img src='../images/Inotiv_Logo.png' className='my-2' style={{'maxHeight':'150px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <div className='d-flex justify-content-between mt-4 mx-4 '>
                            <div style={{'width':'30%'}} className=' d-flex flex-column align-items-center'>
                                <h4 style={{'overflowWrap': 'break-word'}}>Inotiv Bioanalytical Systems</h4>
                                <h5>Research Associate</h5>
                                <p className='mb-0'>Feb 2022 - Dec 2022</p>
                                <p>Boulder, CO</p>
                            </div>
                            <div style={{'width':'65%'}}>
                                <h5>Duties</h5>
                                <li> Created and implemented new processes and SOPs within the Histology, Logistics, Information, and Immuno-Histochemistry departments. Resulted in optimized workflows and improved efficiency. </li>
                                <li>Maintained and updated all Safety Data Sheet (SDS) documentation for chemicals and substances, demonstrating meticulous attention to detail and compliance with safety regulations. </li>
                                <li>Effectively managed project workflows through different departments and aided other departments as needed. </li>
                                <li>Maintained project workflow between departments and aided the lab manager as needed.</li>
                            </div>
                        </div>
                    </div>
                    <div className='slide'>
                        <div className='justify-content-center d-flex align-items-center'>
                            <img src='../images/IEH_Logo.png' className='my-2' style={{'maxHeight':'150px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <div className='d-flex justify-content-between mt-4 mx-4 '>
                            <div style={{'width':'30%'}} className=' d-flex flex-column align-items-center'>
                                <h4 style={{'overflowWrap': 'break-word'}}>IEH Labs & Consulting</h4>
                                <h5>Microbiologist</h5>
                                <p className='mb-0'>May 2021 - Feb 2022</p>
                                <p>Greeley, CO</p>
                                
                            </div>
                            <div style={{'width':'65%'}}>
                                <h5>Duties</h5>
                                <li>Processed food samples and amplified bacterial content through incubation processes with thorough workflow management.</li>
                                <li>Conducted PCR to determine the presence of pathogenic bacterial strains. </li>
                                <li>Demonstrated expertise in plating and counting bacterial cultures on agar plates. </li>
                                <li>Maintained project workflow between departments and aided the chief microbiologist as needed.</li>
                            </div>
                        </div>
                    </div>
                    <div className='slide'>
                        <div className='justify-content-center d-flex align-items-center'>
                            <img src='../images/Niles_Logo.webp' className='my-2' style={{'maxHeight':'150px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <div className='d-flex justify-content-between mt-4 mx-4 '>
                            <div style={{'width':'30%'}} className=' d-flex flex-column align-items-center'>
                                <h4 style={{'overflowWrap': 'break-word'}}>Niles Family Dentistry</h4>
                                <h5>Intern</h5>
                                <p className='mb-0'>Dec 2016 - Dec 2017</p>
                                <p>Niwot, CO</p>
                            </div>
                            <div style={{'width':'65%'}}>
                                <h5>Duties</h5>
                                <li>ed workflows and improved efficiency. </li>
                                <li>th safety regulations. </li>
                                <li>Eftrv </li>
                                <li>vfevrw.</li>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                </Slider>
            </div>
            <Footer/>
        </div>
    )
}

export default WorkHistoryPage