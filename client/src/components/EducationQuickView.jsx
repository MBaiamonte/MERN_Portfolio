import React, {useState} from 'react';
// import { Container, Card, Row , Col, Button} from 'react-bootstrap';

// import {Link} from 'react-router-dom'

const EducationQuickView = () => {
        //Declarations 
        const [flip1, setFlip1] = useState(false)
        const [flip2, setFlip2] = useState(false)
        const [flip3, setFlip3] = useState(false)
    return (
        <>

        <div className='card-grid my-5'>
        <div className={`card education ${(flip1 ? "flip" : "")}`}>
            <div className='front' onClick={()=> setFlip1(!flip1)}>
                <div>
                    <img src="../images/UAF_Banner.png" className='my-2' style={{'maxHeight':'75px', 'height': '30%' ,'maxWidth':'100%'}} />
                </div>
                <h4>University of Alaska Fairbanks</h4>
                <h5>Bachelors in Biology</h5>
                <p>August 2019 - May 2021</p>
                <p>Boulder, CO</p>
            </div>
            <div className='back' onClick={()=> setFlip1(!flip1)}>
                <h4>GPA</h4>
                <p>back side</p>
            </div>
        </div>

        <div className={`card education ${(flip2 ? "flip" : "")}`}>
            <div className='front' onClick={()=> setFlip2(!flip2)}>
                <div>
                    <img src='../images/Coding_Dojo_Bootcamp_Banner.png' className='my-2' style={{'maxHeight':'85px', 'height': '40%' ,'maxWidth':'100%'}} />
                </div>
                <h4>Coding Dojo Bootcamp</h4>
                <h5>Full-Stack Web Development</h5>
                <h6>MERN, Java, and Python</h6>
                <p>Dec 2022 - Oct 2023</p>
                <p>Remote</p>
            </div>
            <div className='back' onClick={()=> setFlip2(!flip2)}>
                <h4>Job Duties</h4>
                <p>back side</p>
            </div>
        </div>

        <div className={`card education ${(flip3 ? "flip" : "")}`}>
            <div className='front' onClick={()=> setFlip3(!flip3)}>
                <div>
                    <img src='../images/CU_Boulder_Banner_2.png' className='my-2' style={{'maxHeight':'85px', 'height': '40%' ,'maxWidth':'100%'}} />
                </div>
                <h4>University Colorado Boulder</h4>
                <h5>Studied Integrated Physiology</h5>
                <p>August 2016 - May 2018</p>
                <p>Boulder, CO</p>
            </div>
            <div className='back' onClick={()=> setFlip3(!flip3)}>
                <h4>Job Duties</h4>
                <p>back side</p>
            </div>
        </div>
    </div>
    </>
    )
}

export default EducationQuickView