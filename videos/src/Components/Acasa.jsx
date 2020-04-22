import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, div, Row, Col, Image, Button} from 'react-bootstrap';
import './Acasa.css';
import AcasaFooter from './AcasaFooter';
import ImagineDescriere from './Image';
import { ramuri } from "./ramuri";
import imgStomatologieGenerala from '../images/stomatologie-generala.png';


export default class Acasa extends Component{
    render(){
   
        return(
            <div className='fullBody'> 
                <div className='wrapper'>
                   
                    <Row>
                        <Col className="sidebar-section imagineAcasa" > 
                            <Image src={require('../images/acasa.jpg')} className='imagineAcasa'/>                   
                        </Col>
                    </Row>
                    <br></br>
                    <div className="content">

                    <div  class="bineAtiVenit">  
                        <div>
                            <h3 >Bine ai venit la clinica stomatologica Dentalux!</h3>
                            <div >
                                <strong>
                                    Ești pe mâini bune! Avem pentru tine cele mai moderne, inovatoare, atraumatice tratamente dentare,
                                    <br></br> 
                                    prin care medicii noștri dentiști te ajuta să îți redobândești sănătatea dentară.
                                </strong>
                            </div>
                        </div>
                    </div>
                    <br></br> 
                    
                    <Row>
                    {
                        ramuri.map((el, index) => <Col xs={6} md={3}>
                                <ImagineDescriere ramura={ramuri[index]} ></ImagineDescriere>
                            </Col>)
                    }
                                        
                    </Row>
                
                    <Row>
                        <Col xs={8} md={8}>
                            <div class="wpb_wrapper">
                                <p>De acum poți beneficia de tratamente dentare și soluții de ultimă oră, în cea mai nouă locație a noastră: Clinica stomatologică Dr. Leahu Pitești! Situată în strada Doaga Nr. 11, cea de-a 5-a clinică stomatologică Dr. Leahu asigură un mediu plăcut, un personal dedicat și calificat, aparatură modernă și o echipă de medici profesioniști, în oricare dintre cele 8 cabinete.</p>
                                <p>Din grijă pentru sănătatea și zâmbetul tău, oferim tratamente personalizate, care să se plieze pe nevoile și problemele fiecărui pacient în parte.Pentru că știm cât de prețios este timpul tău, îți oferim cele mai rapide și eficiente tratamente la această clinică stomatologică din Pitești, la cel mai înalt nivel de performanță, într-un număr cât mai mic de ședințe. Din acest motiv ținem pasul cu tot ceea ce este nou în domeniu și facem investiții constante în aparatura medicală.</p>
                                <p><strong>În plus, în clinica Dr Leahu din Pitești pot beneficia de tratament stomatologic de calitate și bolnavii de autism, schizofrenie sau epilepsie. Tratamentul acestora se realizează în urma sedării. Întrucât comunicarea dintre medic și pacient este extrem de importantă, medicii echipei Dr. Leahu din Pitești vor avea grijă ca pacienții să se simtă în largul lor în cabinetul stomatologic.</strong></p>

                            </div>
                        </Col>
                        <Col xs={4} md={4} className = "sidebar-section">
                            <Image src={require('../images/grati1.jpg')}/>
                            <p>DR. Baciu Gratiela</p>
                        </Col>
                    </Row>
                    </div>
                    <AcasaFooter />
                </div>
            </div>
        )
    }
}