import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Navbar2 from './Components/Navbar2';
import {BrowserRouter as Router,  Route} from 'react-router-dom';
import Acasa from './Components/Acasa';
import Despre from './Components/Despre';
class App extends Component {
  render(){
    return(
      <div>
      <Router>
        <div>
          <Navbar></Navbar>
          <Route exact path="/" component={Acasa}/>
          <Route exact path="/Despre" component={Despre}/>
        </div>
      </Router>
      </div>
      )
    }
}

export default App;
