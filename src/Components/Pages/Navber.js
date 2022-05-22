import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navber = () => {
   
    return (
        
        <>
 <Navbar fixed="top" bg="dark" expand="lg" className='text-light' >
  <Container className='text-light'>
    <Navbar.Brand className='text-light' href='/' ><span className='text-secondary font-bold brightness-200'>Jinuk Auto Wholsel</span></Navbar.Brand>
    <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav " />
    <Navbar.Collapse className='text-light' id="basic-navbar-nav">
      <Nav className="me-auto ">
        <Nav.Link className='text-light' href="/tools">Tools</Nav.Link>
        <Nav.Link className='text-light' href="/blog">Blogs</Nav.Link>
        {/* <Nav.Link className='text-light'id='#bussness'>Bussness</Nav.Link>
        <Nav.Link className='text-light' id='#makeauto' href="/makeauto">Make Auto</Nav.Link> */}
        {/* <Nav.Link className='text-light' href="/blog">Blogs</Nav.Link> */}
        
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
 
</>
    );
};

export default Navber;