import React, {useState} from "react";
import certifications from "./const";
import './Credentials.css'
import resume from '../assets/Resume_Kevin_Jonathan_Kusnomo.pdf'

const Credentials = () => {
    const completed = certifications.filter((certificate) => {return certificate.status})


    const [isHovered, setIsHovered] = useState(-1)

    const handleMouseEnter = (index) => {
        setIsHovered(index)
    }
    const handleMouseLeave = () => {
        setIsHovered(-1)
    }

    return(
        <div id="credentials" className="bg-transparent w-full h-full px-8 py-8">
            <h2 className="text-[#B000B0] font-bold">CERTIFICATES</h2>
            <div className="h-[70%] flex flex-row flex-wrap justify-evenly items-center mt-8">
                { 
                    completed.map((certificate, index) => {
                        return(
                            <a href={certificate.url} target="_blank" className={"flex items-center justify-center h-[45%] w-[40%] no-underline text-white py-4 px-4 rounded-md shadow-[0px_10px_15px_-5px_rgb(0,0,0)] transition-all duration-500 ease-in-out" + (isHovered === index? " bg-[#800080] -translate-y-2 -translate-x-2 shadow-[5px_10px_15px_0px_rgb(16,0,16)]": "")}
                                onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={()=> handleMouseLeave()}>
                                <div className="text-xl text-center font-bold">{certificate.name}</div>
                                {/* <div>{certificate.organization}</div> */}
                            </a>
                        )
                    })
                }
            </div>
            <div className="mt-8">
                <span>Check out my resume </span>
                <a className="text-[#B000B0] no-underline font-bold" target="_blank" href={resume}>HERE</a>
            </div>
        </div>
    )
}

export default Credentials