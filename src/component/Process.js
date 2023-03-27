import React from 'react'
import { Fade } from 'react-reveal';

// import './Announcements.css'
import Card from 'react-bootstrap/Card';

import process from '../assets_images/process.png';



export default function Process() {
  return (
    <div className='card1'>
       <Fade left>
        <Card style={{ height: '10rem', width: '36rem', bottom: '200px', right: '10%' }}>
          <Card.Img variant="top" src={process} />

          <Card.Body>
            <Card.Title>Process for Getting LOR</Card.Title>
            {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
          </Card.Body>

          {/* <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
        </Card>
       
        </Fade>
    </div>

  )
}
