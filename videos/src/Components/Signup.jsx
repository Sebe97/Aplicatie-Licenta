import React, { Component } from 'react';
import { Route} from 'react-router-dom';

import './Signup.css';
import Login from "./Login";

import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

export default class Programare extends Component {
    
    
    constructor(props){
        super(props);

        this.onChangeNume    = this.onChangeNume.bind(this);          
        this.onChangePrenume = this.onChangePrenume.bind(this);          
        this.onChangeUser    = this.onChangeUser.bind(this);          
        this.onChangeParola  = this.onChangeParola.bind(this);          
        this.onsubmit        = this.onsubmit.bind(this);        
            
        this.state={
           
            data          : new Date(),
            ora           : "",
            signUpError   : '',
            logat         : false,
        }

    }
     


    onChangeNume(e)     {this.setState({nume: e.target.value})}
    onChangePrenume(e)  {this.setState({prenume: e.target.value})}
    onChangeUser(e)     {this.setState({user: e.target.value})}
    onChangeParola(e)   {this.setState({parola: e.target.value})}
        
    back(e){
        e.preventDefault();
        return(

            <Route exact path="/Login" component={Login}/>
            )
        
    }
        
    onsubmit(e){
        e.preventDefault();

        const {
        } = this.state;
        
        const newUser = { 
            nume      :this.state.nume,
            prenume   :this.state.prenume,
            user      :this.state.user,
            parola    :this.state.parola,
        }
        axios.post('http://localhost:5000/account/signup', newUser) 
        .then(response => {
            // console.log(response.data.success); success == true => userul nu exista
            // console.log(response.data.success); success == false => userul deja exista
            if (response.data.success==true) {
                alert("Userul a fost adaugat");
                this.setState({logat :true})
            }
            else{
                alert("Userul deja exista");
            }
        })
        .catch((error) => {
            console.log(error);
        })
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

                        </form>
                        <a  href = {"/Login"}>
                            <button class=" button " >Back</button >
                            </a>
                    </div>
                }
            </div>
            )

                
    }
}