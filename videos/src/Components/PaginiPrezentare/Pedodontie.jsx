
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
            titlu       : "Pedodontie",
            descriere   : "Stomatologie copii",
            poza1       : "https://www.dentexpert-roman.ro/wp-content/uploads/2019/07/pedodontie.jpg",
            poza2       : "https://www.gdent.ro/upload/userfiles/images/pedodontie.jpg",  
            text        : <div class="sppb-addon-content">Consultul și tratamentul stomatologic pediatric se desfășoară ținând cont de dezvoltarea psihosomatică a copilului și de nevoile speciale ale acestuia în comparatie cu pacientul adult. Este esențial să se evite crearea oricărei forme de aversiune a micului pacient față de vizita la cabinetul stomatologic, aspect caruia ii acordam importanța cuvenită.<br></br><br></br>&nbsp;Un mediu luminos, curat și incitant pentru copii crează de asemena un sentiment de siguranță, absolut necesar obținerii cooperării pacientului minor.<br></br><br></br>Serviciile de pedodonție ale clinicii noastre includ, pe lângă controalele de rutină recomandate, măsuri de consiliere, profilaxie și igienă specifice: supravegherea erupției dinților, curățarea profesională a dentitiei temporare si permanente tinere și, atunci când este cazul, sigilarea dentară și tratamentele cu fluor.<br></br><br></br>Pentru copil este foarte important să existe un plan de igienă dentară de lungă durată care să includă atât formarea obiceiurilor de igienă zilnică, cât și rutina vizitelor periodice la stomatolog.<br></br><br></br>Aparent dinții de lapte nu sunt importanți, având în vedere că oricum vor cădea și în locul lor va erupe un dinte definitiv. Această concepție este greșită, deoarece anumite afecțiuni ale dinților de lapte pot provoca tulburări în dezvoltarea dinților definitivi. Sănătatea unui dinte de lapte asigură sănătatea viitorului dinte definitiv și dezvoltarea armonioasă și sănătoasă a arcadelor dentare. Așadar, este foarte important să acordăm atenție prevenirii și tratării afecțiunilor dentare ale copiilor noștri. <br></br><br></br>Profesioniștii noștri vă stau la dispoziție cu servicii de calitate:<br></br>
            <ul>
            <li>Consultaţie + periaj profesional&nbsp; + instructaj asupra regulilor de periaj</li>
            <li>Tratamentul cariei simple/complicate la dintii temporari</li>
            <li>Terapia dintilor permanenti tineri</li>
            <li>Extracția dinților de lapte</li>
            <li>Decondiționarea obiceiurilor vicioase</li>
            <li>Tratamentul traumatismelor dentare</li>
            <li>Tratamentul afectiunilor parodontale ale adolescentului</li>
            <li>Tratamente profilactice – procedee de sigilare a santurilor si fosetelor, fluorizări, instruirea copiilor privind periajul.</li>
            </ul>
            </div>
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