import React, { Component } from 'react';
import Upper from "../Components/Upper.component";
import { Nav, Form, Button} from 'react-bootstrap';

export default class LogIn extends Component {

    constructor(props){
        super(props);

        this.onChangeLoginEmail = this.onChangeLoginEmail.bind(this);
        this.onChangeLoginPassword = this.onChangeLoginPassword.bind(this);
        this.onChangeLoginRemember = this.onChangeLoginRemember.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            login_email: '',
            login_password: '',
            login_remember: '',
            login_completed: false
        }
    }

    onChangeLoginEmail(e){
        this.setState({
            login_email: e.target.value
        });
    }
    onChangeLoginPassword(e){
        this.setState({
            login_password: e.target.value
        });
    }
    onChangeLoginRemember(e){
        this.setState({
            login_remember: e.target.value
        });
    }
    
    onSubmit(e){
        e.preventDefault();
        console.log(`Form submitted:`);
        console.log(`Login Email: ${this.state.login_email}`);
        console.log(`Login Password: ${this.state.login_password}`);
        console.log(`Login Remember: ${this.state.login_remember}`);
        console.log(`Login Completed: ${this.state.login_completed}`);
        this.setState({
            login_email: '',
            login_password: '',
            login_remember: '',
            login_completed: false
        })
    }

    render() {
        return (
            <div>
                <Upper/>
                <div class="login">  
                    <div class="col-md-5 col-md-offset-5">
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="loginEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Email" value={this.state.login_email} onChange={this.onChangeLoginEmail}/>
                            </Form.Group>

                            <Form.Group controlId="loginPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={this.state.login_password} onChange={this.onChangeLoginPassword}/>
                            </Form.Group>

                            <Form.Group controlId="loginChecbox">
                                <Form.Check type="checkbox" label="Remember me" value="remember" checked={this.state.login_remember==='remember'} onChange={this.onChangeLoginRemember}/>
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" value="Create Login" >
                                Log in
                            </Button>
                            
                            <p>Don't have an account?</p>
                            <Nav>
                            <Nav.Link href="/signup">Create one here!</Nav.Link>
                            </Nav>
                        </Form>
                    </div>
                </div>
            </div>    
        )
    }
}