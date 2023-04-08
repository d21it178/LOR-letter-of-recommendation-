import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';

export default function Up_add() {
  return (
    <div>
        <Fade left>
         <Card style={{ height: '20rem', width: '30rem', left: '25%', bottom: '390px' }}>
         <Card.Title style={{ color: 'black', left: '10px' }}>Upload Admission Letter </Card.Title><br></br>
                <Form>
                        <Row className="g-4">
                            <Col md></Col>
                            <Col md><Form.Label style={{ color: 'black' }}>University Name</Form.Label></Col>
                            <Col md><Form.Label style={{ color: 'black' }}>Course Name</Form.Label></Col>
                            <Col md></Col>
                        </Row>

                        <Row className="g-4">
                            <Col md></Col>
                            <Col md><Form.Control type="text" /></Col>
                            <Col md><Form.Control type="text" /></Col>
                            <Col md></Col>
                        </Row>

                        <Row className="g-4">
                            <Col md></Col>
                            <Col md><Form.Label style={{ color: 'black' }}>Country Name</Form.Label></Col>
                            <Col md><Form.Label style={{ color: 'black' }}>Upload LOR</Form.Label></Col>
                            <Col md></Col>
                        </Row>

                        <Row className="g-3">
                            <Col md></Col>
                            <Col md><Form.Control type="text" /></Col>
                            <Col md><Button variant="secondary">Choose File</Button></Col>
                            <Col md></Col>
                        </Row><br></br>

                    <Button className="mb-1" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
            </Fade>
    </div>
  )
}
