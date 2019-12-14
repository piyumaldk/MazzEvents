import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import Upper from "../Components/Upper.component";
import Card from '../Components/Cads/CardUI';
import img1 from '../Images/Customer/new.jpg';
export default class Home extends Component {
    render() {
        return (
                <div>  
                     <Upper/>
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722_960_720.jpg" alt="First slide"/>
                                <Carousel.Caption>
                                    <h3>Kasun Kalhara - Musical Night</h3>
                                    <p>5th December : @Nelum Pokuna(7pm onwards)</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695_960_720.jpg" alt="Third slide"/>
                                <Carousel.Caption>
                                    <h3>New Year Vibe - 2020</h3>
                                    <p>31th December : @Viharamahadhevi(9pm onwards)</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2015/09/02/13/04/marriage-918864_960_720.jpg" alt="Third slide"/>
                                <Carousel.Caption>
                                    <h3>Mithila n Sumanawathi's Big day</h3>
                                    <p>18th December : @AvenraNegombo(5pm onwards)</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel> 
                        <div >
                    <p>Upcoming events</p>
                </div>
                <div className="fullbanner-container">
                <div className="row card_ss">
                        
                        <div className="col-md-3">
                            <Card imgsrc={img1} title="Sachin" />
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img1} title="Ravindu" />
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img1} title="Himash" />
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img1} title="Himash" />
                        </div>
                    </div> 
                    </div>  
                </div>  
        )
    }
}