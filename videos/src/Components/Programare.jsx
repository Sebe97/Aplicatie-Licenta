import React, { Component } from 'react';

import './Programare.css';
import './Despre.css';

import axios from 'axios';
import { format, excludeTimes, setHours, setMinutes } from 'date-fns'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class Programare extends Component {
    
            constructor(props){
                super(props);
                this.onChangeNume    = this.onChangeNume.bind(this);          
                this.onChangeTelefon = this.onChangeTelefon.bind(this);   
                this.onChangeData    = this.onChangeData.bind(this);          
                this.onChangeOra     = this.onChangeOra.bind(this);          
                
                this.onsubmit = this.onsubmit.bind(this);        
                this.state={
                    nume          : "",
                    telefon       : "",
                    data          : new Date(),
                    ora           : "",
                    oreDisponibile: [],
                }
    
            }
    
            componentDidMount() {
                // const { oreOcupate=[]} = this.state.oreOcupate;
                // axios.get('http://localhost:5000/programari/')
                // .then(response => {
                //     if(response.data.length > 0){
                        
                //         response.data.forEach(el => {
                //             console.log(el);
                            
                //             // oreOcupate.push(el.ora)
                //             // this.setState({oreOcupate})
                //        })
                //     }
                // })
                // .catch((error) => {
                // console.log(error);
                // })
             
              }

            // Functii onChange 
            onChangeNume(e){
                this.setState({
                    nume: e.target.value
                })
            }
    
            onChangeTelefon(e){
                this.setState({
                    telefon: e.target.value
                })
            }

            onChangeData(e){
            // deoarece in baza de date se salveaza intr-un format diferit data, am sa formatez toate datele in felul urmator:
            // SOL1
            // 1. La datepicker ii dau format zi/luna-/an ( cu toate ca acesta este doar vizual, nu formateaza VALOAREA campului)
            // 2. Atunci cand salvez in baza de date Formatez zi/luna/an 
            // 3. Atunci cand iau valosarea campului de data curent selectat ( pentru a aduce orele din acea data)  Formatez zi/luna/an 
            //  obs: pasii 2 si 3 se pot face in aceeasi functie
            // NU MERGE SA SCHIMB FORMATUL LA DATEPICKER, deci cadevarianta asta
            
            // SOL2
            // Am sa schimb toate formatele asemanatoare cu cele ale datepickerurlui

            // SOL3
            // Nu mai folosesc datepicker

            // SOL4
            // Nu mai folosesc "==" cand compar datele ci verific daca este SUBSTRING

            
            const{
                    oreDisponibile = [],
                } = this.state
                
                this.setState({
                    data: e
                })
                
                let oreDejaOcupate = [];
                let dataFormatata = format(new Date(e),"dd-MM-yyyy")
                let bodyReq = {"data":dataFormatata}
                
                axios.post('http://localhost:5000/programari/data',bodyReq) // aducem inregistrarile din data aleasa
                .then(response => {
                    // console.log("ASta imi aduce din baza de date: ",response.data);
                    
                    if(response.data.length > 0){ // daca exista inregistrari in baza de date
                        response.data.forEach((el)=>{  // gasim (datele == data selectata) si punem in vectorul   oreDejaOcupate   toate orele acestor date
                                const oraCurenta = el.ora; // ora inregistrarii curente
                                oreDejaOcupate.push(oraCurenta);
                                
                            })
                        }
                        
                        let toateOrele = ['08','09','10','11','12','13','14','15','16','17'];
                        let oreDisponibileAux = toateOrele.filter(function(obj) { return oreDejaOcupate.indexOf(obj) == -1; });
                        console.log('oreDisponibileAux' ,oreDisponibileAux);
                        
                        this.setState({
                            oreDisponibile: oreDisponibileAux,
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    })

             

            }

            onChangeOra(e){
                this.setState({
                    ora:e.target.value
                })
            }
            // END Functii onChange 


            onsubmit(e){ // functia pentru submit formular
                e.preventDefault();
              
                const programare = { 
                    nume    :this.state.nume,
                    telefon :this.state.telefon,
                    data    :format(new Date(this.state.data),"dd-MM-yyyy"),
                    ora     :this.state.ora,
                }

               // posteaza catre server
                axios.post(' http://localhost:5000/programari/add', programare) 
                .then(res => console.log(res.data))
              //  END posteaza catre server

                this.setState({
                    nume    :"",
                    telefon :"",
                    data    :"",
                    ora     :"",
                })
            }// END functia pentru submit formular
           
        render() {

        const {
            oreDisponibile=[],   // aici am orele din baza de date ( orele pentru care deja s-a facut programare )
        } = this.state;
        
        console.log("oreDisponibile");
        console.log(oreDisponibile);
        
        return (
            <div class="form">
            <div class="note">
                <p>Programeaza-te.</p>
            </div>

            <form onSubmit={this.onsubmit} class="form-content">
                <div class="row">

                    <div class="col-md-12">
                        <div class="form-group col-md-6">
                            <input type="text" onChange={this.onChangeNume} value={this.state.nume} class="form-control" placeholder="Numele Tau *" />
                        </div>
                        <div class="form-group col-md-6">
                            <input type="text"  onChange={this.onChangeTelefon} value={this.state.telefon}class="form-control" placeholder="Telefon *"/>
                        </div>
                        <div class="form-grou col-md-12 d-flex">
                            <DatePicker
                             className="form-control col-md-6"
                             selected = {this.state.data}
                             onChange ={this.onChangeData}
                             todayButton="Vandaag"
                            dateFormat="dd/MM/yyyy"
                            />
                        <div>
                            <div className="form-group d-flex"> 
                                <label>Ora: </label>
                                <select ref="programareInput"
                                    required
                                    className="form-control"
                                    value={this.state.ora}
                                    onChange={this.onChangeOra}>
                                    {
                                        oreDisponibile.map(function(ora) {
                                        return <option 
                                            key={ora}
                                            value={ora}>{ora}
                                            </option>;
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <input type="submit" class="btnSubmit"/>
            </form>
        </div>
        )
    }
}