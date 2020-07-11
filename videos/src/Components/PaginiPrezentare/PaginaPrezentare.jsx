
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Navbar from "../Navbar";
import NavbarUser from "../NavbarUser";

import './PaginaPrezentare.css';

export default class PaginaPrezentare extends Component {
   
    constructor(props){
        super(props);
         
        this.state={
            admin: false,
        }

    }
    
    render() {
        const admin = localStorage.getItem("Admin");
      
        return (
            <div>
                { admin == "true" && <Navbar/>}
                { admin == "false" && <NavbarUser/>}
                <div >
                    <div class="card">
                        <div class="blogHeader">
                            <span class="blogCategory">{this.props.poze}</span>
                            <h1 class="postTitle">{this.props.titlu}</h1>
                            <span class="postedBy">{this.props.descriere}</span>
                        </div>

                        <div className="postImageContainer">
                            <div className="pictureContainer col-md-12 d-flex">
                                <div className ="col-md-6 d-flex">
                                    <img src={this.props.poza1} alt="Post Image"></img>
                                </div>

                                <div  className ="col-md-6 d-flex">
                                    <img src={this.props.poza2} alt="Post Image"></img>
                                </div>
                            </div>
                        </div>
                            <div class="postContent">
                            
                            <div className="text">
                            {this.props.text}
                            </div>   
                        </div>
                    </div>      
                </div>
            </div>
        );
    }
}