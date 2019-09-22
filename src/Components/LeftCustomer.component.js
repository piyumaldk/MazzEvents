import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Pages/Home.component";

export default class LeftStaff extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route render={({location,history})=>(
                        <React.Fragment>
                            <SideNav onSelect={(selected)=>{
                                    const to = '/' + selected;
                                    if (location.pathname !== to) {
                                        history.push(to);
                                    }
                            }}>
                                <SideNav.Toggle/>
                                <SideNav.Nav defaultSelected="home">
                                    <NavItem eventKey="home">
                                        <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
                                        <NavText>Customer Dashboard</NavText>
                                    </NavItem>
                                    <NavItem eventKey="charts">
                                        <NavIcon><i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /></NavIcon>
                                        <NavText>Charts</NavText>
                                        <NavItem eventKey="charts/linechart">
                                            <NavText>Line Chart</NavText>
                                        </NavItem>
                                        <NavItem eventKey="charts/barchart">
                                            <NavText>Bar Chart</NavText>
                                        </NavItem>
                                    </NavItem>
                                </SideNav.Nav>
                            </SideNav>
                            <main>
                                <Route path="/home" component={props => <Home />} />
                                {/* <Route path="/devices" component={props => <Devices />} />
                                <Route path="/" exact component={props => <RootComponent />} /> */}
                            </main>
                        </React.Fragment>
                    )}/>
                </Router>    
            </div>   
        )
    }
}