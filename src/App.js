import Reacts, { useRef } from "react";
import Profile from "./components/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import Project from "./components/Project";
import { useState } from "react";
import Credentials from "./components/Credentials";
import About from "./components/About";

const App = () => {
  const [frame, setFrame] = useState(Project)

  const project = useRef(null)
  const education = useRef(null)

  const scrollToSection = (elementRef) => [
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  ]
  // const handleFrame = (newFrame) => {
  //   setFrame(newFrame)
  //   scrollT
  // }
  return(
    <>
      <Navbar/>
      <Profile setFrame={scrollToSection}/>
      <About />
      <Project ref={project}></Project>
      <Credentials />
    </>
    
  )
}

export default App;