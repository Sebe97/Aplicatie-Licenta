
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import Navbar from "../Navbar";
import PaginaPrezentare from "./PaginaPrezentare";
import './PaginaPrezentare.css';

export default class EsteticaDentara extends Component {
   

    componentDidMount(){

    }
    render() {
        let poze = {
            titlu       : "Estetica Dentara",
            descriere   : "Zâmbet mai alb și mai strălucitor în maxim 45 de minute!",
            poza1       : "https://denttaglio.ro/wp-content/uploads/2019/03/estetica_dentara_denttaglio_clinic5.jpg",  
            poza2       : "https://denttaglio.ro/wp-content/uploads/2019/03/estetica_dentara_denttaglio_clinic3.jpg",
            text        : <div class="sppb-addon-content"><strong>Zâmbet mai alb și mai strălucitor în maxim 45 de minute!</strong><br></br><br></br>Albirea dentară profesională este cea mai simplă și confortabilă metodă stomatologică de a recăpăta strălucirea și albul dinţilor într-o singură vizită în cabinetul medicului stomatolog. Prin tehnicile de albire dentară practicate în clinica noastră redăm pacienților noştrii starea de bine și încrederea în sine.<br></br><br></br>Foarte puține persoane au într-adevăr un zâmbet complet alb, în mod natural, mai ales că odată cu înaintarea în vârsta, dinții sunt supuși acțiunii unor factori externi care duc la îngălbenirea sau pătarea acestora precum:<br></br>alimente și băuturi care schimbă culoarea dinților (cafeaua, ceaiul, vinul roșu etc.), fumatul, placa bacteriană/tartrul, tratamente îndelungate cu antibiotice, mici traumatisme dentare etc.<br></br><br></br>Efectele procedurii de albire dentară profesională pot dura și până la 2 ani, menținerea fiind influențata de obiceiurile pe care le are pacientul (fumează sau consumă cu regularitate alimente și băuturi colorante).<br></br><br></br><strong>Corectare imperfecţiuni prin faţete dentare</strong><br></br><br></br>Fațetele dentare sunt restaurări realizate din materiale care arată exact ca smalțul natural al dinților. Cu ajutorul acestor materiale, medicii noştrii stomatologi, specialiști în estetică dentară, corectează multe imperfecțiuni de ordin estetic, precum forma, spații interdentare inestetice, marmorație, denivelări inestetice la nivelul dintelui sau nuanța dinților, înghesuiri dentare minore, colorații, forme și dimensiuni inestetice ale anumitor dinți, traumatisme dentare sau leziuni carioase, dinți cu textură neomogenă sau asimetrici.<br></br><br></br>Beneficiile faţetelor dentare: procedură non-invazivă, nu necesită șlefuire și conservă vitalitatea dinților, ușor de întreținut, rezistență la pete, insesizabile, dinți în nuanța de alb dorită,&nbsp; redau estetica și funcționalitatea zâmbetului, fără reacții alergice</div>
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