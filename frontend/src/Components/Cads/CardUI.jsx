import React from 'react';
import "./card-style.css";
import * as Icon from 'react-feather';



//import img1 from '../../Images/new.jpg';

const Card = props => {
    return (

        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt='image 1' className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title} </h4>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                           <h6>EVENTS</h6>
                  </div>
                        <div className="col-md-4">
                            <h6>RATINGS</h6>
                  </div>
                        <div className="col-md-4">
                            <h6>VIEWS</h6>
                  </div>
                    </div>

                </div>

                <br/>
                {/* <a href="#" className="btn btn-outline-success">Go Anywhere</a> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Icon.Facebook color="blue" size={20}/>
                  </div>
                        <div className="col-md-4">
                            <Icon.Instagram/>
                  </div>
                        <div className="col-md-4">
                            <Icon.Twitter/>
                  </div>
                    </div>

                </div>
            </div>
        </div>
    );

};
export default Card;


