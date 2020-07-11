
import React, { Component } from 'react';

import './Signup.css';
import Acasa from "./Acasa";

import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

export default class ResetareParola extends Component {
    
    
    constructor(props){
        super(props);

        this.onChangeUser                = this.onChangeUser.bind(this);          
        this.onChangeParola              = this.onChangeParola.bind(this);          
        this.onChangeConfirmareParola    = this.onChangeConfirmareParola.bind(this);          
        this.onsubmit                    = this.onsubmit.bind(this);        
            
        this.state={
            user                  : "",
            parola                : "",
            confirmareParola      : "",
            data                  : new Date(),
            ora                   : "",
            signUpError           : '',
            logat                 : false,
        }

    }

   componentDidMount(){
    
   }

   back(e){
    e.preventDefault();
    window.location.replace("http://localhost:3000/Login");
    }
    

    onChangeUser(e){this.setState({user: e.target.value})}
    onChangeParola(e){this.setState({parola: e.target.value})}
    onChangeConfirmareParola(e){this.setState({confirmareParola: e.target.value})}
        
    onsubmit(e){
        e.preventDefault();

        const {
          
            parola        = "",
            confirmareParola        = "",
        } = this.state;

        if(parola!=confirmareParola){
            alert("Parolele nu coincid");
        }
        else{
            const queryString = window.location.search.substr(1); // aici am luat id-ul userului
            console.log("queryString"+queryString);
            
            // Actualizez parola inb aza de date
            axios.post('http://localhost:5000/account/resetareParola',   {token : queryString, parola:parola})
            .then(res=>{
                alert(res.data.message)
                window.location.replace("http://localhost:3000/Login");
                
            }) 
        }

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
                        


                        <div class="page-content">
                                <div class="form-v4-content">
                                    <form class="form-detail" onSubmit={this.onsubmit} method="post" id="myform">
                                    <h2>Resetare Parola</h2>

                                        <div class="form-row">
                                            <label for="password">Password</label>
                                            <input onChange={this.onChangeParola} value={this.state.parola} placeholder="Parola *" type="password" name="password" id="password" class="input-text" required></input>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-row form-row-2 ">
                                                <label for="password">Confirmare    Password</label>
                                                <input onChange={this.onChangeConfirmareParola} value={this.state.confirmareParola} placeholder="Confirmare Parola *" type="password" name="password" id="password" class="input-text" required></input>
                                             <input type="submit" class="button"/>
                                            <input onClick={this.back} type="button" class="button" value= "Back"/>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>




                        {/* <form onSubmit={this.onsubmit} class="form-content">
                        
                            <div class="form-group col-md-6">
                                <input type="text" onChange={this.onChangeUser} value={this.state.user} class="form-control" placeholder="User *" />
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" onChange={this.onChangeParola} value={this.state.parola} class="form-control" placeholder="Parola *" />
                            </div>

                        </form> */}
                            {/* <a href = {"/Signup"}> */}
                               {/* <button class=" btnSubmit contNou" onClick = {(e)=>{  e.preventDefault(); this.setState({contNou:true})}}>Cont nou</button > */}
                            {/* </a> */}
                    </div>
                    
                }
            </div>
            )

                
    }
}