import React, { useState, useEffect } from "react";
import photo from '../assets/image_6_1.png'
import "./Profile.css"
import { TypeAnimation } from 'react-type-animation';
import { Image } from "react-bootstrap";
import { Link } from "react-scroll";

const About = ({screenSize}) => {
    const name = "I'm Kevin Jonathan Kusnomo"
    const title1 = "Aspiring Data Scientist"
    const title2 = "Machine Learning Enthusiast"

    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => {setIsHovered(true)}
    const handleMouseLeave = () => {setIsHovered(false)}

    return (
        <div style={{
                        paddingLeft: "10vw",
                        paddingRight: screenSize.width>=1280? "7vw":
                                      screenSize.width>=768?'3vw': '1vw', 
                        width:  screenSize.width>=1280?"65vw": screenSize.width>=768? "50vw": "45vw", 
                        height: screenSize.width>=480?"50vh":"35vh",
                    }}>
            <div id="typing-animation">
                <TypeAnimation 
                    sequence={[
                        "Hello :D",
                        1000,
                        name,
                        2000,
                        title1,
                        2000,
                        title2,
                        2000
                    ]}
                    speed={175}
                    repeat={Infinity}
                    style={{ fontSize: '5em', fontWeight: "400"}}
                />
            </div>

            <div>
                <button id="start" style={{
                    fontSize: screenSize.width >= 1280? "36px": screenSize.width >= 768? '28px': screenSize.width >= 480? '24px': '12px',
                    marginTop: "5vh",
                    color: "",
                    border: "none",
                    backgroundColor: isHovered ? '#EDEDED' : '#dedede',
                    padding: "10px 20px",
                    borderRadius: "20px",
                    transition: "background-color 0.3s ease"
                }}
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Link to="about">More About Me</Link>
                    {/* More */}
                </button>
            </div>
        </div>
    )
}

const Profile = ({setFrame}) => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

  	function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}
  
  	useEffect(() => {
    		const updateDimension = () => {
      			setScreenSize(getCurrentDimension())
    		}
    		window.addEventListener('resize', updateDimension);
    
		
    		return(() => {
        		window.removeEventListener('resize', updateDimension);
    		})
  	}, [screenSize])
    return(
        <div id="profile" style={{
            width:"100vw",
            height: screenSize.width>=480? "100vh": "60vh",
            display:'flex',
            backgroundColor:'#EDEDED'
            // background:`url(${bg})`
            }}>

            <div id="profile-about" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div>
                    <About setFrame={setFrame} screenSize={screenSize}/>
                </div>
                
            </div>    
            
            <Image id="profile-image" src={photo} alt="photo" style={{
                marginLeft: screenSize.width >= 1280? '2vw':
                            screenSize.width >= 768? '-5vw':
                            screenSize.width >= 480? '-7vw': '0vw',
                borderRadius: '20%',
                aspectRatio: '3/4'
            }} />
        </div>
    )
}

export default Profile;