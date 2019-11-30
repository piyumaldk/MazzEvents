import React, { Component, Fragment } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../Images/logo.jpg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignUp from './Auth/RegisterModal';
import LogIn from './Auth/LoginModal';
import Logout from './Auth/LogOut';

class Upper extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  }
  render() {
    const { isAuthenticated} = this.props.auth;
    const authLinks = (
      <Fragment>
        <span className='navbar-text mr-3'>
          <strong>{this.props.fName ? `Hi ${this.props.fName}!` : ``}</strong>
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
        <a href="/" className="navbar-brand">
          <img alt="" src={Logo} width="30" height="30"/>
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
  auth: state.auth,
  fName: state.auth.fName
});

export default connect(mapStateToProps, null)(Upper);

