import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Menu = () =>{
return(
<>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Raju Hero</Navbar.Brand>
    <Nav className="mr-auto" >
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
</>
)}