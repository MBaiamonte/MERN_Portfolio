import React, {useState} from 'react';
import '../index.css';
import {useNavigate} from 'react-router-dom';


const WorkHistory = () => {
    //Declarations 
    const [flip1, setFlip1] = useState(false);
    const [flip2, setFlip2] = useState(false);
    const [flip3, setFlip3] = useState(false);
    const [flip4, setFlip4] = useState(false);
    const navigate = useNavigate();

    //Functions
    const workNavigation = () =>{
        navigate('/Work_History')
    }

    return (
        <div className='d-flex flex-column justify-content-center '>
            <h3 className='align-self-center '>Work Experience</h3>
            <div className='card-grid'>
                <div className={`card ${(flip1 ? "flip" : "")}`}>
                    <div className='front' onClick={()=> setFlip1(!flip1)}>
                        <div>
                            <img src='../images/Inotiv_Logo.png' className='my-2' style={{'maxHeight':'75px', 'height': '30%' ,'width':'auto'}} />
                        </div>
                        <h4>Inotiv Bioanalytical Systems</h4>
                        <h5>Research Associate</h5>
                        <p>Feb 2022 - Dec 2022</p>
                        <p>Boulder, CO</p>
                        <div className='mt-2'>
                            <img src="../images/flip_card_icon.png" alt="flip icon" style={{'maxHeight':'25px', 'height': '30%' ,'maxWidth':'100%'}}/>
                        </div>
                    </div>
                    <div className='back' onClick={()=> setFlip1(!flip1)}>
                        <div>
                            <img src="../images/histology_clip_art.png" alt="flip icon" style={{'maxHeight':'95px', 'height': '30%' ,'maxWidth':'100%'}}/>
                        </div>
                        <h4>Inotiv Bioanalytical Systems</h4>
                        <h5>Research Associate | Histologist </h5>
                        <button onClick={workNavigation}>View in Detail</button>
                        <div>
                            <img src="../images/flip_card_icon.png" alt="flip icon" className='mt-3' style={{'maxHeight':'25px', 'height': '30%' ,'maxWidth':'100%'}}/>
                        </div>
                    </div>
                </div>
                <div className={`card ${(flip2 ? "flip" : "")}`}>
                    <div className='front' onClick={()=> setFlip2(!flip2)}>
                        <div>
                            <img src='../images/IEH_Logo.png' className='my-2' style={{'maxHeight':'85px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <h4>IEH Labs & Consulting</h4>
                        <h5>Microbiologist</h5>
                        <p>May 2021 - Feb 2022</p>
                        <p>Greeley, CO</p>
                        <div className='mt-2'>
                            <img src="../images/flip_card_icon.png" alt="flip icon" style={{'maxHeight':'25px', 'height': '30%' ,'maxWidth':'100%'}}/>
                        </div>
                    </div>
                    <div className='back' onClick={()=> setFlip2(!flip2)}>
                        <div>
                            <img src="../images/microbiologist_clip_art.png" alt="flip icon" style={{'maxHeight':'95px', 'height': '30%' ,'maxWidth':'100%'}}/>
                        </div>
                        <h4>IEH Labs & Consulting</h4>
                        <h5>Microbiologist</h5>
                        <button onClick={workNavigation}>View in Detail</button>
                        <div>
                            <img src="../images/flip_card_icon.png" alt="flip icon"  className='mt-3' style={{'maxHeight':'25px', 'height': '30%' ,'maxWidth':'100%'}}/>
                        </div>
                    </div>
                </div>
                <div className={`card ${(flip3 ? "flip" : "")}`}>
                    <div className='front' onClick={()=> setFlip3(!flip3)}>
                        <div>
                            <img src='../images/SMO_Logo.webp' className='my-2'style={{'maxHeight':'85px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <h4>Smokey Mountain Outdoors</h4>
                        <h5>Whitewater Raft Guide</h5>
                        <p>Seasonal, May 2018 - Aug 2020</p>
                        <p>Hartford, TN</p>
                        <div className='mt-2'>
                            <img src="../images/flip_card_icon.png" alt="flip icon"  style={{'maxHeight':'25px', 'height': '30%' ,'maxWidth':'100%'}}/>
                        </div>
                    </div>
                    <div className='back' onClick={()=> setFlip3(!flip3)}>
                        <div>
                            <img src="../images/rafting_clipart.png" alt="flip icon" style={{'maxHeight':'85px', 'height': '30%' ,'maxWidth':'100%'}}/>
                        </div>
                        <h4>Smokey Mountain Outdoors</h4>
                        <h5>Whitewater Raft Guide</h5>
                        <button onClick={workNavigation}>View in Detail</button>
                        <div>
                            <img src="../images/flip_card_icon.png" alt="flip icon" className='mt-3' style={{'maxHeight':'25px', 'height': '30%' ,'maxWidth':'100%'}}/>
                        </div>
                    </div>
                </div>
                <div className={`card ${(flip4 ? "flip" : "")}`}>
                    <div className='front' onClick={()=> setFlip4(!flip4)}>
                        <div>
                            <img src='../images/Niles_Logo.webp' className='my-2'style={{'maxHeight':'85px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <h4>Niles Family Dentistry</h4>
                        <h5>Intern</h5>
                        <p>Dec 2016 - Dec 2017</p>
                        <p>Niwot, CO</p>
                        <div className='mt-2'>
                            <img src="../images/flip_card_icon.png" alt="flip icon"  style={{'maxHeight':'25px', 'height': '30%' ,'maxWidth':'100%'}}/>
                        </div>
                    </div>
                    <div className='back' onClick={()=> setFlip4(!flip4)}>
                        <div>
                            <img src="../images/Male_Dentist.webp" alt="flip icon" style={{'maxHeight':'85px', 'height': '30%' ,'maxWidth':'100%'}}/>
                        </div>
                        <h4>Niles Family Dentistry</h4>
                        <h5>Intern</h5>
                        <button onClick={workNavigation}>View in Detail</button>
                        <div>
                            <img src="../images/flip_card_icon.png" alt="flip icon" className='mt-3' style={{'maxHeight':'25px', 'height': '30%' ,'maxWidth':'100%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkHistory