
import React, { Component } from 'react';

import './Signup.css';
import Acasa from "./Acasa";

import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import ResetareParola from './ResetareParola';

export default class Login extends Component {
    
    
    constructor(props){
        super(props);

        this.onChangeUser      = this.onChangeUser.bind(this);          
        this.onChangeParola    = this.onChangeParola.bind(this);          
        this.onsubmit          = this.onsubmit.bind(this);        
        this.contNou           = this.contNou.bind(this);        
        this.ResetareParola           = this.ResetareParola.bind(this);        
            
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

    const queryString = window.location.search; // aici am luat id-ul userului

       console.log("queryString");
    console.log(queryString);
    

       console.log("a pornit login");
       
    axios.post('http://localhost:5000/account/verify',   {token : queryString.substr(1)})
    .then(res=>{
        console.log("response login")
        console.log(res)
    }) 
    
   }
   ResetareParola(){
    const {
        user          = "",
        parola        = "",
    } = this.state;

    const currentUser = { 
        user: user,
        parola: parola,
    }

    axios.post('http://localhost:5000/account/checkIfUserExistsAndSendMail', currentUser)
    .then((response)=>{
        alert(response.data.message)
    })

    //    window.location.replace("http://localhost:3000/ResetareParola");
    }

   contNou(){
    window.location.replace("http://localhost:3000/Signup");

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
                user: user,
                parola: parola,
        }
       
        axios.post('http://localhost:5000/account/signin', currentUser) 
        .then(response => {
            if(response.data.success == true){
                
                localStorage.setItem("userSession",response.data.id)
                localStorage.setItem("Admin",response.data.admin)
                this.setState({logat : true})
                alert("Parola Corecta");
                window.location.replace("http://localhost:3000/");

            }
            else{
                alert(response.data.message)
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
                        


                        <div class="page-content">
                                <div class="form-v4-content">
                                    <form class="form-detail" onSubmit={this.onsubmit} method="post" id="myform">
                                    <h2>LogIn</h2>

                                        <div class="form-row">
                                            <label for="your_email">UserName</label>
                                            <input onChange={this.onChangeUser} value={this.state.user}  placeholder="User *" type="text" name="your_email" id="your_email" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"></input>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-row form-row-2 ">
                                                <label for="password">Password</label>
                                                <input onChange={this.onChangeParola} value={this.state.parola} placeholder="Parola *" type="password" name="password" id="password" class="input-text" required></input>
                                             <input type="submit" class="button"/>
                                           <input type= "button" onClick={this.contNou} value = "Cont Nou" class="button " />
                                           <input type= "button" onClick={ this.ResetareParola } value = "Reseteaza Parola Pentru Adresa Introdusa" class="button " />
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