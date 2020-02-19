import React, { Component } from 'react';
import axios from 'axios';
import LeftAdmin from "../../Components/LeftAdmin.component";
import Upper from "../../Components/Upper.component";
import { Button, Card, Form, Col } from 'react-bootstrap';

 class EditNotification extends Component {
     

    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);

        this.onChangeTopic = this.onChangeTopic.bind(this);
        this.onChangeDetail = this.onChangeDetail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            topic: '',
            detail: '',
            _id: '',
            
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:4000/notifications/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    topic: response.data.topic,
                    detail: response.data.detail,
                    _id: response.data._id
                })
            console.log(this.state.topic);
            
            })
            .catch(function (error) {
                console.log(error)
            })
            


    }

    onChangeTopic(e) {
        this.setState({
            topic: e.target.value
        });
    }
    onChangeDetail(e) {
        this.setState({
            detail: e.target.value
        });
    }
    

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            _id: this.state._id,
            topic: this.state.topic,
            detail: this.state.detail,
            
        };
        axios.post('http://localhost:4000/notifications/updatenotification/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/admin/notification/');
        window.location.reload();
        




    }

    deleteUser(e) {
        e.preventDefault();
        alert("Are you sure?")
        console.log("abc")
        var id = localStorage.getItem('spId');
        console.log(id);

        
        axios.delete('http://localhost:4000/notifications/removenotification/' + id, {})
            .then(res => console.log(res));

        this.props.history.push('/admin/notification/');
        window.location.reload();
        alert("Successfully Deleted")
    }

    render() {
        localStorage.setItem("spId", this.state._id);
        return (
            <div>
                <LeftAdmin />
                <div class="right">
                    <Upper />
                    <div className="frm">
                        <div className="txt">
                            <h3 >Update Notifications</h3>
                        </div>

                        <form onSubmit={this.onSubmit} >

                            <div className="form-group">
                                <label>Topic</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.topic}
                                    onChange={this.onChangeTopic}
                                />
                            </div>
                            <div className="form-group">
                                <label>Detail</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.detail}
                                    onChange={this.onChangeDetail}
                                />
                            </div>
                           

                            <div className="form-group">
                                <br />
                                <input type="submit" value="Update Notification" className="btn btn-primary" />
                            </div>
                            

                        </form>
                            <div>
                                <Button onClick={this.deleteUser}>Delete</Button>
                            </div>

                    </div>

                </div>


            </div>

        )
    }
}
export default (EditNotification);