import React from 'react'
import Card from 'react-bootstrap/Card'
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Fade from 'react-reveal/Fade';


export default function Sign_up() {
  return (
    <div className='card1' >
    <Fade right>
      <Card style={{ height: '30rem', width: '30rem', bottom: '320px', left: '25%' }}>

        <Card.Body>
          <Card.Title style={{ color: 'black', left: '10px' }}>Signup</Card.Title>
          <Form>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Label style={{ color: 'black'}}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="" controlId="formBasicID">
              <Form.Label style={{ color: 'black'}}>Student ID</Form.Label>
              <Form.Control type="text" placeholder="Enter Student ID" />
            </Form.Group>

            <Form.Group className="" controlId="formBasicContact">
              <Form.Label style={{ color: 'black'}}>Contact No.</Form.Label>
              <Form.Control type="text" placeholder="Enter Contact No." />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label style={{ color: 'black'}}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label style={{ color: 'black'}}>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Button className="mb-1" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <h6 style={{ color: 'black' }}>Already have account?

            <LinkContainer to="/">
              <Card.Link href='home' element={<home />} > Login </Card.Link>
            </LinkContainer>

          </h6>
        </Card.Body>
      </Card>
    </Fade>
  </div>
  )
}
