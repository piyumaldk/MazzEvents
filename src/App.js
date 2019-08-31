import React, {Components} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import {Nav} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">EVENTS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">ABOUT US</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">LOG IN</Nav.Link>
        </Nav.Item>
      </Nav>
      <p ClassName="Title">MazzEvents - Colombo</p>   
    </div>
  );
}

export default App;
