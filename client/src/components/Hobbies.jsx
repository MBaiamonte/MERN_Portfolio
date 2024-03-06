import React, {useState} from 'react'

const Hobbies = () => {
    const [activePanel, setActivePanel] = useState(null);

    const images = [
        { id: 1, title: "Rafting", url: "../images/SMO_Rafting_2.JPG", color: "#FF0000" },
        { id: 2, title: "Fishing", url: "../images/Fishing_Boat.PNG", color: "#FF0000" },
        { id: 3, title: "Snowmobiling", url: "../images/Snowmobiling.jpg", color: "rgb(0, 255, 0)" },
        { id: 4, title: "Scuba Diving", url: "../images/Diving_2.jpg", color: "rgba(255, 165, 0, 0.9)" },
        { id: 5, title: "Hunting", url: "../images/Hunting.jpg", color: "#000" },
    ];

    const handleClick = (id) => {
        setActivePanel(id); // Set the active panel
    };

    return (
        <div>
            <div>
                <div id="header" className='d-flex flex-column align-items-center justify-content-center'>
                    <h3>Hobbies</h3>
                    <p>(Click Image to Expand)</p>
                </div>
                <div className="container">
                    {images.map((image) => (
                        <div
                            key={image.id}
                            className={`panel ${activePanel === image.id ? 'active' : ''}`}
                            style={{
                                backgroundImage: `url(${image.url})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}
                            onClick={() => handleClick(image.id)}
                        >
                            <h3 style={{ color: image.color }}>{image.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Hobbies