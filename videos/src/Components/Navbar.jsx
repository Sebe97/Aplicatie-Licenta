import React, {Component } from 'react';
import {  Link, Redirect } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import './Navbar.css';
import Login from "./Login";
import Despre from "./Despre";
  

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';






export default class Example extends Component {
  
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);          
    this.state={
      userConfirmsLogOut:false,
    }
  } 
    
  
    logout(){
    
      let yesOrNo = window.confirm("Doriti sa va delogati?"); // Prompt "yes" sau "no"
      if(yesOrNo) // in cazul in care userul alege no, nu se intampla nimic
      // daca se alege "yes" se va sterge din memoria browserului userul
      {
        this.setState({userConfirmsLogOut: yesOrNo})
        localStorage.removeItem("userSession")
      }
    }
  render(){
    const{
      userConfirmsLogOut,
    } = this.state
    // const [isOpen, setIsOpen] = useState(false);    // functii pentru afisaz telefon ( collapse navbar )
    // const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div id ="navbar">
        
      {userConfirmsLogOut && <Redirect to={"/Login"} />} 
      {/*  in momoentul in care se apasa pe logout => redirect la login */}
      <div>
        <Navbar color="light" light expand="md">
          <div className="navbarPArent" >

          <NavbarToggler onClick={true} />
          <Collapse isOpen={true} navbar>
            <Nav className="mr-auto col-md-12" navbar>
            <a className="navbar-brand col-md-1" href="/">
              <Image src={require('../images/logo.png')} circle className="rounded-circle imagineLogo" />
            </a>

                <NavItem className="navbarItem" href="/Despre">
                   <NavLink>
                    <Link to="/Despre">
                        Despre
                    </Link>
                  </NavLink>
                 </NavItem> 

              <NavItem className = "navbarItem">
                <NavLink >
                  <Link to="/Programare">
                    Programare noua
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem className = "navbarItem">
                <NavLink >
                  <Link to="/RaportProgramari">
                    Toate progrmarile
                  </Link>
                </NavLink>
              </NavItem>


              <NavItem className = "navbarItem">
                <NavLink >
                  <Link to="/RaportUsers">
                    Useri
                  </Link>
                </NavLink>
              </NavItem>






              <UncontrolledDropdown nav inNavbar className = "navbarItem">
                <DropdownToggle nav caret>
                  Servicii
                </DropdownToggle>
                <DropdownMenu right>
                
              
                  
                <DropdownItem>                
                    <NavItem>
                      <NavLink >
                        <Link to="/StomatologieGenerala">
                          StomatologieGenerala
                        </Link>
                      </NavLink>
                    </NavItem>        
                  </DropdownItem>


                  <DropdownItem>                
                    <NavItem>
                      <NavLink >
                        <Link to="/ImplantDentar">
                          Implant Dentar
                        </Link>
                      </NavLink>
                    </NavItem>        
                  </DropdownItem>


                  <DropdownItem>                
                    <NavItem>
                      <NavLink >
                        <Link to="/Pedodontie">
                          Pedodontie
                        </Link>
                      </NavLink>
                    </NavItem>        
                  </DropdownItem>

                  
                  <DropdownItem>                
                    <NavItem>
                      <NavLink >
                        <Link to="/Protetica">
                          Protetica
                        </Link>
                      </NavLink>
                    </NavItem>        
                  </DropdownItem>


                  <DropdownItem>                
                    <NavItem>
                      <NavLink >
                        <Link to="/Radiologie">
                          Radiologie
                        </Link>
                      </NavLink>
                    </NavItem>        
                  </DropdownItem>

                  <DropdownItem>                
                    <NavItem>
                      <NavLink >
                        <Link to="/ChirurgieOMF">
                          Chirurgie OMF
                        </Link>
                      </NavLink>
                    </NavItem>        
                  </DropdownItem>

                  <DropdownItem>                
                    <NavItem>
                      <NavLink >
                        <Link to="/Parodontologie">
                          Estetica Dentara
                        </Link>
                      </NavLink>
                    </NavItem>        
                  </DropdownItem>

                  <DropdownItem>                
                    <NavItem>
                      <NavLink >
                        <Link to="/Parodontologie">
                          Parodontologie
                        </Link>
                      </NavLink>
                    </NavItem>        
                  </DropdownItem>
                  
                </DropdownMenu>
                
              </UncontrolledDropdown>


              <NavItem className="navbarItem" onClick = {this.logout}>
                <NavLink >
                  <Link to="#">
                    LogOut
                  </Link>
                </NavLink>
              </NavItem>   
              
              {/* <NavItem>
                <NavLink >
                <button className = "navbarItem"  onClick = {this.logout}  >Logout</button>
                      
                </NavLink>
              </NavItem> */}
            </Nav>
            {/* <NavbarText>
              <h1>Programari la: 0747691012</h1></NavbarText> */}
          </Collapse>
              </div>
        </Navbar> 
  {/* <nav class="navbar navbar-expand-lg navbar-light bg-light col-md-12">
    <a class="navbar-brand col-md-1" href="/">
    <Image src={require('../images/logo.png')} circle className="rounded-circle imagineLogo" />
    
    </a>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse  col-md-11" id="navbarNavDropdown">
      <ul class="navbar-nav " style = {{"width": "100%",   "flex-wrap": "wrap"}}>
        <li class="nav-item  col-md-1">
          <a class="nav-link" href="/Despre">Despre</a>
        </li>
        <li class="nav-item col-md-1">
          <a class="nav-link" href="/Contact">Contact</a>
        </li>
        <li class="nav-item col-md-1">
          <a class="nav-link" href="/Locatie">Loctie</a>
        </li>
        <li class="nav-item dropdown col-md-2">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Servicii
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="col-md-4">
        </li>
        <li class="d-flex justify-content-end">
          <a class="" href="#"><h5>Programari la: 0747691012</h5></a>
        </li>
      </ul>
    </div>
  </nav> */}




     </div>
  
    </div>
    );
  }
 }