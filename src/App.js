import Profile from "./components/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import Combination from "./components/combination";
import Grids from "./components/grids";

const App = () => {
  return(
    <div id='moving-bg'>
        <Grids className="z-[-3]" dim={{width: window.innerWidth, height: window.innerWidth}}/>
        <Navbar className="sticky"/>
        <Profile/>
        <Combination className="z-[10]"/>
    </div>
    
  )
}

export default App;