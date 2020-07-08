
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import Navbar from "../Navbar";
import PaginaPrezentare from "./PaginaPrezentare";
import './PaginaPrezentare.css';

export default class StomatologieGenerala extends Component {
   

    componentDidMount(){

    }
    render() {
        let poze = {
            titlu       : "Stomatologie Generala",
            descriere   : "Stomatologia generală previne şi tratează problemele curente legate de sănătatea dentară.",
            poza1       : "https://www.drgrigoriu.ro/wp-content/uploads/2016/11/stomatologie-generala-bacau.jpg",  
            poza2       : "https://dralmasan.ro/wp-content/uploads/2015/07/stomatologie-generala-servicii.jpg",
            text        : <div class="sppb-addon-content">Stomatologia generală previne şi tratează problemele curente legate de sănătatea dentară.<br></br>
            <br></br>
            Astfel sunt acoperite aspectele ce privesc o igienă bucală corectă, prevenirea apariţiei cariilor, detartrajul, cosmetică dentară,&nbsp; tratamentul cariilor simple şi complicate.etc.<br></br>
            <br></br>
            Profilaxia dentară cuprinde toate procedurile de igienizare şi detartraj cu ajutorul cărora putem preveni apariţia leziunilor carioase şi parodontale de la nivelul cavităţii bucale. Detartrajul constă în îndepărtarea depunerilor dure de tartru (piatra dentară) cu ajutorul aparatului cu ultrasunete. Tartrul este de fapt o acumulare de bacterii foarte bine sedimentată pe suprafata dintelui, supra şi subgingival. Printr-un periaj realizat profesional de către medicul dentist se îndepărtează placa dentară (depunerile moi) şi coloraţiile de pe suprafaţa dinţilor. Finisarea procesului de curăţire a suprafeţelor dentare se realizează la final cu ajutorul aparatului de Air Flow, duş cu presiune ce lasă o senzaţie extrem de plăcută, de curăţenie.<br></br>
            <br></br>
            Cariile sunt leziuni distructive ale dinţilor ce apar datorită bacteriilor prezente la nivelul cavităţii bucale. Acestea pot fi superficiale, medii şi avansate. Prezentarea regulată la cabinetul stomatologic, cresc şansele de depistare şi de tratare a acestora. Tratamentul cariilor se realizează prin îndepărtarea ţesuturilor afectate şi restaurarea dintelui cu ajutorul materialelor de obturaţie coronară.<br></br>
            <br></br>
            Clinica noastră dispune de materiale de obturaţie coronară&nbsp; ce îndeplinesc condiţiile esenţiale de calitate-estetica, rezistenţă mecanică şi durabilitate.</div>
         }
        return (
        <div>
            <Navbar></Navbar>
            {/* <PaginaPrezentare poze = "https://velvetdental.ro/wp-content/uploads/2018/09/dentist-fairfield-ca-dental-implants-1024x722.jpg"></PaginaPrezentare> */}
            <PaginaPrezentare {...poze}></PaginaPrezentare>
        </div>
        );
    }
}