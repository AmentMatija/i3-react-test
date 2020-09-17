import React from 'react';
import './App.css';

import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import ImageGallery from "./Components/ImageGallery";
import Second from "./Components/Second";
import Lorem1 from "./Components/Lorem1";
import Lorem2 from "./Components/Lorem2";

function App() {
  return (
    <Router>
     <Navbar bg="primary" expand="lg" >
        <Navbar.Brand as={Link} to="/" >Image Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav >
            <Nav.Link as={Link} to="/Components/Second">Second page</Nav.Link>
            <Nav.Link as={Link} to="/Components/Lorem1">Lorem1</Nav.Link>
            <Nav.Link as={Link} to="/Components/Lorem2">Lorem2</Nav.Link>
          </Nav>          
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/Components/Second">
          <Second />
        </Route>
        <Route path="/Components/Lorem1">
          <Lorem1 />
        </Route>
        <Route path="/Components/Lorem2">
          <Lorem2 />
        </Route>
        <Route path="/">
          <ImageGallery />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
