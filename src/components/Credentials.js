import React, {useState, useEffect} from "react";
import certifications from "./const";
import './Credentials.css'

const Credentials = () => {
    const completed = certifications.filter((certificate) => {return certificate.status})
    const progress = certifications.filter((certificate) => {return !certificate.status})

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

  	function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}

    const [isCompleted, setIsCompleted] = useState(true)

    const handleClickCompleted = () => {
        setIsCompleted(true)
    }
    const handleInProgress = () => {
        setIsCompleted(false)
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
        <div id="credentials" style={{width:"100vw", height:"100vh", display:"flex", justifyContent:"center", justifyItems: "center"}}>
            <div id={isCompleted? "completed-credential": "in-progress-credential"}>
                <h2 id="credential-heading" style={{fontSize: screenSize.width>=480? "32px": "18px"}}>{isCompleted? "Completed Credentials": "Credentials In Progess"}</h2>
                <div style={{paddingLeft: "5vw", fontSize: screenSize.width>=480? "16px": "12px"}}>
                    <button className={isCompleted? "button-status button-active": "button-status"} onClick={handleClickCompleted}>Completed ✅</button>
                    <button className={isCompleted? "button-status": "button-status button-active"} onClick={handleInProgress}>In Progress ⏳</button>
                </div>
                

                <div>
                    { isCompleted?
                        completed.map((certificate, index) => {
                            return(
                                <div className="credential-item">
                                    <h4 className="credential-title">{certificate.name}</h4>
                                    <p className="credential-organization">{certificate.organization}</p>
                                    <p className="credential-skills"><b>Skills:</b> {certificate.skills}</p>
                                    <button className="credential-button">
                                        <a className="credential-link" href={certificate.url}>View Certificate ☞</a>
                                    </button>
                                </div>
                            )
                        })
                        :
                        progress.map((certificate, index) => {
                            const bg_color = `linear-gradient(90deg, rgba(0,255,0,1) 0%, rgba(0,25,0,1) ${10000/certificate.progress}%)`
                            const width = `${certificate.progress/5}vw`
                            return(
                                <div className="credential-item">
                                    <h4 className="credential-title">{certificate.name}</h4>
                                    <p className="credential-organization">{certificate.organization}</p>
                                    <p className="credential-skills"><b>Skills:</b> {certificate.skills}</p>
                                    <span><b>Progress:</b> {certificate.progress}%  <div className="progress-container"><div className="progress-bar" style={{background:bg_color, width: width}}></div></div></span>
                                </div>    
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Credentials