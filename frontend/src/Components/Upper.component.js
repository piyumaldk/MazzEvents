import React, { Component, Fragment } from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import Logo from '../Images/logo.jpg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignUp from './Auth/RegisterModal';
import LogIn from './Auth/LoginModal';
import Logout from './Auth/LogOut';
import Notification from './Notification.modal';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

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
            { isAuthenticated === true && type ==="1"  ? <Nav.Link href="/customer/photo">Dashboard</Nav.Link> : null }
            { isAuthenticated === true && type ==="2"  ? <Nav.Link href="/serviceprovider/addservices">Dashboard</Nav.Link> : null }
            { isAuthenticated === true && type ==="3"  ? <Nav.Link href="/staff/account">Dashboard</Nav.Link> : null }
            { isAuthenticated === true && type ==="4"  ? <Nav.Link href="/admin/staff">Dashboard</Nav.Link> : null }
            <Nav.Link href="#about_us">About us</Nav.Link> 
            {/* <Nav.Link href="/notification">Notifications</Nav.Link> */}
            {/* <a href="/notification"><Icon.Bell color="WHITE" size={40}  /></a> */}
            
          </Nav>
          
          <NotificationsActiveIcon/><Notification/>
          
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

