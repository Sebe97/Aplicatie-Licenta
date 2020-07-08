import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "./Navbar";
import axios from 'axios';
import "./RaportProgramari.css"
import { format, excludeTimes, setHours, setMinutes } from 'date-fns';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

export default class RaportProgramari extends Component {
    
        constructor(props){
            super(props);

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
            axios.get("http://localhost:5000/account/") 
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
        
  
        stergeInregistrare(e){
            let yesOrNo = window.confirm("Doriti sa stergeti acest user?"); // Prompt "yes" sau "no"
            if(yesOrNo){

                const {
                    programariData = [],
                    
                } = this.state;
                
                let idDeSters = {email: e.target.value};
                console.log(idDeSters);
                
                axios.post('http://localhost:5000/account/deleteUser', idDeSters) 
                .then(res => {
                    axios.get('http://localhost:5000/account') 
                    .then(res => {
                        this.setState({programariData: res.data})
                    })
                })
            }
                
        }

        render() {
            
            const renderProgramare = (programare, index) => {
           
                return (
                    <tr key = {index}>
                        <td>{programare.firstName}</td>
                        <td>{programare.lastName} </td>
                        <td>{programare.email} </td>
                        <td>{programare.password} </td>
                   
                        <td>
                            <a >
                                <button className="button" value = {programare.email}onClick={this.stergeInregistrare}>Delete</button>
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
                   
                    <ReactBootStrap.Table striped bordered hover variant="dark" style={{"overflow-y": "scroll"}}>
                        <thead>
                            <tr>
                            <th>Nume</th>
                            <th>Prenume</th>
                            <th>User</th>
                            <th>Parola</th>
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









