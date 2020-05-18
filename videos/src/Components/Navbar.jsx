import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import './Navbar.css';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="/">
            <Image src={require('../images/logo.png')} circle className="rounded-circle logo" />

          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem href="/Despre">
              <NavLink>
                <Link to="/Despre">
                    Despre
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink >
                <Link to="/">
                  GitHub
                </Link>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Servicii
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>                  Stomatologie Generala                </DropdownItem>
                <DropdownItem>                  Implant Dentar                       </DropdownItem>
                <DropdownItem>                  Urgente Stomatologice                </DropdownItem>
                <DropdownItem>                  Urgente Stomatologice                </DropdownItem>
                <DropdownItem>                  Urgente Stomatologice                </DropdownItem>
                <DropdownItem>                  Urgente Stomatologice                </DropdownItem>
                <DropdownItem>                  Urgente Stomatologice                </DropdownItem>
                <DropdownItem>                  Urgente Stomatologice                </DropdownItem>
                <DropdownItem>                  Urgente Stomatologice                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            <h1>Programari la: 0747691012</h1></NavbarText>
        </Collapse>
      </Navbar> */}
<nav class="navbar navbar-expand-lg navbar-light bg-light col-md-12">
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
</nav>




</div>
  );
}

export default Example;