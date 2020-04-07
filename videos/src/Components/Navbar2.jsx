import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import './CustomNavbar.css'

export default class CustomNavbar extends Component {
    render() {
        return (
            <div>

            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">CodeLife</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Acasoeaa
                         </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/Despre" to="/Despre">
                            Despre
                         </NavItem>
                      
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}