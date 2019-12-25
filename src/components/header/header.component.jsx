import React from 'react';
import './header.styles.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from './hero3.jpg';

export const Menu = () =>{
return(
<>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
    <img
        alt=""
        src={img}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Raju Hero</Navbar.Brand>
    <Nav className="mr-auto" >
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About us</Nav.Link>
      <Nav.Link href="#pricing">Products</Nav.Link>
      <Nav.Link href="#home">Services</Nav.Link>
      <Nav.Link href="#features">Offer</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-primary">Book Test Ride</Button>
    </Form>
  </Navbar>
</>
)}