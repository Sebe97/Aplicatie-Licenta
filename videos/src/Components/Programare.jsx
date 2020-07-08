import React, { Component } from 'react';

import './Programare.css';
import './Despre.css';
import Login from "./Login";
import Navbar from "./Navbar";
import axios from 'axios';
import { format, excludeTimes, setHours, setMinutes } from 'date-fns'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class Programare extends Component {
    
            constructor(props){
                super(props);
                this.onChangeAfectiune    = this.onChangeAfectiune.bind(this);          
                this.onChangeTelefon = this.onChangeTelefon.bind(this);   
                this.onChangeData    = this.onChangeData.bind(this);          
                this.onChangeOra     = this.onChangeOra.bind(this);          
                
                this.onsubmit = this.onsubmit.bind(this);        
                this.state={
                    afectiune     : "",
                    telefon       : "",
                    data          : new Date(),
                    ora           : "08",
                    oreDisponibile: [],
                    token         : "",
                    user          : "",
                    userName      : "",
                }
    
            }
    
            componentDidMount() {

                const token = localStorage.getItem("userSession");
                this.setState({
                    token ,
                })
                
                axios.post('  http://localhost:5000/account/getUserByToken',{token}) // aducem inregistrarile din data aleasa
              .then(res =>{
                  console.log("res al get all users", res.data[0].firstName+" "+res.data[0].lastName);
                  this.setState({userName :res.data[0].firstName+" "+res.data[0].lastName})
                  
              })

              let oreDejaOcupate = [];
                let dataFormatata = format(new Date(),"MM-dd-yyyy")
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
                            ora:oreDisponibileAux[0],
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    })

              }

            // Functii onChange 
            onChangeAfectiune(e){
                this.setState({
                    afectiune: e.target.value
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
                    token,
                } = this.state
                
                this.setState({
                    data: e
                })
                
                let oreDejaOcupate = [];
                let dataFormatata = format(new Date(e),"MM-dd-yyyy")
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
                const{
                    token,
                    userName,
                } = this.state
                
                console.log('userName==', userName);
             
                const programare = { 
                    afectiune    :this.state.afectiune,
                    telefon      :this.state.telefon,
                    data         :format(new Date(this.state.data),"MM-dd-yyyy"),
                    ora          :this.state.ora,
                    userId       :token,
                    userName     :userName,
                }    

               // posteaza catre server
                axios.post(' http://localhost:5000/programari/add', programare) 
                .then(res =>{

                 console.log(res.data)
                })
              //  END posteaza catre server

                this.setState({
                    afectiune    :"",
                    telefon      :"",
                    user         :"",
                    userName     :"",
                })
                
            }// END functia pentru submit formular
           
        render() {

        const {
            token           ="",
            ore             = '08',
            oreDisponibile  =[],   // aici am orele din baza de date ( orele pentru care deja s-a facut programare )

        } = this.state;
        
        console.log("oreDisponibile");
        console.log(oreDisponibile);
        
        return (
            <div>
                { !token && <Login/>}
                { token&&
                     <div>
                         <Navbar/>
                            <div class="form">
                                <div class="note" style={{"background":  "#737373"}}>
                                    <p>Programeaza-te.</p>
                                </div>

                                <form onSubmit={this.onsubmit} class="form-content">
                                    <div class="row">

                                        <div className="col-md-12">

                                            <div className="col-md-6 d-flex">
                                                <label  className="col-md-2 d-flex">Afectiunea: </label>
                                                <div className="form-group col-md-4">
                                                    <input type="text" required onChange={this.onChangeAfectiune} value={this.state.afectiune} class="form-control" placeholder="Afectiunea*" />
                                                </div>
                                            </div>

                                            <div className="col-md-6 d-flex">
                                                <label  className="col-md-2 d-flex">Telefon: </label>
                                                <div className="form-group col-md-4">
                                                    <input required className="col-md-1 d-flex"  type="text"  onChange={this.onChangeTelefon} value={this.state.telefon}class="form-control" placeholder="Telefon *"/>
                                                </div>
                                            </div>

                                            <div class="form-grou col-md-6 d-flex ">
                                                <label className="col-md-2  d-flex">Alegeti Data: </label>
                                                <div className="form-group col-md-4 d-flex">
                                                    <DatePicker
                                                        className="form-control col-md-12"
                                                        selected = {this.state.data}
                                                        onChange ={this.onChangeData}
                                                        todayButton="Vandaag"
                                                        dateFormat="MM-dd-yyyy"
                                                    />
                                                </div>
                                               

                                            </div>

                                            <div className="form-group  col-md-6 d-flex"> 
                                                <label  className="col-md-2 d-flex">Ora: </label>
                                               
                                                <div className="form-group col-md-4 d-flex">
                                                    <select ref="programareInput"
                                                        required
                                                        className="form-control col-md-12"
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
                                <input type="submit" className="button"/>
                                </form>
                            </div>
                        </div>
                }
            </div>
        )
    }
}