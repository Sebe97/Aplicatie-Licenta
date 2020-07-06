
import React, { Component } from 'react';

import './Signup.css';
import Acasa from "./Acasa";

import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

export default class Login extends Component {
    
    
    constructor(props){
        super(props);

        this.onChangeUser      = this.onChangeUser.bind(this);          
        this.onChangeParola    = this.onChangeParola.bind(this);          
        this.onsubmit          = this.onsubmit.bind(this);        
            
        this.state={
            user          : "",
            parola        : "",
            data          : new Date(),
            ora           : "",
            signUpError   : '',
            logat         : false,
        }

    }

   componentDidMount(){

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

        setInStorage(key , obj) { // functie folosita pentru a seta ceva in local storate pe baza cheii
                console.log('merge');
            if(!key){
               console.log("key is missing");
            }
            try{
                    sessionStorage.setItem(key, JSON.stringify(obj))
            }catch(err){
                console.log(err);
                
            }
         }

    onChangeUser(e){this.setState({user: e.target.value})}
    onChangeParola(e){this.setState({parola: e.target.value})}
        
    onsubmit(e){
        e.preventDefault();

        const {
          
            user          = "",
            parola        = "",
            logat         = false,
        } = this.state;

        
         // credentialele cu care se incearca logarea
        const currentUser = { 
            // user      :this.state.user,
            // parola    :this.state.parola,
          
                user: user,
                parola: parola,
           
        }
        // console.log("User",currentUser);
        // axios.post('http://localhost:5000/account/signin', currentUser)  // verificam daca exista in baza de date acest user
        // .then(response => {
        //     alert("Logarea s-a efectuat cu succes");
        //     })
        //     .catch((error) => {
        //         alert ( "err")
        //         console.log(error);
        //     })



        axios.post('http://localhost:5000/account/signin', currentUser) 
        .then(response => {
            console.log("response");
            console.log(response);
            if(response.data.success == true){

                localStorage.setItem("userSession",response.data.id)
                this.setState({logat : true})
                alert("Parola Corecta");
            }
            else{
                alert("Parola Gresita")
            }
            })
            .catch((error) => {
                console.log(error);
            })

     

    }
    
    
    render() {

        const {
            isLoading,  
            logat,
        } = this.state;
        
        if(isLoading){
            return (<div><p>Loading ...</p></div>)
        }
        
    
            return(
            <div>
                {logat && <Acasa/>}
                {!logat &&
                    <div class="col-md-12">
                        
                        <form onSubmit={this.onsubmit} class="form-content">
                        
                            <div class="form-group col-md-6">
                                <input type="text" onChange={this.onChangeUser} value={this.state.user} class="form-control" placeholder="User *" />
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" onChange={this.onChangeParola} value={this.state.parola} class="form-control" placeholder="Parola *" />
                            </div>
                            <input type="submit" class="btnSubmit"/>

                        </form>
                            <a href = {"/Signup"}>
                            <button class=" btnSubmit " >Cont nou</button >
                            {/* <button class=" btnSubmit contNou" onClick = {(e)=>{  e.preventDefault(); this.setState({contNou:true})}}>Cont nou</button > */}
                            </a>
                    </div>
                    
                }
            </div>
            )

                
    }
}