import React from 'react';
import "./card-style.css";



//import img1 from '../../Images/new.jpg';

const Card = props => {
    return (

        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt='image 1' className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title} </h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus recusandae placeat, itaque accusamus adipisci exercitationem necessitatibus minima earum aliquid quas?
              </p>
                <a href="#" className="btn btn-outline-success">Go Anywhere</a>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            facebook
                  </div>
                        <div className="col-md-4">
                            facebook
                  </div>
                        <div className="col-md-4">
                            facebook
                  </div>
                    </div>

                </div>
            </div>
        </div>
    );

};
export default Card;


