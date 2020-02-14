import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import Upper from "../../Components/Upper.component";
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import LeftServiceProvider from '../../Components/LeftServiceProvider.component';
const Rating = props => (
    <tr>
        <td>{props.rating.customerFName} {props.rating.customerLName}</td>
        <td>{props.rating.customerEmail}</td>
        <td>
            <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={props.rating.rate}
            />
        </td>
    </tr>
)

class ServiceProviderReviews extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }   
    componentDidMount() {
        console.log("test");
        axios.get('http://localhost:4000/rating/')
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
         return this.state.users.map(function(currentRating, i){
            if(currentRating.spId === id){
             return <Rating rating={currentRating} key={i} />;
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
                    <h3>List of Our Service Providers</h3>
                        <table className="table table-striped" style={{ marginTop: 20 }} >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Rate</th>
                                    
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

export default connect(mapStateToProps,null)(ServiceProviderReviews);
