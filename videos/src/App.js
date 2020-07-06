import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,  Route} from 'react-router-dom';
import Acasa from './Components/Acasa';
import Despre from './Components/Despre';
import Programare from './Components/Programare';
import Login from './Components/Login';
import {Image} from 'react-bootstrap';
import RaportProgramari from "./Components/RaportProgramari";
import ImplantDentar from "./Components/PaginiPrezentare/ImplantDentar";
import Pedodontie from "./Components/PaginiPrezentare/Pedodontie";
import Protetica from "./Components/PaginiPrezentare/Protetica";

import Home from './containers/Home';
import Header from './components2/Header';
import Hero from './components2/Hero';
import Post from './containers/Post';
import ContactUS from './containers/ContactUS';

class App extends Component {
  
  render(){
    return(
      <div>
      <Router>
        <div className = "fullImage">
        <Image src={require('./images/pplSmiling.jpg')} className='imagineGenerala'/>                   

          <div className = "wrapper">
            {/* <Navbar></Navbar> */}
            <Route exact path="/" component={Acasa}/>
            <Route exact path="/Despre" component={Despre}/>
            <Route exact path="/Programare" component={Programare}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/RaportProgramari" component={RaportProgramari}/>
            <Route exact path="/ImplantDentar" component={ImplantDentar}/>
            <Route exact path="/Pedodontie" component={Pedodontie}/>
            <Route exact path="/Protetica" component={Protetica}/>


          


          </div>
        </div>
      </Router>
      </div>
      )
    }
}

export default App;
