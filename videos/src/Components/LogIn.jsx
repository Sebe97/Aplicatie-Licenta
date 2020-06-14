import React, { Component } from 'react';

import './Login.css';
import './Despre.css';

import axios from 'axios';
import { format, excludeTimes, setHours, setMinutes } from 'date-fns'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class Programare extends Component {
    
      
            constructor(props){
                super(props);
                // this.onChangeNume    = this.onChangeNume.bind(this);          
                // this.onChangeTelefon = this.onChangeTelefon.bind(this);   
                // this.onChangeData    = this.onChangeData.bind(this);          
                // this.onChangeOra     = this.onChangeOra.bind(this);          
                
                // this.onsubmit = this.onsubmit.bind(this);        
                this.state={
                    nume          : "",
                    telefon       : "",
                    data          : new Date(),
                    ora           : "",
                    oreDisponibile: [],
                    isLoading     : false,
                    signUpError   : '',
                    signInError   : '',
                    masterError   : '',
                    token         : '',
                }
    
            }
        getFromStorage(key) { // functie folosita pentru a cauta ceva in local storate pe baza cheii
            // Folosim aceasta functie cand se incarca pagina pentru a verifica daca userul este deja logat
                console.log('merge');
            if(!key){
                return null;
            }
            try{
                const sessionId = localStorage.getItem(key);
                if(sessionId){
                    return JSON.parse(sessionId)
                }
                return null;
            }catch(err){
                return null;
            }
         }

        setFromStorage(key , obj) { // functie folosita pentru a seta ceva in local storate pe baza cheii
                console.log('merge');
            if(!key){
               console.log("key is missing");
            }
            try{
                    localStorage.setItem(key, JSON.stringify(obj))
            }catch(err){
                console.log(err);
                
            }
         }







min 54











            componentDidMount() { 
                console.log("Pagina s-a incarcat");
                const token = "fg";
                // const token = this.getFromStorage('the_main_app');
                this.setState({
                    token,
                })
                if(token){
                    axios.get('http://localhost:5000/account/verify?token=' + token)
                    .then(response => response.json())
                    .then(json =>{
                        if(json.success){
                            this.setState({
                                token,
                                isLoading: false
                            })
                        } else {
                            this.setState({
                                isLoading: false,
                            })
                        }
                    })
                    .catch((error) => {
                    console.log(error);
                    })
                    
                } else {
                    this.setState({
                        isLoading: false,
                    })
                }
                
              }

            // Functii onChange 
            // onChangeNume(e){
            //     this.setState({
            //         nume: e.target.value
            //     })
            // }
    
            // onChangeTelefon(e){
            //     this.setState({
            //         telefon: e.target.value
            //     })
            // }

         
            // onChangeOra(e){
            //     this.setState({
            //         ora:e.target.value
            //     })
            // }
            // END Functii onChange 


        render() {

        const {
            isLoading,   // aici am orele din baza de date ( orele pentru care deja s-a facut programare )
            token,
        } = this.state;
        
        if(isLoading){
            return (<div><p>Loading ...</p></div>)
        }
            
        if(!token){
            return(
            <div>
                <div class="col-md-12">
                    <div class="form-group col-md-6">
                        <input type="text" onChange={this.getFromStorage} value={this.state.nume} class="form-control" placeholder="Numele Tau *" />
                    </div>

                </div>
            </div>
            )
        }
        return (
            <div>
                <p>Account</p>
            </div>
        )

        return (
           <div>
              
           </div>
        )
    }
}