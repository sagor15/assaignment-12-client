import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Navber = () => {

  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
      signOut(auth);
      navigate('/login')
      localStorage.removeItem('accessToken');
  };

  

   
    return (
        
        <>
 <Navbar fixed="top" bg="dark" expand="lg" className='text-light' >
  <Container className='text-light'>
    <Navbar.Brand className='text-light'as={Link} to='/' ><span className='text-secondary font-bold brightness-200'>Jinuk Auto Wholsel</span></Navbar.Brand>
    <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav " />
    <Navbar.Collapse className='text-light' id="basic-navbar-nav">
      <Nav className="me-auto ">
        <Nav.Link className='text-light' as={Link} to="/tools">Tools</Nav.Link>
        <Nav.Link className='text-light' as={Link} to="/blog">Blogs</Nav.Link>
        {/* <Nav.Link className='text-light'id='#bussness'>Bussness</Nav.Link>
        <Nav.Link className='text-light' id='#makeauto' href="/makeauto">Make Auto</Nav.Link> */}
        {/* <Nav.Link className='text-light' href="/blog">Blogs</Nav.Link> */}
        
       
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      {
        user && <Nav.Link className='text-light' as={Link} to="/dashboard">Dashboard</Nav.Link>
      }
      {
        user ? <Nav.Link className='text-light transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:btn-indigo duration-300' onClick={logout} ><span className='text-primary '>Sign Out</span></Nav.Link>:<Nav.Link className='text-light' as={Link} to="/login">Login</Nav.Link>
      }
    </Navbar.Collapse>
  </Container>
</Navbar>
 
</>
    );
};

export default Navber;