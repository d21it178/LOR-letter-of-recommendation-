import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import { Fade } from 'react-reveal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './lor_req.css'

export default function lor_req() {
    return (
        <div >
            <div className='conta'>
                <Card style={{ height: '50rem', width: '30rem', left: '20%' }}>

                    <Card.Title style={{ color: 'black', left: '10px' }}>Request For Letter Of Recommendation </Card.Title>
                    <Form>

                        <Row className="g-2">
                            <Col md></Col>
                            <Col md><Form.Label style={{ color: 'black' }}>Student ID</Form.Label></Col>
                            <Col md></Col>
                        </Row>

                        <Row className="g-2">
                            <Col md></Col>
                            <Col md><Form.Control type="text" /></Col>
                            <Col md></Col>
                        </Row>

                        <Form.Group className="mb-2" controlId="passout">
                            <Form.Label style={{ color: 'black', left: '10px' }}>Pass-out Month/Year</Form.Label>
                            <Row className="g-4">
                                <Col md></Col>
                                <Col md>
                                    <Form.Select size="sm">
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                    </Form.Select>
                                </Col>
                                <Col md>
                                    <Form.Select size="sm">
                                        <option>2003</option>
                                        <option>2004</option>
                                        <option>2005</option>
                                        <option>2006</option>
                                        <option>2007</option>
                                        <option>2008</option>
                                        <option>2009</option>
                                        <option>2010</option>
                                        <option>2011</option>
                                        <option>2012</option>
                                        <option>2013</option>
                                        <option>2014</option>
                                        <option>2015</option>
                                        <option>2016</option>
                                        <option>2017</option>
                                        <option>2018</option>
                                        <option>2019</option>
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>
                                        <option>2023</option>
                                    </Form.Select>
                                </Col>
                                <Col md></Col>
                            </Row>
                        </Form.Group>

                        <Row className="g-2">
                            <Col md><Form.Label style={{ color: 'black' }}>GRE Score</Form.Label></Col>
                            <Col md><Form.Control type="text" /></Col>
                            <Col md><Button variant="secondary">Choose File</Button></Col>
                        </Row><br></br>

                        <Row className="g-2">
                            <Col md><Form.Label style={{ color: 'black' }}>IELTS Score</Form.Label></Col>
                            <Col md><Form.Control type="text" /></Col>
                            <Col md><Button variant="secondary">Choose File</Button></Col>
                        </Row><br></br>

                        <Row className="g-2">
                            <Col md><Form.Label style={{ color: 'black' }}>TOEFL Score</Form.Label></Col>
                            <Col md><Form.Control type="text" /></Col>
                            <Col md><Button variant="secondary">Choose File</Button></Col>
                        </Row><br></br>

                        <Form.Group className="mb-2" controlId="univ">
                            <Form.Label style={{ color: 'black' }}>University Preference List</Form.Label>
                            <Row className="g-7">
                                <Col md></Col>
                                <Col md></Col>
                                <Col md><Button variant="secondary">Add</Button></Col>
                                <Col md></Col>
                                <Col md><Button variant="secondary">Remove</Button></Col>
                                <Col md></Col>
                                <Col md></Col>
                            </Row>
                        </Form.Group>

                        <Row className="g-6">
                            <Col md></Col>
                            <Col md><Form.Label style={{ color: 'black' }}>University Name</Form.Label></Col>
                            <Col md><Form.Label style={{ color: 'black' }}>Course Name</Form.Label></Col>
                            <Col md><Form.Label style={{ color: 'black' }}>Country Name</Form.Label></Col>
                            <Col md><Form.Label style={{ color: 'black' }}>Intake (Month-Year)</Form.Label></Col>
                            <Col md></Col>
                        </Row>

                        <Row className="g-6">
                            <Col md></Col>
                            <Col md><Form.Control type="text" /></Col>
                            <Col md><Form.Control type="text" /></Col>
                            <Col md><Form.Control type="text" /></Col>
                            <Col md><Form.Control type="text" /></Col>
                            <Col md></Col>
                        </Row><br></br>

                        <Form.Group className="mb-2" controlId="faculty">
                            <Form.Label style={{ color: 'black' }}>Faculty Preference List</Form.Label>
                            <Row className="g-7">
                                <Col md></Col>
                                <Col md></Col>
                                <Col md><Button variant="secondary">Add</Button></Col>
                                <Col md></Col>
                                <Col md><Button variant="secondary">Remove</Button></Col>
                                <Col md></Col>
                                <Col md></Col>
                            </Row>
                        </Form.Group>

                        <Row className="g-4">
                            <Col md><Form.Label style={{ color: 'black' }}>Faculty Name</Form.Label></Col>
                            <Col md><Form.Label style={{ color: 'black' }}>Faculty Email</Form.Label></Col>
                            <Col md><Form.Label style={{ color: 'black' }}>Upload LOR</Form.Label></Col>
                            <Col md></Col>
                        </Row>

                        <Row className="g-2">
                            {/* <Col md></Col> */}
                            <Col md><Form.Control type="text" /></Col>
                            <Col md><Form.Control type="text" /></Col>
                            <Col md><Button variant="secondary">Choose File</Button></Col><Col md></Col>
                        </Row><br></br>

                        <Button className="mb-1" variant="primary" type="submit"> Submit</Button>
                    </Form>
                </Card>
            </div>
        </div>
    )
}