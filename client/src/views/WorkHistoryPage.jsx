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
        fade: true, 
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
            <div className='d-flex justify-content-center align-items-center mb-5 mt-1'>
                <h4  className='mb-0'>Work History</h4>
                <p className='mb-0 ml-2' >(hover curser to pause)</p>
            </div>
            <div className='mb-4' style={{'width': '70%'}}>
                <Slider {...settings} >
                <div className='slide'>
                        <div className='justify-content-center d-flex align-items-center'>
                            <div style={{'width':'40%'}} className=' d-flex flex-column align-items-center'>
                                <h4 style={{'overflowWrap': 'break-word'}}>Inotiv Bioanalytical Systems</h4>
                                <h5>Research Associate</h5>
                                <p className='mb-0'>Feb 2022 - Dec 2022</p>
                                <p>Boulder, CO</p>
                            </div>
                            <img src='../images/Inotiv_Logo.png' style={{'maxHeight':'150px', 'height': '50%' ,'width':'auto'}} />
                        </div>
                        <div className='d-flex justify-content-between text-center flex-column mx-4 '>
                            <h5>Duties</h5>
                            <li> Created and implemented new processes and SOPs within the Histology, Logistics, Information, and Immuno-Histochemistry departments. Resulted in optimized workflows and improved efficiency. </li>
                            <li>Maintained and updated all Safety Data Sheet (SDS) documentation for chemicals and substances, demonstrating meticulous attention to detail and compliance with safety regulations. </li>
                            <li>Effectively managed project workflows through different departments and aided other departments as needed. </li>
                            <li>Maintained project workflow between departments and aided the lab manager as needed.</li>
                        </div>
                    </div>
                    <div className='slide'>
                        <div className='justify-content-center d-flex align-items-center'>
                            <div style={{'width':'40%'}} className=' d-flex flex-column align-items-center'>
                                <h4 style={{'overflowWrap': 'break-word'}}>IEH Labs & Consulting</h4>
                                <h5>Microbiologist</h5>
                                <p className='mb-0'>May 2021 - Feb 2022</p>
                                <p>Greeley, CO</p>
                            </div>
                            <img src='../images/IEH_Logo.png' className='my-2' style={{'maxHeight':'150px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <div className='d-flex justify-content-between  mx-4 flex-column text-center'>
                            <h5>Duties</h5>
                            <li>Processed food samples and amplified bacterial content through incubation processes with thorough workflow management.</li>
                            <li>Conducted PCR to determine the presence of pathogenic bacterial strains. </li>
                            <li>Demonstrated expertise in plating and counting bacterial cultures on agar plates. </li>
                            <li>Maintained project workflow between departments and aided the chief microbiologist as needed.</li>
                        </div>
                    </div>
                    <div className='slide'>
                        <div className='justify-content-center d-flex align-items-center'>
                            <div style={{'width':'40%', 'textAlign' : 'center'}} className=' d-flex flex-column align-items-center'>
                                <h4 style={{'overflowWrap': 'break-word'}}>Niles Family Dentistry</h4>
                                <h5>Intern</h5>
                                <p className='mb-0'>Dec 2016 - Dec 2017</p>
                                <p>Niwot, CO</p>
                            </div>
                            <img src='../images/Niles_Logo.webp' className='my-2' style={{'maxHeight':'150px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <div className='d-flex justify-content-between text-center flex-column mx-4 '>
                            <h5>Duties</h5>
                            <li>Aided Dr Niles as needed to ensure efficiency and expedite the exam process to reduce wait times for patients.</li>
                            <li> Assembled exam room with correct anesthetic and tools needed for appointments.</li>
                            <li>Assisted with dental procedures and observed Dr Niles's methodologies while performing a variety of treatments.</li>
                        </div>
                    </div>
                    <div className='slide'>
                        <div className='justify-content-center d-flex align-items-center'>
                        <div style={{'width':'40%'}} className=' d-flex flex-column align-items-center'>
                                <h4 style={{'overflowWrap': 'break-word', 'textAlign' : 'center'}}>Smokey Mountain Outdoors</h4>
                                <h5>Raft Guide</h5>
                                <p className='mb-0'>May 2018 - Aug 2020</p>
                                <p>Hartford, TN</p>
                            </div>
                            <img src='../images/SMO_Logo.webp' className='my-2' style={{'maxHeight':'150px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <div className='d-flex justify-content-between mx-4 text-center flex-column'>
                            <h5>Duties</h5>
                            <li>Performed swift water rescue to quickly save guests and remove them from potentially dangerous situations</li>
                            <li>Guided families of all ages and experience levels down class four rapids in a safe but fun manner </li>
                            <li>Administered first aid as needed for a variety of injuries as needed. </li>
                            <li>Set river safety for other guides to ensure the quick rescue of guests should an accident occur.  </li>
                        </div>
                    </div>
                </Slider>
            </div>
            <Footer/>
        </div>
    )
}

export default WorkHistoryPage