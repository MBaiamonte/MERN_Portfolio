import React, {useState} from 'react';


const EducationQuickView = () => {
        //Declarations 
        const [flip1, setFlip1] = useState(false);
        const [flip2, setFlip2] = useState(false);
        const [flip3, setFlip3] = useState(false);
        //Functions and handlers

    return (
        <div className='d-flex flex-column'>
            <h3 className='align-self-center'>Educational Journey</h3>
            <p className='align-self-center mb-0'>(Click to Flip Cards)</p>
            <div className='card-grid'>
            <div className={`card education ${(flip1 ? "flip" : "")}`}>
                <div className='front' onClick={()=> setFlip1(!flip1)}>
                    <div>
                        <img src="../images/UAF_Banner.png" className='my-2' style={{'maxHeight':'75px', 'height': '30%' ,'maxWidth':'100%'}} />
                    </div>
                    <h4>University of Alaska Fairbanks</h4>
                    <h5>Bachelors in Biology</h5>
                    <p>August 2019 - May 2021</p>
                    <div>
                        <img src="../images/flip_card_icon.png" alt="flip icon" style={{'maxHeight':'25px', 'height': '30%' ,'maxWidth':'100%'}}/>
                    </div>
                </div>
                <div className='back d-flex flex-column align-items-center' onClick={()=> setFlip1(!flip1)}>
                    <div>
                        <img src="../images/Nanook_Bear.png" className='my-2' style={{'maxHeight':'75px', 'height': '30%' ,'maxWidth':'100%'}} />
                    </div>
                    <h4>University of Alaska Fairbanks</h4>
                    <h6>Aug 2019 - May 2021 | GPA: 3.7</h6>
                    <a className='rotating-board' href="/Education">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            View in Detail
                        </a>
                    <div  className='mt-3'>
                        <img src="../images/flip_card_icon.png" alt="flip icon" style={{'maxHeight':'25px', 'height': '30%' ,'maxWidth':'100%'}}/>
                    </div>
                </div>
            </div>
            <div className={`card education ${(flip2 ? "flip" : "")}`}>
                <div className='front' onClick={()=> setFlip2(!flip2)}>
                    <div>
                        <img src='../images/Coding_Dojo_Bootcamp_Banner.png' className='my-2' style={{'maxHeight':'75px', 'height': '30%' ,'maxWidth':'100%'}} />
                    </div>
                    <h4>Coding Dojo Bootcamp</h4>
                    <h5>Full-Stack Web Development</h5>
                    <h6>MERN, Java, and Python</h6>
                    <p>Dec 2022 - Oct 2023</p>
                    <div>
                        <img src="../images/flip_card_icon.png" alt="flip icon" style={{'maxHeight':'25px', 'height': '30%' ,'maxWidth':'100%'}}/>
                    </div>
                </div>
                <div className='back d-flex flex-column align-items-center' onClick={()=> setFlip2(!flip2)}>
                    <div>
                        <img src="../images/dojo_icon.png" className='my-2' style={{'maxHeight':'75px', 'height': '30%' ,'maxWidth':'100%'}} />
                    </div>
                    <h4>Coding Dojo Bootcamp</h4>
                    <h6>Dec 2022 - Oct 2023</h6>
                    <a className='rotating-board' href="/Education">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            View in Detail
                        </a>
                    <div  className='mt-1'>
                        <img src="../images/flip_card_icon.png" alt="flip icon" style={{'maxHeight':'25px', 'height': '30%' ,'maxWidth':'100%'}}/>
                    </div>
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
                    <div>
                        <img src="../images/flip_card_icon.png" alt="flip icon" style={{'maxHeight':'25px', 'height': '30%' ,'maxWidth':'100%'}}/>
                    </div>
                </div>
                <div className='back d-flex flex-column align-items-center' onClick={()=> setFlip3(!flip3)}>
                    <div>
                        <img src="../images/CU_Logo.png" className='my-2' style={{'maxHeight':'75px', 'height': '30%' ,'maxWidth':'100%'}} />
                    </div>
                    <h4>University Colorado Boulder</h4>
                    <h6>August 2016 - May 2018</h6>
                    <a className='rotating-board' href="/Education">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            View in Detail
                        </a>
                    <div  className='mt-4'>
                        <img src="../images/flip_card_icon.png" alt="flip icon" style={{'maxHeight':'25px', 'height': '30%' ,'maxWidth':'100%'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default EducationQuickView