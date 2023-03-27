import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './footer.css'

export default function Footer() {
    let year = new Date().getFullYear();

  return (
    <div>
      <Navbar className='footer'>
        <Container  className=" copyrights text-center text-muted">
            <Col lg={12} className="text-center text-light">
            {year} - All Rights are Reserved!!!
            </Col>
        </Container>
      </Navbar>
    </div>
  )
}