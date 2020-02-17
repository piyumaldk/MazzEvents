import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import Upper from "../../Components/Upper.component";
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import LeftServiceProvider from '../../Components/LeftServiceProvider.component';
import PersonIcon from '@material-ui/icons/Person';
const Comment = props => (
    <div className="text">
    <tr>
        <tr>
        <td><PersonIcon/><b>{props.comment.customerFName} {props.comment.customerLName}:</b></td>
        </tr>
        <tr>
        <td>{props.comment.comment}</td>
        </tr>
    </tr>
    </div>
    
)

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }   
    componentDidMount() {
        console.log("test");
        axios.get('http://localhost:4000/comment/')
            .then(response => {
                this.setState({ users: response.data });
                console.log(this.state.users);  
                console.log("redda");
                console.log(localStorage.getItem('spId'));
                
            })
            .catch(function (error){
                console.log(error);
            })    
    };

    UserList() {
        const id = localStorage.getItem('spId');
        console.log("redda2");
         return this.state.users.map(function(currentComment, i){
            if(currentComment.spId === id){
             return <Comment comment={currentComment} key={i} />;
            }
            return null;            
        })
    }


    render() {
        return (
            <div>
                
                <div>
                    

                    <div>
                    <h3>Comment section</h3>
                        <table style={{ marginTop: 20 }} >
                            <thead>
                                <tr>
                                   
                                    
                                    
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

export default connect(mapStateToProps,null)(CommentSection);
