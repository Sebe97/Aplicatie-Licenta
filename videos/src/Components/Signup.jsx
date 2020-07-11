import React, { Component } from 'react';
import { Route, withRouter} from 'react-router-dom';

import './Signup.css';
import Login from "./Login";

import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

 class Signup extends Component {
    
    
    constructor(props){
        super(props);

        this.onChangeNume           = this.onChangeNume.bind(this)     ;          
        this.onChangePrenume        = this.onChangePrenume.bind(this)  ;          
        this.onChangeUser           = this.onChangeUser.bind(this)     ;          
        this.onChangeParola         = this.onChangeParola.bind(this)   ;          
        this.onChangeConfirmParola  = this.onChangeConfirmParola.bind(this)   ;          
        this.onsubmit               = this.onsubmit.bind(this)         ;        
            
        this.state={
           
            data          : new Date(),
            ora           : "",
            signUpError   : '',
            nume          : '',
            prenume       : '',
            user          : '',
            parola        : '',
            confirmParola : '',
            logat         : false,
            
        }
    }
    
     


    onChangeNume(e)             {this.setState({nume: e.target.value})}
    onChangePrenume(e)          {this.setState({prenume: e.target.value})}
    onChangeUser(e)             {this.setState({user: e.target.value})}
    onChangeParola(e)           {this.setState({parola: e.target.value})}
    onChangeConfirmParola(e)    {this.setState({confirmParola: e.target.value})}
        
    back(e){
        e.preventDefault();
        window.location.replace("http://localhost:3000/Login");

        
    }
        
    onsubmit(e){
        e.preventDefault();

        const {
            nume,
            prenume,
            user,
            parola,
            confirmParola,

        } = this.state;

        if(parola && confirmParola && parola == confirmParola)
        {       
            const newUser = { 
                nume      :nume,
                prenume   :prenume,
                user      :user,
                parola    :parola,

            }
            axios.post('http://localhost:5000/account/signup', newUser) 
            .then(response => {
                console.log("response");
                console.log(response);
                
                // console.log(response.data.success); success == true => userul nu exista
                // console.log(response.data.success); success == false => userul deja exista
                if (response.data.success==true) {
                    alert("Un link a fost trimis la adresa de email: "+user);
                    this.setState({logat :true})
                }
                else{
                    alert("Un user cu aceasta adresa de eamil deja exista");
                }
            })
            .catch((error) => {
                console.log(error);
            })
        }
        else{
            alert("Parolele nu se potrivesc")
        }
    }

        componentDidMount(){
                    
            console.log("pagina de signup/ cont nou");

        }
    
    render() {

        const {
            isLoading,  
            logat =false,
        } = this.state;
        
        if(isLoading){
            return (<div><p>Loading ...</p></div>)
        }
        
    
            return(
            <div>
                { logat && <Login/>}
                { !logat &&
                    <div class="col-md-12">
                        

                        <div class="page-content">
                                <div class="form-v4-content">
                                    <form  onSubmit={this.onsubmit} class="form-detail" action="#" method="post" id="myform">
                                        <h2>User Nou</h2>
                                        <div class="form-group">
                                            <div class="form-row form-row-1">
                                                <label for="first_name">First Name</label>
                                                <input onChange={this.onChangeNume} value={this.state.nume} type="text" name="first_name" id="first_name" class="input-text"></input>
                                            </div>
                                            <div class="form-row form-row-1">
                                                <label for="last_name">Last Name</label>
                                                <input onChange={this.onChangePrenume} value={this.state.prenume} type="text" name="last_name" id="last_name" class="input-text"></input>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <label for="your_email">Email</label>
                                            <input onChange={this.onChangeUser} value={this.state.user} type="text" name="your_email" id="your_email" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"></input>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-row form-row-2 ">
                                                <label for="password">Password</label>
                                                <input onChange={this.onChangeParola} value={this.state.parola} type="password" name="password" id="password" class="input-text" required></input>
                                            </div>
                                            
                                        </div>
                                        <div class="form-group">
                                            <div class="form-row form-row-2 ">
                                                <label for="password">Confirm Password</label>
                                                <input onChange={this.onChangeConfirmParola} value={this.state.confirmParola} type="password" name="password" id="ConfirmPassword" class="input-text" required></input>
                                            </div>
                                            
                                        </div>
                                    <input type="submit" class="button"/>
                                    <input onClick={this.back} type="button" class="button" value= "Back"/>

                                    </form>
                                </div>
                            </div>


{/* 
                        <form onSubmit={this.onsubmit} class="form-content">
                            <div class="form-group col-md-6">
                                <input type="text" onChange={this.onChangeNume} value={this.state.nume} class="form-control" placeholder="Nume *" />
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" onChange={this.onChangePrenume} value={this.state.prenume} class="form-control" placeholder="Prenume *" />
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" onChange={this.onChangeUser} value={this.state.user} class="form-control" placeholder="User *" />
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" onChange={this.onChangeParola} value={this.state.parola} class="form-control" placeholder="Parola *" />
                            </div>
                            <input type="submit" class="button"/>

                        </form> */}
                    </div>
                }
            </div>
            )

                
    }
}

export default withRouter(Signup);