import Profile from "./components/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import Combination from "./components/combination";
import Grids from "./components/grids";
import { useState, useEffect } from "react";

const getWindowSize = () => {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

const App = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize(){
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return(
    <div id='moving-bg'>
        <Grids className="z-[-3]" windowSize={windowSize}/>
        <Navbar className="sticky"/>
        <Profile windowSize={windowSize}/>
        <Combination className="z-[10]" windowSize={windowSize}/>
    </div>
  )
}

export default App;