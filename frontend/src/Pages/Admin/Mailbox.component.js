import React, { Component, useState } from 'react';
import LeftAdmin from "../../Components/LeftAdmin.component";
import {Table, Nav, Form, Col, Button, Modal,Alert} from 'react-bootstrap';
export default class AdminMailbox extends Component {
    render() {
        return (
            <div>
                <LeftAdmin/>
                <div class="mailright">
                    <div class="mail">
                        <center><h4>Email</h4></center>
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

                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFrom">
                            <Form.Control type="From" placeholder="From" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTo">
                            <Form.Control type="To" placeholder="To" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridSubject">
                            <Form.Control type="Subject" placeholder="Subject" />
                            </Form.Group>
                        </Form.Row>
            
                        <Form.Group controlId="formGridDescription">
                                <Form.Control as="textarea" placeholder="Compose email" rows="12" />
                        </Form.Group>
                    </Form>

                    <Email />
                    

                </div>  
            </div>   
        )
        function Email() {
            const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
          
            return (
              <>
                <Button variant="primary" onClick={handleShow}>
                  Send
                </Button>
          
                <Modal show={show} onHide={handleClose}>
                  
                  <Alert variant="success">Email sent</Alert>
                  
                </Modal>
              </>
            );
          }
    }
}