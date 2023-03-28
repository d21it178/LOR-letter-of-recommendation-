import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets_images/logo.png';
import './navbar.css';

import { LinkContainer } from 'react-router-bootstrap';



export default function navigationbar() {
  return (
    <div className='nav'>
      <Navbar className=" fixed-top" collapseOnSelect expand="lg" bg="rgb=25 78 85" variant="rgb=8 8 7" >

        <Container>

          <LinkContainer to="/">
            <Navbar.Brand >
              <img src={logo} style={{ width: 30, height: 30 }} />
            </Navbar.Brand>
          </LinkContainer>


          <LinkContainer to="/">
            <Navbar.Brand href="#home">LOR</Navbar.Brand>

          </LinkContainer>


          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" variant="#2521">


              <LinkContainer to="/">
                <Nav.Link>HOME</Nav.Link>
              </LinkContainer>

             

              <LinkContainer to="/Request">
                <Nav.Link href="#Request">LOR REQUEST</Nav.Link>
              </LinkContainer>

            


              <LinkContainer to="/Upload">
                <Nav.Link href="#Upload ">UPLOAD ADDMINTION LETTER </Nav.Link>
                
              </LinkContainer>



              <LinkContainer to="/Signup">
                <Nav.Link href="#Signup ">SIGNUP</Nav.Link>
              </LinkContainer>

             




            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  )
}
