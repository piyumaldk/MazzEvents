import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Modal, ButtonToolbar } from 'react-bootstrap';
import Logo from '../Images/logo.jpg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavItem } from 'react-bootstrap';
import SignUp from './Auth/RegisterModal';
import Logout from './Auth/LogOut';

export default class Upper extends Component {
    state = {
        modal: false,
        signup_firstName: '',
        signup_lastName: '',
        signup_option: '',
        signup_email: '',
        signup_password: '',
        signup_aPassword: '',
        signup_number: '',
        signup_location: '',
        msg: null
      };
    
      static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired
      };

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <a className="navbar-brand">
                    <img src={Logo} width="30" height="30"/>
                </a>
                <Navbar.Brand href="/">MazzEvents</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Log in</Nav.Link>
                        <SignUp/>
                        <Logout/>
                        <App />
                        <Nav.Link href="/aboutus">About us</Nav.Link>       
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search Events</Button>
                    </Form>
                </Navbar>
            </div>
        )
        function MyVerticallyCenteredModal(props) {
            return (
              <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Sign up
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>Hi Piyumal bitch</h4>

                  <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                   
                </Form>
                  
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={props.onHide}>Signup</Button>
                </Modal.Footer>
              </Modal>
            );
          }
          
          function App() {
            const [modalShow, setModalShow] = React.useState(false);
          
            return (
              <ButtonToolbar>
                <Nav.Link  onClick={() => setModalShow(true)}>
                  Signup
                </Nav.Link>
          
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </ButtonToolbar>
            );
          }

    }
}

