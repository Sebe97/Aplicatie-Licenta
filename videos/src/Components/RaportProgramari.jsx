import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './Programare.css';
import './Despre.css';
import Navbar from "./Navbar";
import axios from 'axios';
import { format, excludeTimes, setHours, setMinutes } from 'date-fns';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

export default class RaportProgramari extends Component {
    
        constructor(props){
            super(props);

            this.programariIncepandDeAstazi = this.programariIncepandDeAstazi.bind(this);        
            this.programariAll              = this.programariAll.bind(this);        
            this.programariAstazi           = this.programariAstazi.bind(this);        
            this.onChangeData               = this.onChangeData.bind(this);        
            this.programariSpecificDay      = this.programariSpecificDay.bind(this);        
            this.programariSpecificUser     = this.programariSpecificUser.bind(this);        
            this.stergeInregistrare         = this.stergeInregistrare.bind(this);        
            this.onChangePicklist           = this.onChangePicklist.bind(this);        
            
            this.state={
                programariData  : [],
                token           : "",
                random          : 0 ,
                allUsers        : [],
                picklist        : []   ,     
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
            this.setState({
                token ,
            })

            
        }


        onChangePicklist(e)     {this.setState({picklist: e})}
        
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
                // console.log(res);
                
                this.setState({programariData: res.data})
            })
            
        }
        

        programariAstazi(){
            const {
                programariData = [],
            } = this.state;
            
            axios.get('http://localhost:5000/programari/getToday') 
            .then(res => {
                // console.log(res);
                
                this.setState({programariData: res.data})
            })

        }


        programariSpecificDay(){
            const {
                programariData = [],

            } = this.state;
            
            axios.post('http://localhost:5000/programari/getSpecificDay',{astazi:this.state.data}) 
            .then(res => {
                // console.log(res);
                
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
                console.log(res);
            })
        
        }

        render() {
            const renderProgramare = (programare, index) => {
                return (
                    <tr key = {index}>
                        <td>{programare.data}</td>
                        <td>{programare.ora} </td>
                        <td>{programare.nume}</td>
                        <td>{programare.user}</td>
                        <td>
                            <a href = "RaportProgramari">
                                <button value = {programare._id}onClick={this.stergeInregistrare}>Delete</button>
                            </a>
                            
                        </td>
                    </tr>
                )
            }

            const {
                token           = "",
                programariData  = [],
                allUsers        = [],
            } = this.state;

            const options = [
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' }
              ]
       
            
            return (
                <div>
                    <Navbar/>
                    <div class="form-grou col-md 12 d-flex">

                        <button class="form-grou col-md-1 d-flex" onClick = {this.programariAll}>Afiseaza toate programarile</button>
                        <button class="form-grou col-md-1 d-flex" onClick = {this.programariIncepandDeAstazi}>Afiseaza programarile incepand de astazi</button>
                        <button class="form-grou col-md-1 d-flex" onClick = {this.programariAstazi}>Afiseaza programarile de astazi</button>
                        <div class="col-md-1 d-flex">
                            <DatePicker
                                className="form-control col-md-12"
                                selected = {this.state.data}
                                onChange ={this.onChangeData}
                                todayButton="Vandaag"
                                dateFormat="MM-dd-yyyy"
                                placeholderText="Introduceti Data"
                                />
                        </div>
                    <button class="form-grou col-md-1 d-flex" onClick = {this.programariSpecificDay}>Afiseaza programarile din data aleasa</button>
                    <div style={{background:"green"}} class="form-grou col-md-2 d-flex">
                     <Select 
                      className=" col-md-12"
                      options={allUsers}
                      value = {this.state.picklist}
                      onChange={this.onChangePicklist}
                       />
                    
                    </div>
                    <button class="form-grou col-md-1 d-flex" onClick = {this.programariSpecificUser}>Afiseaza programarile userului ales</button>
                    </div>
                    <ReactBootStrap.Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>Data</th>
                            <th>Ora</th>
                            <th>Nume</th>
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









