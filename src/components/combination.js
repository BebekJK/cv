import React from "react";
import { useState } from "react";
import {AiFillInfoCircle} from "react-icons/ai";
import {PiCertificateFill} from "react-icons/pi";
import {AiFillProject} from "react-icons/ai";
import About from "./About";
import Project from "./Project";
import Credentials from "./Credentials";

const Combination = ({windowSize}) => {

    const [content, setContent] = useState("About")
    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => {setIsHovered(true)}
    const handleMouseLeave = () => {setIsHovered(false)}

    return (
        windowSize.innerWidth > 1024?
        (
            <div name="more" id="more" className="bg-transparent w-[full] h-screen z-[10] flex flex-col justify-center items-center">
                <div className="bg-transparent w-full h-screen z-10 flex flex-col justify-center items-center">
                    <div className="w-[60%] h-16 my-1 rounded-lg shadow-[0_20px_25px_10px_rgb(0,0,0)] flex items-center justify-between text-lg font-bold bg-transparent">
                        <button className={"z-[1] flex items-center justify-center text-white h-full bg-zinc-800 w-[calc(33%)] rounded-md transition-all duration-500 hover:bg-[#800080] " + ((content === "About")? "bg-[#800080] -translate-y-2 shadow-[0px_10px_10px_-3px_#A000A0]":"")} onClick={() => setContent("About")}
                            onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                            <AiFillInfoCircle className="h-full"/>
                            About Me
                        </button>
                        <button className={"z-[1] flex items-center justify-center text-white h-full bg-zinc-800 w-[calc(33%)] rounded-md transition-all duration-500 hover:bg-[#800080] " + (content === "Project"? "bg-[#800081] -translate-y-2 shadow-[0px_10px_10px_-3px_#A000A0]" :"")} onClick={() => setContent("Project")}
                            onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                            <AiFillProject className="h-full"/>
                            My Projects
                        </button>
                        <button className={"z-[1] flex items-center justify-center text-white h-full bg-zinc-800 w-[calc(33%)] rounded-md transition-all duration-500 hover:bg-[#800080] " + (content === "Credential"? "bg-[#800081] -translate-y-2 shadow-[0px_10px_10px_-3px_#A000A0]":"")} onClick={() => setContent("Credential")}
                            onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                            <PiCertificateFill className="h-full"/>
                            My Credentials
                        </button>
                    </div>
                    <div className="z-[1] w-[60%] h-3/4 bg-zinc-800 rounded-lg shadow-[0_20px_25px_10px_rgb(0,0,0)] my-0 text-white">
                        {
                            content === "About"? <About windowSize={windowSize}/>: content === "Project"? <Project windowSize={windowSize}/>: <Credentials windowSize={windowSize}/>
                        }
                    </div>
                </div>
            </div>
        )
        :
        windowSize.innerWidth > 640?
        (
            <div name="more" id="more" className="bg-transparent w-[full] h-screen z-[10] flex flex-col justify-center items-center">
                <div className="bg-transparent w-full h-screen z-10 flex flex-col justify-center items-center">
                    <div className="w-[80%] h-16 my-1 rounded-lg shadow-[0_20px_25px_10px_rgb(0,0,0)] flex items-center justify-between text-lg font-bold bg-transparent">
                        <button className={"z-[1] flex items-center justify-center text-white h-full bg-zinc-800 w-[calc(33%)] rounded-md transition-all duration-500 hover:bg-[#800080] " + ((content === "About")? "bg-[#800081] -translate-y-2 shadow-[0px_10px_10px_-3px_#A000A0]":"")} onClick={() => setContent("About")}
                            onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                            <AiFillInfoCircle className="h-full"/>
                            About Me
                        </button>
                        <button className={"z-[1] flex items-center justify-center text-white h-full bg-zinc-800 w-[calc(33%)] rounded-md transition-all duration-500 hover:bg-[#800080] " + (content === "Project"? "bg-[#800081] -translate-y-2 shadow-[0px_10px_10px_-3px_#A000A0]" :"")} onClick={() => setContent("Project")}
                            onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                            <AiFillProject className="h-full"/>
                            My Projects
                        </button>
                        <button className={"z-[1] flex items-center justify-center text-white h-full bg-zinc-800 w-[calc(33%)] rounded-md transition-all duration-500 hover:bg-[#800080] " + (content === "Credential"? "bg-[#800081] -translate-y-2 shadow-[0px_10px_10px_-3px_#A000A0]":"")} onClick={() => setContent("Credential")}
                            onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                            <PiCertificateFill className="h-full"/>
                            My Credentials
                        </button>
                    </div>
                    <div className="z-[1] w-[80%] h-auto bg-zinc-800 rounded-lg shadow-[0_20px_25px_10px_rgb(0,0,0)] my-0 text-white">
                        {
                            content === "About"? <About windowSize={windowSize}/>: content === "Project"? <Project windowSize={windowSize}/>: <Credentials windowSize={windowSize}/>
                        }
                    </div>
                </div>
            </div>
        )
        :
        (
            <div name="more" id="more" className="bg-transparent w-[full] h-screen z-[10] flex flex-col justify-center items-center">
                <div className="bg-transparent w-full h-screen z-10 flex flex-col justify-center items-center">
                    <div className="w-5/6 h-16 my-1 rounded-lg shadow-[0_20px_25px_10px_rgb(0,0,0)] flex items-center justify-between text-lg font-bold bg-transparent">
                        <button className={"z-[1] text-sm flex items-center justify-center text-white h-full bg-zinc-800 w-[calc(33%)] rounded-md transition-all duration-500 hover:bg-[#800080] " + ((content === "About")? "bg-[#800081] -translate-y-2 shadow-[0px_10px_10px_-3px_#A000A0]":"")} onClick={() => setContent("About")}
                            onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                            <AiFillInfoCircle className="h-full"/>
                            About Me
                        </button>
                        <button className={"z-[1] text-sm flex items-center justify-center text-white h-full bg-zinc-800 w-[calc(33%)] rounded-md transition-all duration-500 hover:bg-[#800080] " + (content === "Project"? "bg-[#800081] -translate-y-2 shadow-[0px_10px_10px_-3px_#A000A0]" :"")} onClick={() => setContent("Project")}
                            onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                            <AiFillProject className="h-full"/>
                            My Projects
                        </button>
                        <button className={"z-[1] text-sm flex items-center justify-center text-white h-full bg-zinc-800 w-[calc(33%)] rounded-md transition-all duration-500 hover:bg-[#800080] " + (content === "Credential"? "bg-[#800081] -translate-y-2 shadow-[0px_10px_10px_-3px_#A000A0]":"")} onClick={() => setContent("Credential")}
                            onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                            <PiCertificateFill className="h-full"/>
                            My Credentials
                        </button>
                    </div>
                    <div className="z-[1] w-5/6 h-auto bg-zinc-800 rounded-lg shadow-[0_20px_25px_10px_rgb(0,0,0)] my-0 text-white">
                        {
                            content === "About"? <About windowSize={windowSize}/>: content === "Project"? <Project windowSize={windowSize}/>: <Credentials windowSize={windowSize}/>
                        }
                    </div>
                </div>
            </div>
        )
    )
}

export default Combination;