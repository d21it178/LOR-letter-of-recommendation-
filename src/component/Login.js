import React from 'react'
import Card from 'react-bootstrap/Card'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Fade from 'react-reveal/Fade';
import Signup from '../pages/Signup';


export default function Login() {
  return (
    <div className='card1' >
      <Fade right>
        <Card style={{ height: '20rem', width: '30rem', bottom: '420px', left: '59%' }}>

          <Card.Body>
            <Card.Title style={{ color: 'black' , left: '10px'}}>Login</Card.Title>
            <Form>
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button className="mb-1" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <h6 style={{ color: 'black' }}>Don't have account?
          
              <Card.Link href='Signup' element={<Signup />} > Signup</Card.Link>
                
              
            </h6>
          </Card.Body>
        </Card>
      </Fade>
    </div>
  )
}
