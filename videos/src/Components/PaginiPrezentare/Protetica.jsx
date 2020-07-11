
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import Navbar from "../Navbar";
import PaginaPrezentare from "./PaginaPrezentare";
import './PaginaPrezentare.css';

export default class Pedodontie extends Component {
   

    componentDidMount(){

    }
    render() {
        let poze = {
            titlu       : "Protetica",
            descriere   : "Atunci când caria distruge o mare parte din ţesutul dentar",
            poza1       : "https://pomadent.ro/wp-content/uploads/2017/04/dental-implant1.png",
            poza2       : "https://lh3.googleusercontent.com/proxy/KU2hfUJwjYBa7mAVO0D871oeZXfA5jbLVhtkmLFTYj5MFicNxJaPa3uPvVE87dI8fvsSrs-dR6NgIQI2YP3bHYXrn3R6F20bvok3HOPy224UsyrS3sSi0Ctpo9xqZgAf0ekKC4nP",  
            text        : <div id="sppb-addon-1501227223" class="clearfix "><div class="sppb-addon sppb-addon-text-block sppb-text-left "><div class="sppb-addon-content">Atunci când caria distruge o mare parte din ţesutul dentar, iar acesta nu mai poate fi refăcut prin obturaţie coronară (plombă), când pereţii restanţi ai dintelui sunt prea subțiri pentru a suporta presiunile exercitate la masticaţie este necesară protejarea dinţilor prin acoperirea lor cu o coroană dentară.<br></br><br></br>Există situaţii în care dintele nu mai poate fi salvat, fiind necesară extracţia acestuia. Spaţiul rămas în urma extracţiei poate fi completat fie cu ajutorul unui implant, fie cu ajutorul unei lucrări protetice fixe – punte dentară. <br></br>Atunci când pacientul îşi pierde un număr mai mare de dinţi sau chiar toţi dinţii de pe o arcadă, este necesară o lucrare protetică mobilă – proteză dentară care trebuie îndepărtată zilnic (după fiecare masă) pentru igienizare.<br></br><br></br>Fiecare pacient prezintă o situaţie clinică diferită, de aceea planul de tratament şi alegerea tipului de lucrare protetică se va face numai după o consultaţie amănunţită şi o radiografie.<br></br><br></br>În clinica MHDENT oferim soluţii moderne de protezare, lucrări executate conform standardelor europene, cu materiale de cea mai bună calitate.<br></br>
            <ul>
            <li>&nbsp;&nbsp;&nbsp; coroane integrale ceramice (lucrări protetice din porţelan fără suport metalic-Emax)</li>
            <li>&nbsp;&nbsp;&nbsp; lucrări protetice ceramice (porţelan) pe suport de oxid de zirconiu,</li>
            <li>&nbsp;&nbsp;&nbsp; lucrări protetice ceramice (porțelan) pe suport metalic (aliaj crom cobalt)</li>
            <li>&nbsp;&nbsp;&nbsp; faţete ceramice</li>
            <li>&nbsp;&nbsp;&nbsp; incrustaţii din ceramică sau zirconiu</li>
            <li>&nbsp;&nbsp;&nbsp; lucrări protetice fixe și mobile pe implanturi dentare</li>
            <li>&nbsp;&nbsp;&nbsp; proteze dentare mobile (acrilice, elastice, scheletate).</li>
            </ul>
            <br></br>Misiunea specialiştilor noştri este să asigure obținerea unor arcade dentare echilibrate din punct de vedere morfo-funcțional și estetic.<br></br> Obținerea unor rezultatelor perfecte în restaurările dentare este efectul unui efort susținut al echipei noastre de medici ce au o pregătire și experiență profesională pe diverse specializări: stomatologie generală, protetică, parodontologie, endodonție, chirurgie, implantologie.</div></div></div>
        }
        return (
        <div>
            {/* <Navbar></Navbar> */}
            {/* <PaginaPrezentare poze = "https://velvetdental.ro/wp-content/uploads/2018/09/dentist-fairfield-ca-dental-implants-1024x722.jpg"></PaginaPrezentare> */}
            <PaginaPrezentare {...poze}></PaginaPrezentare>
        </div>
        );
    }
}