import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import {
  Container, Col, Form, FormGroup, Label, Input, Button, FormText
} from 'reactstrap'


class Userlogin extends React.Component{
constructor(props){
    super(props);


    this.state = {
        responseData  : [],
        redirect : false,
    }

}

    setRedirect(){
        this.setState({
            redirect : true
        })
    }

    handleRedirect(){
        if(this.state.redirect){
            return <Redirect to='/' />
        }
    }

    handleLogin(e){
        e.preventDefault();
        let email = this.refs.email.value;
        let password = this.refs.password.value;

        let data = {
            email : email,
            password : password,
        }
      
        fetch("http://localhost:3000/api/user/login", {
            method : "post",
            body : JSON.stringify(data),
            headers : {
                "Content-Type" : "application/json"
            },
        }).then(function(data) {
            return data.json();
           
       }).then(json => {
            var dataarray = [json];
           this.setState({
            responseData : dataarray
           })
          
           if(dataarray[0].success){
            sessionStorage.setItem("user_token", dataarray[0].token);
            sessionStorage.setItem("user_name", dataarray[0].name );
            sessionStorage.setItem("user_email", dataarray[0].email );
            this.setRedirect();
           }
         
    
        })
        

    

    }



    render(){
        var getData = this.state.responseData;
        
        getData = getData.map(function(value, index){
            if(value.success == false){
                return(
                    <span key = {index} className = "errormsg" id = "log-errmsg" >
                        
                         <h6 id = "errormsg" >{value.message}</h6>
                          </span>
                )
            }else{
                return(
                    <span key = {index} className = "errormsg err-success"  id = "log-errmsg" >
                        
                         <h6 id = "errormsg" >{value.message}</h6>
                          </span>
                   
          
                )
            }
         
        })
 
        return(
            <div>
                {this.handleRedirect()}
                <div className="login-box">
  <div className="login-logo">
    <a href="/"><b>Event </b> Planner</a>
  </div>
  <div class="container-login100">
    <p className="login-box-msg">User Login</p>
                                
                                   
  {getData}
  <form class ='' className="login100-form validate-form flex-sb flex-w" onSubmit = {this.handleLogin.bind(this)}>
          <div className="form-group has-feedback">
                    <Col>
                        <FormGroup>
                            <Label for='email'>Email</Label>
                            <input className = "form-control" type = "email" id = "email"  ref = "email" placeholder = "Enter Email"/>
                                   
                          <span class="glyphicon glyphicon-user form-control-feedback"></span>
                        </FormGroup>
                    </Col>

                    </div>  
                    <div className="form-group has-feedback">
                    <Col>
                        <FormGroup>
                            <Label for='password'>Password</Label>
                            <input className = "form-control" type = "password"  ref  = "password" id = "password" placeholder = "Enter Password"/>
       
                          <span class="glyphicon glyphicon-user form-control-feedback"></span>
                        </FormGroup>
                    </Col>
                    <div className= "form-group">
                                           <input type = "checkbox"></input> <span>Remember me </span>
                                       </div>
                                       <div class="row">
      
                                       <div class="col-xs-8">
                                       <a href="Signup">Create Account</a>
                                       </div >

                                    <div class="col-xs-4">
                                           <button className = "btn btn-primary btn-block btn-flat">Login</button>
                                       </div>
                                    
                                  </div>
                                     
                                      

                    </div> 
                    </form>
    </div>
    </div>
    </div>

    )
       }
    }
    export default Userlogin
