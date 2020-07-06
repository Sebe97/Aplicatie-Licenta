import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import Navbar from "./Navbar";
import './Despre.css';
import Login from "./Login";
import { Pagination } from 'reactstrap';
export default class Despre extends Component {
    constructor(props){
        super(props);
         
        this.state={
            token: "",
       
        }

    }
    componentDidMount() { 
        // din localStorage iau userSession
        // daca exista valoare in local storage inseamna ca userul este deja logat
        // asa ca vom afisa Pagination, in caz contrar redirectionam catre login
        

        const token = localStorage.getItem("userSession");
        this.setState({
            token ,
        })
    }
    render() {
        const{token=""} =  this.state

        return (
            <div>
            { !token && <Login/>}
            { token&&
                <div>
                 <Navbar/>
                    <Jumbotron>
                        <div class="sppb-addon-content"><strong>Tratament endodontic</strong>: dezinfecţia sistemului endodontic<br></br><strong>Hemostază</strong><br></br><strong>Tratamentul herpesului, aftelor bucale</strong> cu diminuarea durerii resimțite de pacient<br></br><strong>Expunerea dinţilor neerupti<br></br>Terapia durerii/Biostimulare -&nbsp;</strong>sistem muscular, sistem osos<br></br><strong>Albire dentară profesională<br></br><br></br>Indicații biostimulare:<br></br><br></br><br></br></strong>- după orice intervenție chirurgicală (grăbește vindecarea , scade inflamația)<br></br>- după activarea aparatului ortodontic<br></br>- in cazul trismusului (imposibilitatea deschiderii gurii)<br></br>- patologia articulației temporo-mandibulare ( artrite, artroze)<br></br><br></br><strong>Albirea dentară cu laserul Epic X:<br></br></strong>&nbsp;<br></br>Procedura albirii cu laserul Epic X este extrem de simplă, rapidă, sigură și confortabilă: - se aplică un gel de albire pe bază de peroxid de hidrogen activat de laser<br></br>- albirea dentară cu laser este cea mai puțin invazivă metodă de albire a dinților&nbsp; <br></br>- numără o multitudine de beneficii comparativ cu albirea clasică<br></br>- smalțul este penetrat rapid de substanța de albire, iar contactul dintre acesta și gelul de albire este de scurtă durată asigurând protecția dinților pe parcursul procedurii<br></br>- tratamentul de albire se realizează într-o singură ședință (maxim 20 de minute)<br></br>- rezultatele albirii cu laser durează mult mai mult decât în cazul abordării clasice cu gutiere sau prin fotopolimerizare<br></br>- absența sensibilității dentare post-procedură<br></br><br></br></div>
                    </Jumbotron>
                    <Row className = "show-grid text-center">
                                <Col xs={4} md={4} className = "person-wrapper">
                                    <Image src={require('../images/grati1.jpg')}  circle className= "rounded-circle" />
                                    <h3>
                                    <a href="https://www.facebook.com/gratiela.baciu">Gratiela Baciu</a>
                                    </h3>
                                    <p>Ceva despre acest dotor Ceva despre acest dotor Ceva despre acest dottor Ceva despre acest dotor</p>
                                </Col>  

                                <Col xs={4} md={4} className="person-wrapper">
                                    <Image src={require('../images/grati1.jpg')}   circle className= "rounded-circle" />
                                    <h3>Doctor 2</h3>
                                    <p>Ceva despre acest dotor Cevast dotor Ceva despre acest dotor Ceva despre acest Ceva despre acest dotor</p>
                                </Col>  

                                <Col xs={4} md={4} className="person-wrapper"> 
                                    <Image src={require('../images/grati1.jpg')}    circle className= "rounded-circle" />
                                    <h3>Doctor 3</h3>
                                    <p>Ceva despre acest dotor Ceva despre acest dotor Ceva dotor Ceva despre acest dotor Ceva despre acest dotor</p>
                                </Col>  
                    </Row>

                </div>
            }
            </div>
        )
    }
}