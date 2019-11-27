import React from 'react';
import "./card-style.css";
import * as Icon from 'react-feather';



//import img1 from '../../Images/new.jpg';

const Card = props => {
    return (

        <div className="card text-center shadow mycard">
            <div className="overflow">
                <img src={props.imgsrc} alt="" className="card-img-top" />
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
               
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Icon.Facebook color="blue" size={30}/>
                  </div>
                        <div className="col-md-4">
                            <Icon.Instagram color="pink"/>
                  </div>
                        <div className="col-md-4">
                            <Icon.Twitter color="blue"/>
                  </div>
                    </div>

                </div>
                <br/>
                <a className="btn btn-outline-success" onClick={()=>props.selectFlower(props.title)}>Select</a>
            </div>
        </div>
    );

};
export default Card;


