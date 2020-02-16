import React, { Component } from 'react';
import LeftServiceProvider from "../../Components/LeftServiceProvider.component";
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Upper from "../../Components/Upper.component";
import axios from 'axios';
import { connect } from 'react-redux';


const Request = props => (
  <tr>
    
      <td>{props.request.customerFName} {props.request.customerLName}</td>
      <td>{props.request.customerEmail}</td>
      <td>{props.request.name}</td>
      <td>{props.request.subject}</td>
      <td>{props.request.text}</td>
      <td><Link to={"/serviceprovider/respond/"+props.request._id}>Respond</Link></td>
  </tr>
)

class ServiceProviderViewBookings extends Component {
  constructor(props) {
      super(props);
      this.state = {users: []};
  }   
  componentDidMount() {
      console.log("test");
      const id = this.props.id;
      console.log(id);
      axios.get('http://localhost:4000/request/')
          .then(response => {
              this.setState({ users: response.data });
              console.log(this.state.users);    
          })
          .catch(function (error){
              console.log(error);
          })
          
  };

   UserList() {
      const id = this.props.id;
       return this.state.users.map(function(currentRequest, i){
        if(currentRequest.spId === id){
          return <Request request={currentRequest} key={i} />;
         }
         return null;                   
       })
   }

  render() {

      
      return (
          <div>
               
              <LeftServiceProvider/>
              <div className="right">
                  <Upper/>

                  <div>
                  <h3>Requests</h3>
                      <table className="table table-striped" style={{ marginTop: 20 }} >
                          <thead>
                              <tr>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Request Name</th>
                                  <th>Subject</th>
                                  <th>Text</th>
                                  <th></th>
                              </tr>
                          </thead>
                          <tbody>
                              
                              { this.UserList() }
                          </tbody>
                      </table>
                  </div>
              </div>
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

export default connect(mapStateToProps,null)(ServiceProviderViewBookings);
