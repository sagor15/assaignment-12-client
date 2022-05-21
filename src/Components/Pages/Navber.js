import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navber = () => {
    // const menuItems =<>
    //     <li><Link to='/' >Home</Link></li>
    //     <li><Link to='/tools'>Tools</Link ></li>
    //     {/* <li><a>Review</a></li> */}
        
    //     </>
    return (
        
        <>
 <Navbar fixed="top" bg="dark" expand="lg" className='text-light' >
  <Container className='text-light'>
    <Navbar.Brand className='text-light' href='/' ><span className='text-secondary font-bold brightness-200'>Jinuk Auto Wholsel</span></Navbar.Brand>
    <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav " />
    <Navbar.Collapse className='text-light' id="basic-navbar-nav">
      <Nav className="me-auto ">
        <Nav.Link className='text-light' href="/tools">Tools</Nav.Link>
        
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
 
</>
    );
};

export default Navber;