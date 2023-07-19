import React, { useState } from "react";
import photo from '../assets/image_6_1.png'
import bg from '../assets/bg.webp';
import "./Profile.css"
import { TypeAnimation } from 'react-type-animation';
import { Image } from "react-bootstrap";
import { Link } from "react-scroll";

const About = ({setFrame}) => {
    const name = "I'm Kevin Jonathan Kusnomo"
    const title1 = "Aspiring Data Scientist"
    const title2 = "Machine Learning Enthusiast"

    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => {setIsHovered(true)}
    const handleMouseLeave = () => {setIsHovered(false)}

    return (
        <div style={{padding: "0vh 10vw 0vh 7vw", width:"65vw", height: "50vh"}}>
            <div style={{height: "45vh", color: ""}}>
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
                    fontSize: "2em",
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
    return(
        <div id="profile" style={{
            width:"100vw",
            height:"100vh",
            display:'flex',
            backgroundColor:'#EDEDED'
            // background:`url(${bg})`
            }}>

            <div id="profile-about" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div>
                    <About setFrame={setFrame}/>
                </div>
                
            </div>    
            
            <Image src={photo} alt="photo" style={{marginLeft:'2vw', borderRadius: '20%'}} fluid />
        </div>
    )
}

export default Profile;