import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

export default function lor_req() {
    return (
        <div >
            <Card style={{bottom: '420px',width:'500px', alignItems :'center'}}>
                <Card.Header>
                    <Nav variant="pills" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#first">Personal Infomation</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">University details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#disabled">
                                Falcuty details
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
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
