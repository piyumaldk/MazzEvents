import React, { Component, useState } from 'react';
import LeftStaff from "../../Components/LeftStaff.component";
import {Table, Nav, Form, Col, Button, Modal,Alert} from 'react-bootstrap';
import axios from 'axios';
export default class StaffMailbox extends Component {

    constructor(){
        super()

        this.state = {
            name:'',
            email:'',
            subject:'',
            message:''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    async handleSubmit(e){
        console.log("sasvy");
        
        e.preventDefault()
        const {name, email, subject, message } = this.state

        const form = await axios.post('/api/form',{
            name,
            email,
            subject,
            message
        })
        // console.log(res);
        

    }
    
    render() {
        return (
            <div>
                <LeftStaff/>
                <div className="mailright">
                    <div className="mail">
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

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFrom">
                            <Form.Control type="text" name="name" placeholder="From" onChange={this.handleChange}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTo">
                            <Form.Control type="email" name="email" placeholder="To" onChange={this.handleChange}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridSubject">
                            <Form.Control type="text" name="subject" placeholder="Subject" onChange={this.handleChange}/>
                            </Form.Group>
                        </Form.Row>
            
                        <Form.Group controlId="formGridDescription">
                                <Form.Control type="textarea" name="message" placeholder="Compose email" rows="12" onChange={this.handleChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Send</Button>
                    </Form>

                    {/* <Email /> */}
                    

                </div>  
            </div>   
        )
        // function Email() {
        //     const [show, setShow] = useState(false);
          
        //     const handleClose = () => setShow(false);
        //     const handleShow = () => setShow(true);
          
        //     return (
        //       <>
        //         <Button variant="primary" onClick={handleShow}>
        //           Send
        //         </Button>
          
        //         <Modal show={show} onHide={handleClose}>
                  
        //           <Alert variant="success">Email sent</Alert>
                  
        //         </Modal>
        //       </>
        //     );
        //   }
    }
}