import React, { Component } from 'react';
import LeftAdmin from "../../Components/LeftAdmin.component";
import Upper from "../../Components/Upper.component";
import axios from 'axios';


export default class AdminSendNotification extends Component {
 
            constructor(props) {
                super(props);
        
                this.onChangeTopic = this.onChangeTopic.bind(this);
                this.onChangeDetail= this.onChangeDetail.bind(this);
                this.onSubmit = this.onSubmit.bind(this);
        
            this.state = {
                topic: '',
                detail: ''
               
            }
        
            }
        
            onChangeTopic(e){
                this.setState({
                    topic: e.target.value
                });
            }
            onChangeDetail(e){
                this.setState({
                    detail: e.target.value
                });
            }
        
            onSubmit(e) {
                e.preventDefault();
                const obj = {
                    topic: this.state.topic, 
                    detail: this.state.detail,
                };
        
                axios.post('http://localhost:4000/notifications/addnotification',obj)
                .then(res => console.log(res.data));
        
            this.props.history.push('/admin/sendnotification');
            window.location.reload();
        }
        
        
            render() {
                return (
                    <div>
                        <LeftAdmin/>
                        <div className="right">
                        <Upper/>
                        <div className="frm">
                        <div className="txt">
                        <h3 >Add Notification</h3>
                        </div>
                        
                        <form onSubmit={this.onSubmit} >
                            
                            <div className="form-group">
                                <label>Topic</label>
                                <input  type="text"
                                        className="form-control"
                                        //value={this.state.signup_eventName}
                                        onChange={this.onChangeTopic}
                                        />
                            </div>
                            <div className="form-group">
                                <label>Detail</label>
                                <textarea  type="text"
                                        className="form-control"
                                       // value={this.state.location}
                                        onChange={this.onChangeDetail}
                                        />
                            </div>
                            <div className="form-group">
                                <br/>
                                <input type="submit" value="Add Notification" className="btn btn-primary" />    
                            </div>
                           
                        </form>
                        </div>
                        
                    </div>
                        
                        
                    </div>    
        )
    }
}