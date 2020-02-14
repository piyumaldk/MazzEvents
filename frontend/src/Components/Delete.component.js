import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    Label,
    Button,
    Modal,
    ModalHeader,
    ModalBody
  } from 'reactstrap';

class Delete extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {}
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal,
        });
    };

    onSubmit(e) {
        e.preventDefault()
        axios.delete("http://localhost:4000/mazzevents/removecustomer/"+this.props.id, {})
            .then(res => {
                console.log(res)
                this.toggle();
                localStorage.removeItem('isAuthenticated');
                localStorage.removeItem('id');
                localStorage.removeItem('type');
                localStorage.removeItem('token');
                localStorage.removeItem('email');
                localStorage.removeItem('fName');
                localStorage.removeItem('lName');
                localStorage.removeItem('location');
                localStorage.removeItem('number');
                localStorage.removeItem('address');
                localStorage.removeItem('address2');
                localStorage.removeItem('city');
                localStorage.removeItem('state');
                localStorage.removeItem('zip');
                window.location.reload();
            })
        
        
    }

    render() {
        return (
            <div>
                <Button className="btn btn-dark" onClick={this.toggle} href="#">
                    Delete
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Select a Picture</ModalHeader>
                    <ModalBody>
                    <div className="container">
                        <div className="row">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <Label for="avatar">Are you sure?</Label>  
                                </div>
                                <div className="form-group">
                                    <Button className="btn btn-dark" type="submit">Yes</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </ModalBody>
                </Modal>
          </div>          
        )
    }
}

const mapStateToProps = state => ({
    id: state.auth.id,
    fName: state.auth.fName,
    lName: state.auth.lName,
    email: state.auth.email,
    number: state.auth.number
});

export default connect(mapStateToProps,null)(Delete);