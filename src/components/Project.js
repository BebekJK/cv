import { useState } from 'react';

const projects = [
    {
        title: '2048 GAME CLONE',
        description: 'This project is a copy of the famous \'2048\' game. Made using Javascript DOM as a practice to the world of Software Engineering',
        skills: 'HTML, CSS, JavaScript',
        projectLink: 'https://github.com/BebekJK/2048',
    },
    {
        title: 'IMAGE COMPRESSOR',
        description: 'An implementation for K-Means Clustering algorithm of Unsupervised Learning. This project compresses Image to only have small amount of different colors by grouping similar colors',
        skills: 'Python, Machine Learning, Unsupervised Learning',
        projectLink: 'https://github.com/BebekJK/k-means',
    },
    {
        title: 'MEDICAL ABSTRACT TEXT CLASSIFIER',
        description: 'A TensorFlow natural language processing (NLP) project to categorize 5 sections of medical abstract sentences based on “PubMed 200k RCT: a Dataset for Sequential Sentence Classification in Medical Abstracts”, Franck Dernoncourt, Ji Young Lee',
        skills: 'Machine Learning, Natural Language Processing, TensorFlow',
        projectLink: 'https://www.kaggle.com/code/bebekjk/skimlit',
    }
]

const Project = ({windowSize}) => {

    const [isHovered, setIsHovered] = useState(-1)
    const handleMouseEnter = (index) => {setIsHovered(index)}
    const handleMouseLeave = () => {setIsHovered(-1)}

    return(
        windowSize.innerWidth > 1280?
        (
            <div id="project" className='bg-transparent w-full h-full px-8 py-8'>
                <h2 className='text-[#B000B0] font-bold'>RECENT PROJECTS</h2>
                <div className='flex flex-col justify-evenly h-[90%] px-1 py-2'>
                    {projects.map((project, index) => {
                        return(
                            <a href={project.projectLink} target='_blank' className={'rounded-lg px-3 py-2 shadow-[0px_5px_10px_-5px_rgb(0,0,0)] no-underline text-white transition-all duration-500 ease-in-out ' + (isHovered === index? "-translate-x-2 -translate-y-2 bg-[#800080] shadow-[5px_5px_15px_0px_rgb(16,0,16)]":"")}
                                onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()}>
                                <div className={'text-md font-bold text-white'}>{project.title}</div>
                                <div className='text-xs font-light'>{project.description}</div>
                                <div className='h-3'></div>
                                <div className='text-xs font-light'>Skills: {project.skills}</div>
                            </a>
                        )
                    })}
                </div>
            </div>
        )
        :
        windowSize.innerWidth > 640?
        (
            <div id="project" className='bg-transparent w-full h-full px-8 py-8'>
                <h2 className='text-[#B000B0] font-bold text-2xl'>RECENT PROJECTS</h2>
                <div className='flex flex-col h-[90%] px-1 py-2'>
                    {projects.map((project, index) => {
                        return(
                            <a href={project.projectLink} target='_blank' className={'rounded-lg my-2 px-3 py-2 shadow-[0px_5px_10px_-5px_rgb(0,0,0)] no-underline text-white transition-all duration-500 ease-in-out ' + (isHovered === index? "-translate-x-2 -translate-y-2 bg-[#800080] shadow-[5px_5px_15px_0px_rgb(16,0,16)]":"")}
                                onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()}>
                                <div className={'text-md font-bold text-white'}>{project.title}</div>
                                <div className='text-xs font-light'>{project.description}</div>
                                <div className='h-3'></div>
                                <div className='text-xs font-light'>Skills: {project.skills}</div>
                            </a>
                        )
                    })}
                </div>
            </div>        
        )
        :
        (
            <div id="project" className='bg-transparent w-full h-full px-6 py-6'>
                <h2 className='text-[#B000B0] font-bold text-2xl'>RECENT PROJECTS</h2>
                <div className='flex flex-col h-[90%] px-1 py-2'>
                    {projects.map((project, index) => {
                        return(
                            <a href={project.projectLink} target='_blank' className={'rounded-lg my-2 px-3 py-2 shadow-[0px_5px_10px_-5px_rgb(0,0,0)] no-underline text-white transition-all duration-500 ease-in-out ' + (isHovered === index? "-translate-x-2 -translate-y-2 bg-[#800080] shadow-[5px_5px_15px_0px_rgb(16,0,16)]":"")}
                                onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()}>
                                <div className={'font-bold text-white text-xs'}>{project.title}</div>
                                <div className='text-[0.6rem] font-light'>{project.description}</div>
                                <div className='h-1'></div>
                                <div className='text-[0.6rem] font-light'>Skills: {project.skills}</div>
                            </a>
                        )
                    })}
                </div>
            </div>
        )
    )
}
export default Project;