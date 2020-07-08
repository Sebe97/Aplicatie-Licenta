
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import Navbar from "../Navbar";
import PaginaPrezentare from "./PaginaPrezentare";
import './PaginaPrezentare.css';

export default class ImplantDentar extends Component {
   

    componentDidMount(){

    }
    render() {
        let poze = {
            titlu       : "Implant Dentar",
            descriere   : "Implanturile dentare reprezintă cea mai modernă şi eficientă soluţie de înlocuire a dinţilor pierduţi.",
            poza1       : "https://velvetdental.ro/wp-content/uploads/2018/09/dentist-fairfield-ca-dental-implants-1024x722.jpg",
            poza2       : "https://dentocare.ro/wp-content/uploads/2019/07/implantul-dentar.jpg",  
            text        : <div >O intervenţie stomatologică de implant dentar constă în înlocuirea protetică a unui dinte lipsă ori alterat. Implantul este format din coroana de culoare albă (partea vizibilă), stâlpul de legătură (bont protetic)&nbsp;
            şi şurubul cu rol de rădăcină (implantul). Cele mai răspândite implanturi dentare sunt cele din titan, care se integrează perfect în maxilar, datorită fenomenului de osteointegrare. <br></br>&nbsp;&nbsp;<br></br>În comparaţie cu o lucrare protetică tradiţională ce se realizează folosind că legătura dinţii sănătoşi care sunt sacrificaţi pentru a putea ancora lucrarea, immplantul dentar protejaza dinţii învecinaţi. În cazul în care confecţionăm o punte dentară (bridge=pod), aceasta are nevoie pentru ancorare de minimum 2 dinţi stâlpi, dinţi ce vor fi din păcate sacrificaţi (se extrag nervii, se obturează canalele şi se şlefuiesc dintâi care odinioară erau sănătoşi).<br></br>&nbsp;<br></br><br></br><strong>Beneficiile implanturilor dentare sunt multiple, câteva din acestea sunt:</strong><br></br><br></br><strong>Preţ convenabil</strong> - deoarece înlocuieşte doar dinţii lipsă şi nu adauuga costuri suplimentare cu tratamentul dintior de lagatura/realizarea de coroane dentare mai mari şi mai inestetice.<br></br><br></br><strong>Salvează dinţii</strong> - implanturile dentare nu sacrifică integritatea dinţilor învecinaţi cum ar face o punte dentară, deoarece lucrarea dentară se sprijină pe implanturi şi nu pe dinţi naturali. <br></br><br></br><strong>Salvează osul</strong> - în lipsa dinţilor, osul începe să se demineralizeze şi să se resoarbă afectând echilibrul aparatului masticator şi implicit al întregului organism. Implantul dentar, asemenea unei rădăcini naturale&nbsp; păstrează integritatea osului. Coroanele susţinute de implanturi sunt ancorate fix şi transmit presiunile din timpul masticaţiei fiziologic în os, asemenea unui dinte natural, împiedicând resorbţia osoasă.<br></br><br></br><strong>Estetic</strong> - lucrările dentare pe implanturi pot&nbsp; fi unidentare (înlocuirea unui singur dinte), parţiale (înlocuirea unui grup de dinţi) şi totale (atunci când înlocuim toţi dinţii). Indiferent de tipul de înlocuire, lucrările dentare pe implanturi parsimilare dinţilor naturali.<br></br><br></br><strong>Rata de succes ridicată -</strong> rata de success a înlocuirii dinţilor prin implanturi este foarte mare (95 – 97%-mandibula şi 92 – 95%-maxilar), dacă pacientul prezintă o stare de sănătate generală şi locală (osul receptor) bună şi prezintă o igienă dentară bună. Păstrarea igienei orale deţine un rol hotărâtor în reuşita tratamentului prin implanturi, deoarece factorul microbian are un rol important şi poate compromite definitiv această reuşită.
          </div>
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