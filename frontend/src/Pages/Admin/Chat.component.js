import React, { Component } from 'react';
import LeftAdmin from "../../Components/LeftAdmin.component";
import {Table, Nav, Form, Button } from 'react-bootstrap';
import Upper from "../../Components/Upper.component";
export default class AdminChat extends Component {
    render() {
        return (
            <div>
                <LeftAdmin/>
                <div class="chatright">
                <Upper/>
                    <div class="chat">
                        <center><h4>Chat</h4></center>
                        <Table striped bordered hover size="sm">
                            
                            <tbody>
                                <tr>
                                <td><Nav.Link href="">Mithila</Nav.Link> </td>
                                </tr>
                                <tr>
                                <td><Nav.Link href="">Piyumal</Nav.Link></td>
                                </tr>   
                                <tr>
                                <td><Nav.Link href="">Bhagaya</Nav.Link></td>
                                </tr>
                                <tr>
                                <td><Nav.Link href="">Nipuni</Nav.Link></td>
                                </tr>
                                <tr>
                                <td><Nav.Link href="">Yasas</Nav.Link></td>
                                </tr>       
                            </tbody>
                        </Table>
                    </div>
                    <div class="chattop">

                    </div>
                    
                    
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        
                        
                        

                
                        <Form>
                            <Form.Group controlId="formGridDescription">
                                    
                                    <Form.Control placeholder="Enter message here" as="textarea" rows="5" />
                            </Form.Group>
                        </Form>
                        <Button variant="primary">
                             Send
                        </Button>
                    

                </div>
            </div>   
        )
    }
}