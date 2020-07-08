
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
            titlu       : "Parodontologie",
            descriere   : "Boala parodontală este una dintre cele mai întânite afecțiuni stomatologice și se manifestă atunci când gingia se inflamează, osul se retrage şi are ca rezultat pierderea dinţilor.",
            poza1       : "https://eurodent-stomatologie.ro/img-oferte/Paradontoza--6239696461_0_huge.jpg",  
            poza2       : "https://drcarmen.ro/wp-content/uploads/2016/11/parodontologie.jpg",
            text        :<div class="sppb-addon-content">Boala parodontală este una dintre cele mai întânite afecțiuni stomatologice și se manifestă atunci când gingia se inflamează, osul se retrage şi are ca rezultat pierderea dinţilor. <br></br><br></br>Principala cauză o reprezintă placa bacteriană care apare din cauza unei igiene precare și a îngrijirii necorespunzătoare a dinților. Tartrul astfel format este mediul în care bacteriile se dezvoltă și crează probleme danturii.<br></br><br></br>Simptomele acestei boli sunt destul de evidente iar pacienții trebuie să acționeze imediat cum le observă:<br></br><br></br>-halena (respirație urât mirositoare);<br></br>-gust neplăcut în cavitatea orală;<br></br>-sângerare constantă în timpul periajului;<br></br>-retracția dinților (gingia se îndepărtează);<br></br>-spații între dinți;<br></br>-gingiile slăbite (mai moi);<br></br>-gingii de culoare roșie sau inflamate;<br></br>-durere sau sensibilitate la contactul cu alimente calde sau reci;<br></br>-durere în timpul masticației;<br></br>-sensibilitate crescută a danturii;<br></br>-dinți mobili<br></br><br></br>Medicul specialist parodontolog vine în sprijinul pacientului cu un pachet de prevenție şi tratament a bolii parodontale<br></br><br></br>O primă etapă este tratamentul non-chirurgical în care primul pas este un detartraj, după care este urmat de chiuretajul parodontal. Acesta ajută la îndepărtarea bacteriile care s-au înmulțit și au format&nbsp; o pungă parodontală între dinte și gingie. Urmează o&nbsp; decontaminare cu laser, pentru a&nbsp; steriliza zona respectivă.<br></br><br></br>Tratamentul continuă prin menţinerea unei igiene stricte. Pacientul trebuie să contribuie la menținerea sănătății bucale&nbsp; prin respecatarea indicațiilor trasate de medic cu privire la igiena orală realizată printr-un periaj corect și prin folosirea de mijloace ajutattoare de igienă: ața dentară, dușul bucal și apa de gură. <br></br><br></br>Pacientul trebuie să se prezinte la medic regulat pentru a evalua rezultatele tratamentului şi realizarea altor acţiuni ce au ca rezultat ținerea sub control a acestei afecţiuni. <br></br><br></br>Dacă este descoperită la timp, boala parodontală poate fi oprită din evoluția sa, evitând astfel pierderea dinţilor.</div>
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