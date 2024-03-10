import React from 'react';
import {useNavigate} from 'react-router-dom'
import '../index.css';



const WorkHistory = () => {
    const navigate = useNavigate()
    const workLinkHandler = () => {
        navigate('/Work_History')
    }

    return (
        <div className='d-flex flex-column justify-content-center '>
            <h3 className='align-self-center' style={{'color':'#163958'}}>Work Experience</h3>
            <div className='card-grid'>
                <div className='card'>
                    <div className='front'>
                        <div>
                            <img src='../images/Inotiv_Logo.png' className='my-2' style={{'maxHeight':'75px', 'height': '30%' ,'width':'auto'}} />
                        </div>
                        <h4 style={{'color':'#163958'}} className='text-wrap'>Inotiv Bioanalytical Systems</h4>
                        <h5 style={{'color':'#163958'}} className='text-wrap'>Research Associate</h5>
                        <p style={{color : '#e09f3e'}} className='text-wrap'>Feb 2022 - Dec 2022</p>
                        <p  style={{'color':'#1F577A'}} className='text-wrap'>Boulder, CO</p>
                        <button className='wiggle wiggle-deploy-btn mt-3' onClick={workLinkHandler}>
                            <span className='wiggle-span'><a style={{'color':'#40916c'}}>View In Detail</a></span>
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <div className='front'>
                        <div>
                            <img src='../images/IEH_Logo.png' className='my-2' style={{'maxHeight':'85px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <h4 style={{'color':'#163958'}} className='text-wrap'>IEH Labs & Consulting</h4>
                        <h5 style={{'color':'#163958'}} className='text-wrap'>Microbiologist</h5>
                        <p style={{color : '#e09f3e'}} className='text-wrap'>May 2021 - Feb 2022</p>
                        <p style={{'color':'#1F577A'}} className='text-wrap'>Greeley, CO</p>
                        <button className='wiggle wiggle-deploy-btn mt-3' onClick={workLinkHandler}>
                            <span className='wiggle-span'><a style={{'color':'#40916c'}}>View In Detail</a></span>
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <div className='front'>
                        <div>
                            <img src='../images/SMO_Logo.webp' className='my-2'style={{'maxHeight':'85px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <h4 style={{'color':'#163958'}} className='text-wrap'>Smokey Mountain Outdoors</h4>
                        <h5 style={{'color':'#163958'}} className='text-wrap'>Whitewater Raft Guide</h5>
                        <p style={{color : '#e09f3e'}} className='text-wrap'>Seasonal, May 2018 - Aug 2020</p>
                        <p style={{'color':'#1F577A'}} className='text-wrap'>Hartford, TN</p>
                        <button className='wiggle wiggle-deploy-btn mt-3' onClick={workLinkHandler}>
                            <span className='wiggle-span'><a style={{'color':'#40916c'}}>View In Detail</a></span>
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <div className='front'>
                        <div>
                            <img src='../images/Niles_Logo.webp' className='my-2'style={{'maxHeight':'85px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <h4 style={{'color':'#163958'}} className='text-wrap'>Niles Family Dentistry</h4>
                        <h5 style={{'color':'#163958'}}>Intern</h5>
                        <p style={{color : '#e09f3e'}} className='text-wrap'>Dec 2016 - Dec 2017</p>
                        <p style={{'color':'#1F577A'}} className='text-wrap'>Niwot, CO</p>
                        <button className='wiggle wiggle-deploy-btn mt-3' onClick={workLinkHandler}>
                            <span className='wiggle-span'><a style={{'color':'#40916c'}}>View In Detail</a></span>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default WorkHistory