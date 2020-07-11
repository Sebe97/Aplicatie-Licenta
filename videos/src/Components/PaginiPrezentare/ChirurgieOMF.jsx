
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import Navbar from "../Navbar";
import PaginaPrezentare from "./PaginaPrezentare";
import './PaginaPrezentare.css';

export default class ChirurgieOMF extends Component {
   

    componentDidMount(){

    }
    render() {
        let poze = {
            titlu       : "Chirurgie OMF",
            descriere   : "Stomatologia generală previne şi tratează problemele curente legate de sănătatea dentară.",
            poza1       : "https://arradent.ro/wp-content/uploads/2015/01/arra_chirurgie_dentara_3.jpg",  
            poza2       : "https://dralmasan.ro/wp-content/uploads/2015/07/stomatologie-generala-servicii.jpg",
            text        : <div class="sppb-column-addons"><div id="sppb-addon-wrapper-1501228104" class="sppb-addon-wrapper"><div id="sppb-addon-1501228104" class="clearfix "><div class="sppb-addon sppb-addon-text-block sppb-text-left "><div class="sppb-addon-content">	Tratamentul stomatologic cu laserul dentar EPIC™ X Biolase este cel mai modern și revoluţionar tratament din domeniul stomatologiei, fiind o tehnică non-invazivă, extrem de precisă, rapidă și&nbsp; fără durere. Laserul dentar EPIC™ X Biolase&nbsp; reduce semnificativ sângerarea și perioada de recuperare post-procedură și asigură rate înalte de succes ale tratamentului.</div></div></div></div><div id="sppb-addon-wrapper-1501561988128" class="sppb-addon-wrapper"><div id="sppb-addon-1501561988128" class="clearfix "><div class="sppb-addon sppb-addon-text-block sppb-text-left "><h3 class="sppb-addon-title">Folosit cu succes în:</h3><div class="sppb-addon-content"><div id="sppb-addon-1501561988149" class="clearfix"><strong>Gingivectomie/Gingivoplastie</strong>: reducerea hipertrofiei gingivale, alungire coronară,corectarea zâmbetului gingival<br></br>
            <strong>Evicţiune gingivală</strong>: retracţie gingivală pentru amprentare<br></br>
            <strong>Chiuretaj postextractional</strong>: chiuretajul ţesutului de granulaţie după extracția dentară<br></br>
            <strong>Excizie formaţiuni tumorale benigne</strong>: îndepărtarea fibroamelor,papiloamelor orale, excizia şi incizia pentru biopsie, incizie şi excizie gingivală<br></br>
            <strong>Frenectomie/ Frenotomie</strong>: indicată in următoarele situații :fren scurt, anchiloglosie, retracţii gingivale, diastemă( în scop ortodontic /protetic)<br></br>
            <strong>Descoperirea implantului</strong><br></br>
            <strong>Tratamente parodontale:</strong> dezinfecţie, debridare sulculara (îndepărtarea ţesutului moale infectat, inflamat şi necrozat din pungile parodontale pentru îmbunătăţirea indicelui gingival, al indicelui gingival de sângerare,reducerea adâncimii pungilor parodontale, reducerea mobilității dinților)</div>
            <div id="sppb-addon-1501561988133" class="clearfix">
            <div class="sppb-addon sppb-addon-text-block sppb-text-left ">
            <div class="sppb-addon-content"><strong>Tratament endodontic</strong>: dezinfecţia sistemului endodontic<br></br>
            <strong>Hemostază</strong><br></br>
            <strong>Tratamentul herpesului, aftelor bucale</strong> cu diminuarea durerii resimțite de pacient<br></br>
            <strong>Expunerea dinţilor neerupti<br></br>
            Terapia durerii/Biostimulare -&nbsp;</strong>sistem muscular, sistem osos<br></br>
            <strong>Albire dentară profesională<br></br>
            <br></br>
            Indicații biostimulare:<br></br>
            <br></br>
            <br></br>
            </strong>- după orice intervenție chirurgicală (grăbește vindecarea , scade inflamația)<br></br>
            - după activarea aparatului ortodontic<br></br>
            - in cazul trismusului (imposibilitatea deschiderii gurii)<br></br>
            - patologia articulației temporo-mandibulare ( artrite, artroze)<br></br>
            <br></br>
            <strong>Albirea dentară cu laserul Epic X:<br></br>
            </strong>&nbsp;<br></br>
            Procedura albirii cu laserul Epic X este extrem de simplă, rapidă, sigură și confortabilă: - se aplică un gel de albire pe bază de peroxid de hidrogen activat de laser<br></br>
            - albirea dentară cu laser este cea mai puțin invazivă metodă de albire a dinților&nbsp; <br></br>
            - numără o multitudine de beneficii comparativ cu albirea clasică<br></br>
            - smalțul este penetrat rapid de substanța de albire, iar contactul dintre acesta și gelul de albire este de scurtă durată asigurând protecția dinților pe parcursul procedurii<br></br>
            - tratamentul de albire se realizează într-o singură ședință (maxim 20 de minute)<br></br>
            - rezultatele albirii cu laser durează mult mai mult decât în cazul abordării clasice cu gutiere sau prin fotopolimerizare<br></br>
            - absența sensibilității dentare post-procedură<br></br>
            <br></br>
            </div>
            </div>
            </div>
            <div id="sppb-addon-1501561988123" class="clearfix">&nbsp;</div></div></div></div></div><div id="sppb-addon-wrapper-1501561988144" class="sppb-addon-wrapper"><div id="sppb-addon-1501561988144" class="clearfix "><div class="sppb-addon sppb-addon-text-block sppb-text-left "><h3 class="sppb-addon-title">Beneficii</h3><div class="sppb-addon-content"><ul>
            <li>Procedura tratamentului cu laser este non-invazivă, fără durere</li>
            </ul>
            eliminându-se astfel anestezicul și firele de sutură<br></br>

            <ul>
            <li>Sângerările sunt mult mai reduse comparativ cu tratamentele clasice</li>
            </ul>
            <ul>
            <li>Laserul sterilizează țesutul asupra căruia s-a intervenit şi scade riscul apariției infecțiilor</li>
            </ul>
            <br></br>
            <span >Avantajele utilizării laserului versus chirurgia clasică:<br></br>
            <br></br>
            <span >- fără sângerare (efect hemstatic)</span><br></br>
            <span >- nu necesită sutură</span><br></br>
            <span >- scade timpul de lucru</span><br></br>
            </span>-<span >&nbsp;</span><span >efect bactericid, scăzând riscul suprainfectării plăgii si edemul potoperator</span><br></br>
            <span >-&nbsp; fără antibioterapie</span><br></br>
            <span >-&nbsp;recuperare rapidă: efectul biostimulator accelerează vindecarea</span><br></br>
            <span >- durere postoperatorie mult diminuată sau absentă</span></div></div></div></div></div>
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