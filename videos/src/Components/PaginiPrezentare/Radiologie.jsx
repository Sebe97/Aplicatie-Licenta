
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import Navbar from "../Navbar";
import PaginaPrezentare from "./PaginaPrezentare";
import './PaginaPrezentare.css';

export default class Radiologie extends Component {
   

    componentDidMount(){

    }
    render() {
        let poze = {
            titlu       : "Radiologie",
            descriere   : "Radiografie dentară digitală",
            poza1       : "http://www.sfatulmedicului.ro/external/uploads/upload/radiografie_dentara_646.jpg",  
            poza2       : "https://spektradent.ro/wp-content/uploads/2015/07/bite-wing-1.jpg",
            text        : <div class="sppb-addon-content">Radiografia dentară este o operaţiune esenţială în tratamentul stomatologic deoarece ajută la stabilirea unui diagnostic corect. Radiografia oferă o imagine detaliată a dinţilor, maxilarului şi ţesuturilor înconjurătoare&nbsp; obţinută prin expunerea la radiaţii electromagnetice. Radiaţiile sunt absorbite în grade diferite de ţesuturi în funcţie de densitate reliefând structurile mai dense (dinţii) cu alb, cavităţile cu negru, iar ţesuturile moi cu nuanţe de gri.<br></br><br></br>Clinica MH Dent dispune de un aparat radiologic performant ce poate realiză o radiografie dentară, rapid şi fără multe radiaţii, care ne permite să obţinem o imagine digitală complexă cavităţii bucale.<br></br><br></br>Datorită senzorilor aparatului imaginea digitală, obţinută prin expunerea la radiaţii x, va fi de calitate şi la o rezoluţie net superioară filmului convenţional, ceea ce permite posibilitatea prelucrării digitale (mărirea sau inspectarea imaginii) utilă medicii noştri care pot observa detalii importante ale dinţilor şi structurilor adiacente, pentru tratamente dentare mult mai eficiente.<br></br><br></br>Echipamentul foloseşte o cantitate de radiaţii redusă cu 80 % faţă de un aparat radiologic clasic (cu film). Astfel, pot fi realizate investigaţii radiologice şi femeilor însărcinate. În plus, procesul durează maxim 1 minut şi nu este necesară pregătirea prealabilă sau programare iar rezultatul apare imediat pe ecranul medicului stomatolog.<br></br><br></br><strong>Siguranță</strong><br></br>Foloseşte o cantitate de radiaţii scăzute iar timpul de expunere este de numai câteva secunde.<br></br>&nbsp;&nbsp; &nbsp;<br></br><strong>Posibilitatea prelucrării imaginii</strong><br></br>Imaginea radiografiei digitale poate fi mărită pentru a se obţine detalii importante ale dinţilor şi structurilor adiacente.<br></br><br></br><strong>Ecologic</strong><br></br>Nu sunt folosite substanţe chimice pentru developare ce pot să afecteze mediul înconjurător.<br></br>&nbsp; &nbsp;<br></br><strong>Calitate superioară a imaginii obţinute</strong><br></br>Aceasta înseamnă că pe radiografiile dentare digitale medicul poate identifica elemente&nbsp; care nu ar fi fost vizibile pe un film convenţional.</div>
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