import React, { Component, Fragment } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../Images/logo.jpg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignUp from './Auth/RegisterModal';
import SignUp2 from './Auth/RegisterServiceProviderModal';
import SignUp3 from './Auth/RegisterStaffModal';
import LogIn from './Auth/LoginModal';
import Logout from './Auth/LogOut';

class Upper extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  }
  render() {
    const { isAuthenticated, type } = this.props.auth;
    const authLinks = (
      <Fragment>
        <span className='navbar-text mr-3'>
          <strong>{this.props.fName ? `Hi ${this.props.fName}!` : ``}</strong>
        </span>
        
        <SignUp2/>
        <SignUp3/>
        <Logout/>
      </Fragment>
    );
    const logout = (
      <Fragment>
        <Logout/>
      </Fragment>
    );
    const login = (
      <Fragment>
        <LogIn/>
        <SignUp/>
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        
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
            { isAuthenticated  ? authLinks : guestLinks }
            { isAuthenticated === true && type ==="1"  ? <Nav.Link href="/customer/dash">Customer Dashboard</Nav.Link> : null }
            { isAuthenticated === true && type ==="2"  ? <Nav.Link href="/serviceprovider/addservices">Service Provider Dashboard</Nav.Link> : null }
            { isAuthenticated === true && type ==="3"  ? <Nav.Link href="/staff/addservicerpvoder">Staff Member Dashboard</Nav.Link> : null }
            { isAuthenticated === true && type ==="4"  ? <Nav.Link href="/admin/staff">Administrator Dashboard</Nav.Link> : null }
            <Nav.Link href="/aboutus">About us</Nav.Link>     
          </Nav>
          
          
          
          { isAuthenticated ? logout : login }
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

