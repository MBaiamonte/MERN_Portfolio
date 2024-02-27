import React, {useState} from 'react'
import '../index.css'

const WorkHistory = () => {
    //Declarations 
    const [flip1, setFlip1] = useState(false)
    const [flip2, setFlip2] = useState(false)
    const [flip3, setFlip3] = useState(false)

    return (
            <div className='card-grid my-5'>
                <div className={`card ${(flip1 ? "flip" : "")}`}>
                    <div className='front' onClick={()=> setFlip1(!flip1)}>
                        <div>
                            <img src='../images/Inotiv_Logo.png' className='my-2' style={{'maxHeight':'75px', 'height': '30%' ,'width':'auto'}} />
                        </div>
                        <h4>Inotiv Bioanalytical Systems</h4>
                        <h5>Research Associate</h5>
                        <p>Feb/2022 - Dec/2022</p>
                        <p>Boulder, CO</p>
                    </div>
                    <div className='back' onClick={()=> setFlip1(!flip1)}>
                        <h4>Job Duties</h4>
                        <p>back side</p>
                    </div>
                </div>
                <div className={`card ${(flip2 ? "flip" : "")}`}>
                    <div className='front' onClick={()=> setFlip2(!flip2)}>
                        <div>
                            <img src='../images/IEH_Logo.png' className='my-2' style={{'maxHeight':'85px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <h4>IEH Consulting</h4>
                        <h5>Microbiologist</h5>
                        <p>May/2021 - Feb/2022</p>
                        <p>Greeley, CO</p>
                    </div>
                    <div className='back' onClick={()=> setFlip2(!flip2)}>
                        <h4>Job Duties</h4>
                        <p>back side</p>
                    </div>
                </div>
                <div className={`card ${(flip3 ? "flip" : "")}`}>
                    <div className='front' onClick={()=> setFlip3(!flip3)}>
                        <div>
                            <img src='../images/SMO_Logo.webp' className='my-2'style={{'maxHeight':'85px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <h4>Smokey Mountain Outdoors</h4>
                        <h5>Whitewater Raft Guide</h5>
                        <p>dates</p>
                        <p>Hartford, TN</p>
                    </div>
                    <div className='back' onClick={()=> setFlip3(!flip3)}>
                        <h4>Job Duties</h4>
                        <p>back side</p>
                    </div>
                </div>
            </div>

    )
}

export default WorkHistory