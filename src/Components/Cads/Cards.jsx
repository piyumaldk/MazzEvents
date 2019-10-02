import React, {Component} from 'react'
import Card from './CardUI';
import LeftCustomer from "../../Components/LeftCustomer.component";

import img1 from '../../Images/new.jpg'

class Cards extends Component{
    render(){
        return(
            
            <div className="container-fluid d-flex justify-content-center">
                <LeftCustomer/>
                <div className="row">
                    <div className="col-md-4">
                    <Card imgsrc={img1} title="Sachin"/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img1} title="Ravindu"/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img1} title="Himash"/>
                    </div>
                    

                </div>
            </div>
        );
    }
}

export default Cards;