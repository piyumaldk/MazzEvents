import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import {Button, Badge, Table, Modal, ButtonToolbar, Form, Col} from 'react-bootstrap';
import adddj from "../../Components/Services/DjModal";
export default class ServiceProviderAddServices extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div class="right">
                  
                <h3>Add Services<Badge variant="secondary"></Badge></h3>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Service No</th>
                      <th>Location</th>
                      <th>Category</th>
                      <th>Service</th>
                      <th>Price</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Colombo</td>
                      <td>Photography</td>
                      <td>basic package</td>
                      <td>20000</td>
                      <td>..........</td>
                    </tr>
                    <tr></tr>
                    <tr>
                      <td>2</td>
                      <td>Colombo</td>
                      <td>Photography</td>
                      <td>standard </td>
                      <td>50000</td>
                      <td>..........</td>
                    </tr>
                    

                    <tr>
                      <td>3</td>
                      <td>Colombo</td>
                      <td>Photography</td>
                      <td>premium</td>
                      <td>70000</td>
                      <td>..........</td>
                    </tr>
                  </tbody>
                </Table>

                <App />
                
                

                

                </div>
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
                  Add services form
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="Location" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select"  >
                            <option>Photography</option>
                            <option>DJ</option>
                            <option>Music</option>
                            <option>Catering</option>
                            <option>Reception Halls</option>
                            <option>Hotels</option>
                            <option>Fowers</option>
                            <option>Vehicles</option>
                            
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridService">
                        <Form.Label>Service</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        
                    </Form.Row>
                    <Form.Group controlId="formGridDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                    </Form.Group>



                    

                </Form>

              </Modal.Body>
              <Modal.Footer>
                <Button onClick={props.onHide}>Add</Button>
              </Modal.Footer>
            </Modal>
          );
        }
        
        function App() {
          const [modalShow, setModalShow] = React.useState(false);
        
          return (
            <ButtonToolbar>
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Add service
              </Button>
        
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </ButtonToolbar>
          );
        }
        
        
    }

    
    
}