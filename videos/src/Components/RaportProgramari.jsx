import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import NavbarUser from "./NavbarUser";
import Navbar from "./Navbar";
import axios from 'axios';
import "./RaportProgramari.css"
import { format, excludeTimes, setHours, setMinutes } from 'date-fns';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import {Button, Modal} from 'react-bootstrap';
import "./style.css";


export default class RaportProgramari extends Component {
    
        constructor(props){
            super(props);

            this.programariIncepandDeAstazi = this.programariIncepandDeAstazi.bind(this);        
            this.programariAll              = this.programariAll.bind(this)             ;        
            this.programariAstazi           = this.programariAstazi.bind(this)          ;        
            this.onChangeData               = this.onChangeData.bind(this)              ;        
            this.programariSpecificDay      = this.programariSpecificDay.bind(this)     ;        
            this.programariSpecificUser     = this.programariSpecificUser.bind(this)    ;        
            this.stergeInregistrare         = this.stergeInregistrare.bind(this)        ;        
            this.onChangePicklist           = this.onChangePicklist.bind(this)          ;        
            this.afiseazaModal              = this.afiseazaModal.bind(this)             ;        
            this.closeModal                 = this.closeModal.bind(this)                ;        
            
            this.state={
                programariData  : []        ,
                token           : ""        ,
                admin           : "false"   ,
                random          : 0         ,
                allUsers        : []        ,
                picklist        : []        , 
                showModal       : false     ,  
                firstName       : ""        ,  
                lastName        : ""        ,  
                user            : ""        ,  
                parola          : ""        ,  
            }

        }


        componentDidMount() {
            // aducem programarile
            axios.get('http://localhost:5000/programari/getSorted') 
            .then(res => {
                this.setState({programariData: res.data})
            })
            // END aducem programarile
            let allUserNames = [];
            // aducem userii
            axios.get('http://localhost:5000/account/') 
            .then(res => {
                allUserNames = res.data.map(element => {
                    // cream obiectul pentru picklist ( nume + prenume )                     
                    return {"value":element._id, label:element.firstName+" "+element.lastName};
                    
                });
                
                this.setState({allUsers: allUserNames})
            })
            // end aducem userii
        
            const token = localStorage.getItem("userSession");
            const admin = localStorage.getItem("Admin");
            this.setState({
                token ,
                admin ,
            })
            if(admin=="false"){
                window.location.replace("http://localhost:3000/RaportProgramariUser");

            }
            
        }


        onChangePicklist(e)     {this.setState({picklist: e})}
       
       
        afiseazaModal(e){
            console.log(e.target.id)
            const {
                showModal = false,
            } = this.state

            axios.post('http://localhost:5000/account/getUserByToken',{token:e.target.id}) 
            .then(res => {
                console.log("res.data");
                console.log(res.data);
                
                // this.setState({programariData: res.data})
                this.setState({
                    firstName       : res.data[0].firstName,  
                    lastName        : res.data[0].lastName ,  
                    user            : res.data[0].email    ,  
                    parola          : res.data[0].password ,  
                    showModal       : true                  ,
                })
            })



        }


        closeModal(e){
            const {
                showModal = false
            } = this.state
            
            this.setState({showModal:false})
        }
        
        onChangeData(e){

            const{
                    oreDisponibile = [],
                    token,
                } = this.state
                
                this.setState({
                    data: e
                })

        }
        


        programariIncepandDeAstazi(){
            const {
                programariData = [],
            } = this.state;
            
            axios.get('http://localhost:5000/programari/getSortedStartingToday') 
            .then(res => {
                this.setState({programariData: res.data})
            })

        }

        
        programariAll(){
            const {
                programariData = [],
            } = this.state;
            
            axios.get('http://localhost:5000/programari/getSorted') 
            .then(res => {
                
                this.setState({programariData: res.data})
            })
            
        }
        

        programariAstazi(){
            const {
                programariData = [],
            } = this.state;
            
            axios.get('http://localhost:5000/programari/getToday') 
            .then(res => {
                
                this.setState({programariData: res.data})
            })

        }


        programariSpecificDay(){
            const {
                programariData = [],

            } = this.state;
            
            axios.post('http://localhost:5000/programari/getSpecificDay',{astazi:this.state.data}) 
            .then(res => {
                
                this.setState({programariData: res.data})
            })

        }


        programariSpecificUser(){
            const {
                programariData  = [],
                picklist        = {},
            } = this.state;
            
            axios.post('http://localhost:5000/programari/getBySpecificUser',{idUser:picklist.value}) 
            .then(res => {
                this.setState({programariData: res.data})
            })

        }


