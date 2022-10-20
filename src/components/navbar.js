import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';



const Navigation=()=>{
  const navigate = useNavigate();
    return(
    <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
      <Container>
        <Navbar.Brand onClick={()=>{navigate('/');}}>Packers & Movers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="pills"  className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link  onClick={()=>{navigate('/about');}}>About Us</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/contact');}}>Contact Us</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/login');}}>Login/signUp</Nav.Link>
            <Nav.Link  onClick={()=>{navigate('/costcalculator');}}>Cost Calculator</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    )
}
export default Navigation;
