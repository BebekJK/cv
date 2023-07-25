import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import './carousel.css';
import project_1 from '../assets/project_1.png'
import project_2 from '../assets/project_2.png'
const projects = [
    {
        title: '2048 the Game',
        description: 'This project is a copy of the famous \'2048\' game. Made using Javascript DOM as a practice to the world of Software Engineering',
        skills: 'HTML, CSS, JavaScript',
        projectLink: 'https://github.com/BebekJK/2048',
        image: project_1
    },
    {
        title: 'Image Compressor',
        description: 'An implementation for K-Means Clustering algorithm of Unsupervised Learning. This project compresses Image to only have small amount of different colors by grouping similar colors',
        skills: 'Python, Machine Learning, Unsupervised Learning',
        projectLink: 'https://github.com/BebekJK/k-means',
        image: project_2
    }
]
const MyCarousel = ({screenSize}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        {projects.map((project, index) => {
            return(
                <Carousel.Item>
                    <ExampleCarouselImage title={project.title} src={project.image} desc={project.description} link={project.projectLink} skills={project.skills} screenSize={screenSize}/>
                </Carousel.Item>
            )
        })}
    </Carousel>
  );
}


const Project = () => {

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
        <div id="project" style={{
            height:"100vh",
            width: "100vw",
            backgroundColor:"#ededed",
            // background: "linear-gradient(90deg, rgba(51,51,51,1) 0%, rgba(0,90,103,1) 100%)"   
            display: "flex",
            alignContent: "center",
            justifyContent: "center"
        }}>
            <div style={{
                            borderRadius:"2vw",
                            width: screenSize.width>=1280?"40vw": screenSize.width>=768? "60vw": "70vw",
                            height: screenSize.width>=1280?"90vh": screenSize.width>=768? "70vh": "45vh",
                            margin: "auto",
                            padding: screenSize.width>=480? "7vh 0vw 10vh 0vw": "3vh 0vw 5vh 0vw",
                            backgroundColor: "rgba(255,255,255,0.5)"
                        }}>
                <h2 style={{textAlign: "center", color:"#333", paddingBottom: screenSize.width>=480?"3vh" : "1vh", fontSize: screenSize.width>=480?"32px":"18px",}}>  My Projects:</h2>
                <MyCarousel screenSize={screenSize}/>
            </div>
            
        </div>
    )
}
export default Project;