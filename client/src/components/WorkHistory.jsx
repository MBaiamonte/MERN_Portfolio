import React from 'react';
import '../index.css';



const WorkHistory = () => {


    return (
        <div className='d-flex flex-column justify-content-center '>
            <h3 className='align-self-center' style={{'color':'#163958'}}>Work Experience</h3>
            <div className='card-grid'>
                <div className='card'>
                    <div className='front'>
                        <div>
                            <img src='../images/Inotiv_Logo.png' className='my-2' style={{'maxHeight':'75px', 'height': '30%' ,'width':'auto'}} />
                        </div>
                        <h4 style={{'color':'#163958'}}>Inotiv Bioanalytical Systems</h4>
                        <h5 style={{'color':'#163958'}}>Research Associate</h5>
                        <p style={{color : '#e09f3e'}}>Feb 2022 - Dec 2022</p>
                        <p  style={{'color':'#1F577A'}}>Boulder, CO</p>
                        <button className='wiggle wiggle-deploy-btn mt-3'>
                            <span className='wiggle-span'><a style={{'color':'#40916c'}} href="/Work_History">View In Detail</a></span>
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <div className='front'>
                        <div>
                            <img src='../images/IEH_Logo.png' className='my-2' style={{'maxHeight':'85px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <h4 style={{'color':'#163958'}}>IEH Labs & Consulting</h4>
                        <h5 style={{'color':'#163958'}}>Microbiologist</h5>
                        <p style={{color : '#e09f3e'}}>May 2021 - Feb 2022</p>
                        <p  style={{'color':'#1F577A'}}>Greeley, CO</p>
                        <button className='wiggle wiggle-deploy-btn mt-3'>
                            <span className='wiggle-span'><a style={{'color':'#40916c'}} href="/Work_History">View In Detail</a></span>
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <div className='front'>
                        <div>
                            <img src='../images/SMO_Logo.webp' className='my-2'style={{'maxHeight':'85px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <h4 style={{'color':'#163958'}}>Smokey Mountain Outdoors</h4>
                        <h5 style={{'color':'#163958'}}>Whitewater Raft Guide</h5>
                        <p style={{color : '#e09f3e'}}>Seasonal, May 2018 - Aug 2020</p>
                        <p style={{'color':'#1F577A'}}>Hartford, TN</p>
                        <button className='wiggle wiggle-deploy-btn mt-3'>
                            <span className='wiggle-span'><a style={{'color':'#40916c'}} href="/Work_History">View In Detail</a></span>
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <div className='front'>
                        <div>
                            <img src='../images/Niles_Logo.webp' className='my-2'style={{'maxHeight':'85px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <h4 style={{'color':'#163958'}}>Niles Family Dentistry</h4>
                        <h5 style={{'color':'#163958'}}>Intern</h5>
                        <p style={{color : '#e09f3e'}}>Dec 2016 - Dec 2017</p>
                        <p style={{'color':'#1F577A'}}>Niwot, CO</p>
                        <button className='wiggle wiggle-deploy-btn mt-3'>
                            <span className='wiggle-span'><a style={{'color':'#40916c'}} href="/Work_History">View In Detail</a></span>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default WorkHistory