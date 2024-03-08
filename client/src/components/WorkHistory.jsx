import React from 'react';
import '../index.css';



const WorkHistory = () => {


    return (
        <div className='d-flex flex-column justify-content-center '>
            <h3 className='align-self-center '>Work Experience</h3>
            <div className='card-grid'>
                <div className='card'>
                    <div className='front'>
                        <div>
                            <img src='../images/Inotiv_Logo.png' className='my-2' style={{'maxHeight':'75px', 'height': '30%' ,'width':'auto'}} />
                        </div>
                        <h4>Inotiv Bioanalytical Systems</h4>
                        <h5>Research Associate</h5>
                        <p>Feb 2022 - Dec 2022</p>
                        <p>Boulder, CO</p>
                        <button className='wiggle wiggle-deploy-btn mt-3'>
                            <span className='wiggle-span'><a href="/Work_History">View In Detail</a></span>
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <div className='front'>
                        <div>
                            <img src='../images/IEH_Logo.png' className='my-2' style={{'maxHeight':'85px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <h4>IEH Labs & Consulting</h4>
                        <h5>Microbiologist</h5>
                        <p>May 2021 - Feb 2022</p>
                        <p>Greeley, CO</p>
                        <button className='wiggle wiggle-deploy-btn mt-3'>
                            <span className='wiggle-span'><a href="/Work_History">View In Detail</a></span>
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <div className='front'>
                        <div>
                            <img src='../images/SMO_Logo.webp' className='my-2'style={{'maxHeight':'85px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <h4>Smokey Mountain Outdoors</h4>
                        <h5>Whitewater Raft Guide</h5>
                        <p>Seasonal, May 2018 - Aug 2020</p>
                        <p>Hartford, TN</p>
                        <button className='wiggle wiggle-deploy-btn mt-3'>
                            <span className='wiggle-span'><a href="/Work_History">View In Detail</a></span>
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <div className='front'>
                        <div>
                            <img src='../images/Niles_Logo.webp' className='my-2'style={{'maxHeight':'85px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <h4>Niles Family Dentistry</h4>
                        <h5>Intern</h5>
                        <p>Dec 2016 - Dec 2017</p>
                        <p>Niwot, CO</p>
                        <button className='wiggle wiggle-deploy-btn mt-3'>
                            <span className='wiggle-span'><a href="/Work_History">View In Detail</a></span>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default WorkHistory