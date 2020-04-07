import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

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
      <Navbar color="light" light expand="md">
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
      </Navbar>
    </div>
  );
}

export default Example;