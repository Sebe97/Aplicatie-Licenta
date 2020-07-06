import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Navbar from "./Navbar";
import './Locatie.css';

export default class Locatie extends Component {
    componentDidMount(){

    }
    render() {
        return (
     <div>
sdfasfsdsfasfasudsahfiasfiasfiuadsifuahsuifahs
            <Map className= "mapStyles"
                google={this.props.google}
                zoom={8}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
                /> 
    </div>
        );
    }
}