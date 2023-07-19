import React from "react";
import { Image, Card, Button} from "react-bootstrap";

const ExampleCarouselImage = ({src, title, desc, link, skills}) => {
    return(
        <Card style={{ width: '25rem', borderRadius: "10px"}}>
        <Card.Img variant="top" src={src} style={{borderRadius: "10px"}}/>
        <Card.Body style={{borderTop: "1px solid rgb(40,40,40)"}}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Card.Text><strong>Skills</strong>: {skills}</Card.Text>
          <a href={link}><Button variant="primary">Project Link</Button></a>
        </Card.Body>
      </Card>
    )
}

export default ExampleCarouselImage