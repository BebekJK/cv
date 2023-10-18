import React, { useState } from "react";
import photo from '../assets/image_6_1.png'
import { TypeAnimation } from 'react-type-animation';
import { Image } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Profile.css"

const About = ({windowSize}) => {
    const title1 = "Aspiring Data Scientist"
    const title2 = "Machine Learning Enthusiast"

    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => {setIsHovered(true)}
    const handleMouseLeave = () => {setIsHovered(false)}

    return (
        windowSize.innerWidth >= 1024?
        (
            <div className="w-[65vw] h-[40vh] pl-12 pr-8 flex flex-col">
                <div className="text-2xl text-white font-bold">Hello Everyone! I'm</div>
                <div className="text-5xl text-white font-bold">Kevin Jonathan Kusnomo</div>
                <div id="typing-animation" className="text-[#B000B0] font-bold text-2xl leading-relaxed">
                    <span className="text-white">I am a </span>
                    <TypeAnimation 
                        sequence={[
                            title1,
                            2000,
                            title2,
                            2000,
                        ]}
                        speed={175}
                        repeat={Infinity}
                    />
                </div>

                <div className="mt-8 text-white text-s font-light">I have dedicated myself on learning machine learning and data science fields. My determination has led me to learn skills such as computer vision, natural language processing, etc.. </div>
                <div className={"mt-8 transition duration-500 ease-in-out" + (isHovered? " -translate-y-[5px] -translate-x-[2px]": "")}>
                    <Link to="more" smooth={true} duration={200} offset={50} className={"rounded-md shadow-[0px_5px_10px_-2px_rgb(0,0,0)] px-6 py-2 text-lg no-underline text-white font-bold " + (isHovered? "bg-[#800080] -translate-y-[5px] -translate-x-[2px] shadow-[5px_5px_15px_0px_rgb(16,0,16)]": "")}
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        More About Me
                    </Link>
                </div>
            </div>
        )
        :
        windowSize.innerWidth >= 640?
        (
            <div className="w-[55vw] h-2/3 pl-8 pr-8 flex flex-col">
                <div className="text-lg text-white font-bold">Hello Everyone! I'm</div>
                <div className="text-2xl text-white font-bold">Kevin Jonathan Kusnomo</div>
                <div id="typing-animation" className="text-[#B000B0] font-bold text-lg leading-relaxed">
                    <span className="text-white">I am a </span>
                    <TypeAnimation 
                        sequence={[
                            title1,
                            2000,
                            title2,
                            2000,
                        ]}
                        speed={175}
                        repeat={Infinity}
                    />
                </div>

                <div className="mt-8 text-white text-s font-light">I have dedicated myself on learning machine learning and data science fields. My determination has led me to learn skills such as computer vision, natural language processing, etc.. </div>
                <div className={"mt-8 transition duration-500 ease-in-out" + (isHovered? " -translate-y-[5px] -translate-x-[2px]": "")}>
                    <Link to="more" smooth={true} duration={200} offset={50} className={"rounded-md shadow-[0px_5px_10px_-2px_rgb(0,0,0)] px-6 py-2 text-lg no-underline text-white font-bold " + (isHovered? "bg-[#800080] -translate-y-[5px] -translate-x-[2px] shadow-[5px_5px_15px_0px_rgb(16,0,16)]": "")}
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        More About Me
                    </Link>
                </div>
            </div>
        )
        :
        (
            <div className="w-[100vw] h-1/2 pl-6 pr-6 flex flex-col justify-evenly">
                <div className="text-md text-white font-bold">Hello Everyone! I'm</div>
                <div className="text-xl text-white font-bold">Kevin Jonathan Kusnomo</div>
                <div id="typing-animation" className="text-[#B000B0] font-bold text-md leading-relaxed">
                    <span className="text-white">I am a </span>
                    <TypeAnimation 
                        sequence={[
                            title1,
                            2000,
                            title2,
                            2000,
                        ]}
                        speed={175}
                        repeat={Infinity}
                    />
                </div>

                <div className="mt-8 text-white text-s font-light">I have dedicated myself on learning machine learning and data science fields. My determination has led me to learn skills such as computer vision, natural language processing, etc.. </div>
                <div className={"mt-8 transition duration-500 ease-in-out" + (isHovered? " -translate-y-[5px] -translate-x-[2px]": "")}>
                    <Link to="more" smooth={true} duration={200} offset={50} className={"rounded-md shadow-[0px_5px_10px_-2px_rgb(0,0,0)] px-6 py-2 text-lg no-underline text-white font-bold " + (isHovered? "bg-[#800080] -translate-y-[5px] -translate-x-[2px] shadow-[5px_5px_15px_0px_rgb(16,0,16)]": "")}
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        More About Me
                    </Link>
                </div>
            </div>
        )
    )
}

const Profile = ({windowSize}) => {
    
    return(
        windowSize.innerWidth >= 1024?
        (
            <div id="profile" style={{
                }} className="w-full h-screen flex justify-evenly items-center bg-transparent">
                <div className="h-screen w-full flex justify-evenly items-center bg-transparent z-10">
                    <div id="profile-about" className="flex items-center content-center z-10 bg-zinc-800 w-1/2 h-2/3 rounded-lg shadow-[0_20px_25px_10px_rgb(0,0,0)]">
                        <About windowSize={windowSize}/>
                    </div>
                    <Image id="profile-image" src={photo} alt="photo" className="z-10 h-5/6 mb-12 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-600 shadow-[0_20px_25px_10px_rgb(0,0,0)] h-1/3"/>
                </div>
            </div>
        )
        :
        windowSize.innerWidth >= 640?
        (
            <div id="profile" style={{
                }} className="w-full h-screen flex justify-evenly items-center bg-transparent">
                <div className="h-screen w-full flex justify-evenly items-center bg-transparent z-10">
                    <div id="profile-about" className="flex items-center content-center z-10 bg-zinc-800 w-1/2 h-2/5 rounded-lg shadow-[0_20px_25px_10px_rgb(0,0,0)]">
                        <About windowSize={windowSize}/>
                    </div>
                    <Image id="profile-image" src={photo} alt="photo" className="z-10 h-[40%] rounded-full bg-gradient-to-br from-zinc-900 to-zinc-600 shadow-[0_20px_25px_10px_rgb(0,0,0)]"/>
                </div>
            </div>
        ):
        (
            <div id="profile" style={{
                }} className="w-full h-screen flex justify-evenly items-center bg-transparent">
                <div className="h-screen w-full flex flex-col justify-evenly items-center bg-transparent z-10">
                    <Image id="profile-image" src={photo} alt="photo" className="z-10 h-1/3 mb-12 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-600 shadow-[0_20px_25px_10px_rgb(0,0,0)]"/>
                    <div id="profile-about" className="flex items-center content-center z-10 bg-zinc-800 w-[85%] h-1/2 rounded-lg shadow-[0_20px_25px_10px_rgb(0,0,0)]">
                        <About windowSize={windowSize}/>
                    </div>
                </div>
            </div>
        )
    )
}

export default Profile;