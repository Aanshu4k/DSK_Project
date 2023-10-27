import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Row1() {
  return (
    <>
      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="https://www.bsesdelhi.com/web/brpl/home"><a><img src='\home.png'style={{height:'40px', width:'40px', alignItems:'left'}}/></a></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.bsesdelhi.com/web/brpl/about-bses">About Us</Nav.Link>
            <Nav.Link href="https://www.bsesdelhi.com/web/brpl/press-release">News & Media</Nav.Link>
            <Nav.Link href="https://www.bsesdelhi.com/web/brpl/brpl-tenders" target="_blank">Tender</Nav.Link>
            <Nav.Link href="https://www.bsesdelhi.com/web/brpl/divisional-offices" target="_blank">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="CHD Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://bsesapps.bsesdelhi.com/dsk_web/frmappointmentchd.aspx" target="_blank">Take Appointment</NavDropdown.Item>
              <NavDropdown.Item href="https://bsesapps.bsesdelhi.com/dsk_web/frmappointmentchd.aspx" target="_blank">Get a CallBack</NavDropdown.Item>
              <NavDropdown.Item href="https://bsesbrpl.co.in:7874/zoom/" target="_blank">Connect Virtually</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Connection Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.bsesdelhi.com/web/brpl/new-connection-modified?rtsx=1234" target="_blank">New Connection</NavDropdown.Item>
              <NavDropdown.Item href="https://www.bsesdelhi.com/web/brpl/new-connection-change-request?rtsx=1234" target="_blank">Change Request</NavDropdown.Item>
              <NavDropdown.Item href="https://www.bsesdelhi.com/web/brpl/request-status-details" target="_blank">Request Status</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Row1;
