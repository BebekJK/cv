import React from "react";
import { Image, Card, Button} from "react-bootstrap";

const ExampleCarouselImage = ({src, title, desc, link, skills, screenSize}) => {
    return(
        <Card style={{
          width: screenSize.width>=480?'25rem': '12rem',
          borderRadius: "10px",
          fontSize: screenSize.width>=480? "16px": "8px",
        }}>
        <Card.Img variant="top" src={src} style={{borderRadius: "10px"}}/>
        <Card.Body style={{borderTop: "1px solid rgb(40,40,40)", height: screenSize.width>=1280? "40vh": screenSize.width>=768? "30vh" : '25vh'}}>
          <Card.Title style={{
            fontSize: screenSize.width>=480?"30px":"12px",
          }}>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Card.Text><strong>Skills</strong>: {skills}</Card.Text>
          <a href={link}><button style={{
              border: "1px solid black",
              backgroundColor: "white",
              borderRadius: "10px",
              fontWeight: "400",
          }}>Project Link</button></a>
        </Card.Body>
      </Card>
    )
}

export default ExampleCarouselImage