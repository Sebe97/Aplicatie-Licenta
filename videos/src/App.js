import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import {BrowserRouter as Router,  Route} from 'react-router-dom';
import Acasa from './Components/Acasa';
import Despre from './Components/Despre';
import Contact from './Components/Contact';
import Locatie from './Components/Locatie';
import {Image} from 'react-bootstrap';

class App extends Component {
  render(){
    return(
      <div>
      <Router>
        <div className = "fullImage">
        <Image src={require('./images/pplSmiling.jpg')} className='imagineGenerala'/>                   

          <div className = "wrapper">
            <Navbar></Navbar>
            <Route exact path="/" component={Acasa}/>
            <Route exact path="/Despre" component={Despre}/>
            <Route exact path="/Contact" component={Contact}/>
            <Route exact path="/Locatie" component={Locatie}/>
          </div>
        </div>
      </Router>
      </div>
      )
    }
}

export default App;
