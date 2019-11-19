import React, { Component, Fragment } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Modal, ButtonToolbar } from 'react-bootstrap';
import Logo from '../Images/logo.jpg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavItem } from 'react-bootstrap';
import SignUp from './Auth/RegisterModal';
import LogIn from './Auth/LoginModal';
import Logout from './Auth/LogOut';

class Upper extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  }
    render() {
      const { isAuthenticated, signupcustomer} = this.props.auth;
      const authLinks = (
        <Fragment>
          <span className='navbar-text mr-3'>
            <strong>{signupcustomer ? `Hi ${signupcustomer.firstName}!` : ``}</strong>
          </span>
          <Nav.Link href="/serviceprovider/addservices">Dashboard</Nav.Link>
          <Logout/>
        </Fragment>
      );
      const guestLinks = (
        <Fragment>
          <SignUp/>
          <LogIn/>
        </Fragment>
      );


        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <a className="navbar-brand">
                    <img src={Logo} width="30" height="30"/>
                </a>
                <Navbar.Brand href="/">MazzEvents</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        
                        { isAuthenticated ? authLinks : guestLinks }
                        
                        
                        <Nav.Link href="/aboutus">About us</Nav.Link>       
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search Events</Button>
                    </Form>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, null)(Upper);

