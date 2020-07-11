import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,  Route} from 'react-router-dom';
import Acasa from './Components/Acasa';
import Despre from './Components/Despre';
import Programare from './Components/Programare';
import Login from './Components/Login';
import ResetareParola from './Components/ResetareParola';
import Signup from './Components/Signup';
import {Image} from 'react-bootstrap';
import RaportProgramari from "./Components/RaportProgramari";
import RaportProgramariUser from "./Components/RaportProgramariUser";
import RaportUsers from "./Components/RaportUsers";
import ImplantDentar from "./Components/PaginiPrezentare/ImplantDentar";
import Pedodontie from "./Components/PaginiPrezentare/Pedodontie";
import Protetica from "./Components/PaginiPrezentare/Protetica";
import Radiologie from "./Components/PaginiPrezentare/Radiologie";
import StomatologieGenerala from "./Components/PaginiPrezentare/StomatologieGenerala";
import ChirurgieOMF from "./Components/PaginiPrezentare/ChirurgieOMF";
import EsteticaDentara from "./Components/PaginiPrezentare/EsteticaDentara";
import Parodontologie from "./Components/PaginiPrezentare/Parodontologie";

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
            <Route  path="/Signup" component={Signup}/>
            <Route exact path="/RaportProgramari" component={RaportProgramari}/>
            <Route exact path="/RaportProgramariUser" component={RaportProgramariUser}/>
            <Route exact path="/ImplantDentar" component={ImplantDentar}/>
            <Route exact path="/Pedodontie" component={Pedodontie}/>
            <Route exact path="/Protetica" component={Protetica}/>
            <Route exact path="/Radiologie" component={Radiologie}/>
            <Route exact path="/StomatologieGenerala" component={StomatologieGenerala}/>
            <Route exact path="/ChirurgieOMF" component={ChirurgieOMF}/>
            <Route exact path="/EsteticaDentara" component={EsteticaDentara}/>
            <Route exact path="/Parodontologie" component={Parodontologie}/>
            <Route exact path="/RaportUsers" component={RaportUsers}/>
            <Route exact path="/ResetareParola" component={ResetareParola}/>


          


          </div>
        </div>
      </Router>
      </div>
      )
    }
}

export default App;
