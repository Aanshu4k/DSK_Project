import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import User_Details from './User_Details';
import Address from './Address';
import ConnectionDetails from './ConnectionDetails';

const Row2Form = () => {
  return (
    <div>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" style={{ alignItems: 'left' }}>
                <b>Apply Online / New Connection / Request No:
                  {/* <Form.Group>
                    <Form.Control
                      type="text"
                      value={requestNumber || 'Generating...'}
                      readOnly
                    />
                  </Form.Group> */}
                </b>
              </Nav>
              <Nav className="ml-auto" id="log-out">
                <Nav.Link
                  href="https://www.bsesdelhi.com/web/brpl/new-connection-modified?p_p_id=BsesConnection_INSTANCE_SVnqOt7LFMcm&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&rtsx=logout"
                  target="_blank"
                  style={{ color: '#DC3545' }}
                >
                  <button style={{ backgroundColor: 'red', color: 'white', width: 'auto' }}><b>LOGOUT</b></button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <User_Details />
      </div>
      <br />
      <div>
        <Address />
      </div>
      <br />
      <div>
        <ConnectionDetails />
      </div>
      <br />
      <div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Row2Form;
