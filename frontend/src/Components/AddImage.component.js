import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody
  } from 'reactstrap';

class AddImage extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: ''
        }
    }

    toggle = () => {
        //Clear messages
        this.setState({
          modal: !this.state.modal
        });
    };

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        axios.post("http://localhost:4000/mazzevents/addprofileimg/"+this.props.id, formData, {
        }).then(res => {
            console.log(res)
        })
        this.toggle();
    }


    render() {
        return (
<div>
<Button onClick={this.toggle} href="#">
                Add Images
            </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Register a Musician</ModalHeader>
          <ModalBody>
          <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
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

export default connect(mapStateToProps,null)(AddImage);