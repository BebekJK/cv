import React, {useState} from "react";
import "./About.css"
import {AiFillInstagram, AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import {BsTelegram} from "react-icons/bs";
import {BiLogoGmail} from "react-icons/bi";

const aboutText = {
    intro: "I am Kevin J.K from Indonesia, an Information Engineering & Media Student from Nanyang Technological University. Being passionate in the field of technology, I've been doing programming for 5 years, which range from Competitive Programming, Front End Development, and currently Data Science and Machine Learning.",
    contact: "Contact",
    contactList: [
        {
            name: "instagram",
            account: "@kevinjk2802",
            link: "https://www.instagram.com/kevinjk2802/",
            img: <AiFillInstagram className="h-[40px]" size={40}/>,
        },
        {
            name: "telegram",
            account: "@BebekJK",
            link: "",
            img: <BsTelegram className="h-full" size={40}/>,
        },
        {
            name: "github",
            account: "BebekJK",
            link: "https://github.com/BebekJK",
            img: <AiFillGithub className="h-full" size={40}/>,
        },
        {
            name: "LinkedIn",
            account: "Kevin Jonathan Kusnomo",
            link: "https://www.linkedin.com/in/kevin-jonathan-kusnomo-b27733249/",
            img: <AiFillLinkedin className="h-full" size={40}/>,
        },
        {
            name: "G-Mail",
            account: "kevinjk2802@gmail.com",
            link: "",
            img: <BiLogoGmail className="h-full" size={40}/>,
        }
    ],
}

const skills = {
    prog: "Python, C/C++, Java, JavaScript, MySQL",
    ml: "TensorFlow, Keras, Scikit-Learn, NumPy, Pandas, Clustering, Decission Trees",
    fe: "React.Js, Next.Js, NodeJs, Express, MongoDB, Bootstrap, TailwindCSS",
}

const About = ({windowSize}) => {
    const [isHovered, setIsHovered] = useState(-1)
    const handleMouseEnter = (index) => {setIsHovered(index)}
    const handleMouseLeave = () => {setIsHovered(-1)}
    
    return(
        windowSize.innerWidth > 1280?
        (
            <div name="about" id="about" className="bg-transparent h-full w-full px-8 py-8 font-light">
                    <h2 className="text-[#B000B0] font-bold drop-shadow-lg text-2xl">ABOUT ME</h2>
                    <div id="about-intro">{aboutText.intro}</div>

                    <h2 className="mt-8 text-[#B000B0] font-bold">SKILLS</h2>
                    <div>
                        <ul className="px-1">
                            <li className="font-light"><b className="font-bold">Programming Language:</b> {skills.prog}</li>
                            <li className="font-light"><b className="font-bold">Machine Learning:</b> {skills.ml}</li>
                            <li className="font-light"><b className="font-bold">Software Development:</b> {skills.fe}</li>
                        </ul>
                    </div>

                    <h2 className=" mt-8 text-[#B000B0] font-bold">CONTACT</h2>
                    <div className="w-full flex">
                        {
                            aboutText.contactList.map((contact, index) => {
                                return(
                                    <span className="mx-2 h-[40px] w-[40px] text-white">
                                        <a href={contact.link} target="_blank"  onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave()} className={"h-[40px] w-[40px] bg-transparent text-white " + (isHovered == index? "text-[#B000B0]":"")}>{contact.img}</a>
                                    </span>
                                    
                                )
                            })
                        }
                    </div>
            </div>
        )
        :
        windowSize.innerWidth > 640?
        (
            <div name="about" id="about" className="bg-transparent h-full w-full px-8 py-8 font-light">
                    <h2 className="text-[#B000B0] font-bold drop-shadow-lg text-2xl">ABOUT ME</h2>
                    <div id="about-intro" className="text-sm">{aboutText.intro}</div>

                    <h2 className="mt-8 text-[#B000B0] font-bold text-2xl">SKILLS</h2>
                    <div>
                        <ul className="px-1 text-sm">
                            <li className="font-light"><b className="font-bold">Programming Language:</b> {skills.prog}</li>
                            <li className="font-light"><b className="font-bold">Machine Learning:</b> {skills.ml}</li>
                            <li className="font-light"><b className="font-bold">Software Development:</b> {skills.fe}</li>
                        </ul>
                    </div>

                    <h2 className=" mt-8 text-[#B000B0] font-bold text-2xl">CONTACT</h2>
                    <div className="w-full flex text-sm">
                        {
                            aboutText.contactList.map((contact, index) => {
                                return(
                                    <span className="mx-2 h-[40px] w-[40px] text-white">
                                        <a href={contact.link} target="_blank"  onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave()} className={"h-[40px] w-[40px] bg-transparent text-white " + (isHovered == index? "text-[#B000B0]":"")}>{contact.img}</a>
                                    </span>
                                    
                                )
                            })
                        }
                    </div>
            </div>
        )
        :
        (
            <div name="about" id="about" className="bg-transparent h-full w-full px-6 py-6 font-light">
                    <h2 className="text-[#B000B0] font-bold drop-shadow-lg text-2xl my-0">ABOUT ME</h2>
                    <div id="about-intro" className="text-xs">{aboutText.intro}</div>

                    <h2 className="mt-3 text-[#B000B0] font-bold text-2xl my-0">SKILLS</h2>
                    <div>
                        <ul className="px-0 text-xs">
                            <li className="font-light"><b className="font-bold">Programming Language:</b> {skills.prog}</li>
                            <li className="font-light my-1"><b className="font-bold">Machine Learning:</b> {skills.ml}</li>
                            <li className="font-light"><b className="font-bold">Software Development:</b> {skills.fe}</li>
                        </ul>
                    </div>

                    <h2 className=" mt-3 text-[#B000B0] font-bold text-2xl my-0">CONTACT</h2>
                    <div className="w-full flex">
                        {
                            aboutText.contactList.map((contact, index) => {
                                return(
                                    <span className="mx-2 h-[40px] w-[40px] text-white">
                                        <a href={contact.link} target="_blank"  onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave()} className={"h-[20px] w-[20px] bg-transparent text-white " + (isHovered == index? "text-[#B000B0]":"")}>{contact.img}</a>
                                    </span>
                                    
                                )
                            })
                        }
                    </div>
            </div>
        )
    )
}

export default About