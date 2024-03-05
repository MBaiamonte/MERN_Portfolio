import React from 'react'
import Separator from './Separator'

const LandingHeader = () => {
    return (
        <div id='landing-header-div' className='d-flex flex-column align-items-center justify-content-top '>
            <Separator/>
            <div className='mb-2 text-center'>
                <h1>Full Stack Web Developer</h1>
            </div>
            <div className='d-flex align-items-center justify-content-around w-100 flex-wrap'>
            <div className='text-center' style={{'width' : '40%'}}>
                    {/* <h2>Matthew Baiamonte</h2> */}
                    <p> Hi! I am a full stack web developer who loves all things tech. Im passionate about leveraging the latest in web development trends, 
                        and am committed to pushing the boundaries of online platforms to create intuitive and engaging user experiences. 
                        I specialize in front-end development, but enjoy building complex backends to support it.  
                    </p>
                    <p> 
                        I got my start at Coding Dojo Bootcamp and fell in love with code! 
                        Since then, I have worked to expand on my skill sets and knowledge through research while incorporating it into new projects. 
                    </p>
                    <p>
                        I'm always looking for new challenges and opportunities, and I'm excited to see what the future holds for me in the world of tech.
                    </p>
                </div>
                <div className='d-flex flex-column text-center'>
                    <div >
                        <h5 className='mr-3'>Languages & Stacks</h5>
                        <p>
                            MERN | Python | Java | HTML5 | CSS3 | JS (ES6, Node.js)
                        </p>
                    </div>
                    <div className='d-flex flex-column'>
                        <h5 className='mr-3'>Frameworks & Libraries</h5>
                        <p>
                            Flask | Jinja2 | Spring Boot | JQuery | Express | React | Bootstrap | Many Others 
                        </p>
                    </div>
                    <div className='d-flex flex-column'>
                        <h5 className='mr-3'>Databases</h5>
                        <p>
                            MongoDB | MongoDB Atlas | MySQL | Mongoose
                        </p>
                    </div>
                    <div className='d-flex flex-column'>
                        <h5 className='mr-3'>Tools</h5>
                        <p className='mb-0'>
                            GitHub | PostMan | Spring Tool Suite | Axios  
                        </p>
                        <p>
                            Vite & CRA | Render Cloud Hosting | JSON | MySQL Workbench | Others
                        </p>
                    </div>
                </div>
                
            </div>
            <div className='d-flex flex-column align-items-center'>
                <h6 className='mt-5' style={{'color' : 'black'}}>Scroll to Learn More about me!</h6>
                <div className='scrolldown'>
                    <div className="chevrons">
                    <div className='chevrondown'></div>
                    <div className='chevrondown'></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LandingHeader