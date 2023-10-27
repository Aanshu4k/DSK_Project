import React, { useState } from 'react';
import MyRequest from "./MyRequest";
import Row2Form from './Row2Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import User_Details from './User_Details';
import Address from './Address';
import ConnectionDetails from './ConnectionDetails';
const Row2 = () => {
  const [showForm1, setShowForm1] = useState(true);
  const [showForm2, setShowForm2] = useState(false);

  const toggleForm1 = () => {
    setShowForm1(true);
    setShowForm2(false);
  };

  const toggleForm2 = () => {
    setShowForm1(false);
    setShowForm2(true);
  };

  return (
    <div style={{ alignItems: 'center' }}>
      <div>
        <button onClick={toggleForm1} >New Connection</button>
        <button onClick={toggleForm2}>My Request</button>
      </div>
      {showForm1 && (
        <div>
          <Navbar expand="lg" className="bg-body-tertiary" >
            <Container>
            <Navbar.Collapse id="basic-navbar-nav" style={{display:'flex',alignContent:'right'}}>
              <Nav className="ml-auto" id="log-out">
                <Nav.Link
                  href="https://www.bsesdelhi.com/web/brpl/new-connection-modified?p_p_id=BsesConnection_INSTANCE_SVnqOt7LFMcm&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&rtsx=logout"
                  target="_blank"
                  style={{ color: '#DC3545' }}
                >
                  <button style={{ display:'flex',backgroundColor: 'red', color: 'white'}}><b>LOGOUT</b></button>
                </Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <User_Details />
        </div>
      )}
      {showForm2 && (
        <div>
          <MyRequest />
        </div>
      )}
      <div>
        
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

export default Row2;
