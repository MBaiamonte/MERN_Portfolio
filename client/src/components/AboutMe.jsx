import React from 'react'

const AboutMe = () => {

    const panels=document.querySelectorAll('.panel') //query selector All is needed since I have multiple panels, it puts all the panels in a node list (similar to array)

//for each takes in a function (arrow function with event listener in this case)
panels.forEach((panel)=>{
    console.log(panel)
    panel.addEventListener('click',()=>{ //listing for a onClick event and when detected runs the below function. takes in event and function. 
        removeActiveClasses()
        panel.classList.add('active') //adds the class of active for a onClick event, classList gives us a list of all the classes we have. 
    })
})

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}//end removeActiveClasses
    return (
        <div>
            <div>
                <div>
                    <h3>About Me</h3>
                </div>
                <div id="header">
                    <h1>Hobbies</h1>
                </div>
                <div className="container">
                    <div className="panel active" style={{'backgroundColor': 'lightcoral'}}>
                        <h3>Arches National Park</h3>
                    </div>
                    <div className="panel" style={{'backgroundColor': 'lightblue'}}>
                        <h3>Acadia National Park</h3>
                    </div>
                    <div className="panel" style={{'backgroundColor': 'lightgreen'}} >
                        <h3>Yellowstone National Park</h3>
                    </div>
                    <div className="panel" style={{'backgroundColor': 'lightyellow'}}>
                        <h3>Grand Canyon National Park</h3>
                    </div>
                    <div className="panel" style={{'backgroundColor': 'green'}}>
                        <h3>Glacier Bay National Park</h3>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default AboutMe