        stergeInregistrare(e){
            const {
                programariData = [],
            } = this.state;

            let idDeSters = {id: e.target.value};
            axios.post('http://localhost:5000/programari/deleteOne', idDeSters) 
            .then(res => {
                axios.get('http://localhost:5000/programari/getSorted') 
                .then(res => {
                    this.setState({programariData: res.data})
                })
            })
        
        }

        render() {
            
            const renderProgramare = (programare, index) => {
             
                return (

                    
                    <tr key = {index}>
                        <td>{programare.data}</td>
                        <td>{programare.ora} </td>
                        <td>{programare.afectiune} </td>
                        <td ><a href = "#"id={programare.user} onClick = {this.afiseazaModal}>{programare.userName} </a></td>
                        {/* <td onClick = {this.openModal}>{programare.userName} </td> */}
                        <td>{programare.telefon}</td>
                        <td>{programare.user}</td>
                        <td>
                            <a >
                                <button className="button" value = {programare._id}onClick={this.stergeInregistrare}>Delete</button>
                            </a>
                            
                        </td>
                    </tr>
                )
            }

            const {
                token           = "",
                admin           = "false",
                programariData  = [],
                allUsers        = [],
                showModal       = false,
                firstName       = "",  
                lastName        = "",  
                user            = "",  
                parola          = "",  
            } = this.state;

            const options = [
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' }
              ]
       
            
            return (
                <div>
                    <div>
                        {/* Acests este un pop-up care afiseaza detaliile unui user */}
                        <Modal show={showModal}> 
                            <Modal.Header>User</Modal.Header>
                            <Modal.Body>

                            <div class="page-content">
                                <div class="form-v4-content">
                                    <form class="form-detail" action="#" method="post" id="myform">
                                        <h2>Detalii User</h2>
                                        <div class="form-group">
                                            <div class="form-row form-row-1">
                                                <label for="first_name">First Name</label>
                                                <input value = {firstName} type="text" name="first_name" id="first_name" class="input-text"></input>
                                            </div>
                                            <div class="form-row form-row-1">
                                                <label for="last_name">Last Name</label>
                                                <input value = {lastName} type="text" name="last_name" id="last_name" class="input-text"></input>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <label for="your_email">UserName</label>
                                            <input value = {user} type="text" name="your_email" id="your_email" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"></input>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-row form-row-2 ">
                                                <label for="password">Password</label>
                                                <input value = {parola} type="text" name="password" id="password" class="input-text" required></input>
                                            </div>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                            </Modal.Body>
                            <Modal.Footer><Button onClick ={this.closeModal}>Close</Button></Modal.Footer>
                        </Modal>
                        {/* END Acests este un pop-up care afiseaza detaliile unui user */}

                    </div>
                
                    { admin == "true" && <Navbar/>}
                    { admin == "false" && <NavbarUser/>}
                    <div style = {{padding: "10px"}}class="form-grou col-md 12 d-flex">
                
                        <button className=" button form-grou col-md-1 d-flex" onClick = {this.programariAll}>Toate</button>
                        <button className=" button form-grou col-md-1 d-flex" onClick = {this.programariIncepandDeAstazi}>Incepand Astazi</button>
                        <button className=" button form-grou col-md-1 d-flex" onClick = {this.programariAstazi}>Doar Astazi</button>
                        

                    <div className=" inputButtonWrapper col-md-3 d-flex">
                        <div className="datePickerContainer col-md-8 d-flex">
                            <DatePicker 
                                className="datePicker button form-control col-md-12"
                                selected = {this.state.data}
                                onChange ={this.onChangeData}
                                todayButton="Vandaag"
                                dateFormat="MM-dd-yyyy"
                                placeholderText="Introduceti Data"
                                />
                        </div>
                        <button className=" button form-grou col-md-4 d-flex" onClick = {this.programariSpecificDay}>Data Aleasa</button>
                
                    </div>
                   <div className="inputButtonWrapper col-md-3 d-flex">

                        <div  class="form-grou col-md-8 d-flex">
                        <Select 
                        className=" col-md-12"
                        options={allUsers}
                        value = {this.state.picklist}
                        onChange={this.onChangePicklist}
                        />
                        
                        </div>
                        <button className=" button form-grou col-md-4 d-flex" onClick = {this.programariSpecificUser}>User Ales</button>
                      </div>
                    </div>
                    <ReactBootStrap.Table striped bordered hover variant="dark" style={{"overflow-y": "scroll"}}>
                        <thead>
                            <tr>
                            <th>Data</th>
                            <th>Ora</th>
                            <th>Afectiune</th>
                            <th>Nume</th>
                            <th>Telefon</th>
                            <th>User</th>
                            <th>Actiune</th>
                            </tr>
                        </thead>
                        <tbody>
                           {programariData.map(renderProgramare)}
                        </tbody>
                        </ReactBootStrap.Table>
                </div>
            )
        }
}









