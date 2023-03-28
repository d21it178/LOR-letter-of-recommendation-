import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';


export default function lor_req() {
    return (
        <div >
            <Card style={{ bottom: '420px', width: '500px', alignItems: 'center' }}>
                {/* <Card.Header>
                    <Container>
                        <Nav variant="pills" defaultActiveKey="#Personal_Infomation">

                            <LinkContainer to="/Request">
                                <Nav.Item>
                                    <Nav.Link href="#Personal_Infomation">Personal Infomation</Nav.Link>
                                </Nav.Item>
                            </LinkContainer>


                            <Nav.Item>
                                <Nav.Link href="#University_details">University details</Nav.Link>
                            </Nav.Item>


                            <Nav.Item>
                                <Nav.Link href="#Faculty_details">Faculty details</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </Container>
                </Card.Header> */}
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
            </Card>
        </div>
    )
}
