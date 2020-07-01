import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import {
  Container, Col, Form, FormGroup, Label, Input, Button, FormText
} from 'reactstrap';
import Nav from '../../Header';
import {Link} from 'react-router-dom';

export default class Vendorsignup extends React.Component{
  
  
      constructor(props){
          super(props);
      
      
          this.state = {
              responseData  : [],
              checkEmailResponse : [],
              redirect : false,
              showemailerr : false,
              showpasserr : false,
              showpasssuccess : false,
              emailavailable : false,
              validation : false,
          }
      
      }
      setRedirect(){
          this.setState({
              redirect : true
          })
      }
  
      handleRedirect(){
          if(this.state.redirect){
              return <Redirect to='/vendor' />
          }
      }
  
      handleSignup(e){
          e.preventDefault();
  
          let fullname = this.refs.fullname.value;
          let location = this.refs.location.value;
          let type = this.refs.business_type.value;
          let email = this.refs.email.value;
          let password = this.refs.password.value;
          let cpassword = this.refs.cpassword.value;
          let contact = this.refs.contact.value;
  
   
  
          if(this.state.emailavailable == true && this.state.showpasssuccess == true){
              let data = {
                  fullname : fullname,
                  location : location,
                  type : type,
                  contact : contact,
                  email : email,
                  password : password, 
              }
      
              
              fetch("http://localhost:3000/api/auth/registervendor", {
                  method : "post",
                  body : JSON.stringify(data),
                  headers : {
                      "Content-Type" : "application/json"
                  },
              }).then(function(data) {
                  return data.json();
                 
      
      
              }).then(json => {
                  
                  var dataarray = [json];
                 
                  sessionStorage.setItem("user_token", dataarray[0].token);
                  sessionStorage.setItem("user_name", dataarray[0].name );
                  sessionStorage.setItem("user_email", dataarray[0].email );
                  sessionStorage.setItem("vendor_type", dataarray[0].type );
                  this.setRedirect();
                 
              })
          }else{
  
          }
         
  
  }
  
   
  
          emailHandler(e){
                  let email = e.target.value;
                  if(email != ""){
                      let data = {
                          email : email,
                      }
  
                      fetch("http://localhost:3000/api/auth/checkvendoremail", {
                          method : "post",
                          body : JSON.stringify(data),
                          headers : {
                              "Content-Type" : "application/json"
                          },
                      }).then(function(data) {
                          return data.json();
                      }).then(json => {
                          let dataarray = [json];
                          this.setState({
                              checkEmailResponse : dataarray,
                              setemailerr : true,
                          
                          })
  
                          if(dataarray[0].success == true){
                              this.setState({
                                 emailavailable : true,
                              })
                          }else{
                              this.setState({
                                  emailavailable : false,
                               })
                          }
                      });
                  }else{
                      this.setState({
                          setemailerr : false,
                      });
                  }
  
                 
                
              }
              passwordChangeHandler() {
                let password = this.refs.password.value;
                let cpassword = this.refs.cpassword.value;
                if (password == "" || cpassword == "") {
                    this.setState({
                        showpasserr: false,
                        showpasssuccess: false,
                    })
                } else {
                    if (password != cpassword) {
                        this.setState({
                            showpasserr: true,
                            showpasssuccess: false,
                        })
                    } else {
                        this.setState({
                            showpasserr: false,
                            showpasssuccess: true
                        })
                    }
                }
        
            }
        
            render() {
                var checkemail = this.state.checkEmailResponse;
        
                checkemail = checkemail.map(function (value, index) {
                    if (value.success == false) {
                        return (
        
                            <span key={index} className={this.state.setemailerr == true ? "errormsg" : "errormsg d-none"} id="log-errmsg" >
        
                                <h6 id="errormsg" > <span className="fas fa-times-circle"></span>&nbsp;{value.message}</h6>
                            </span>
        
        
                        )
                    } else {
                        return (
                            <span key={index} className={this.state.setemailerr == true ? "errormsg err-success" : "errormsg d-none"} id="log-errmsg" >
        
                                <h6 id="errormsg" >  <span className="fas fa-check-circle"></span>&nbsp;{value.message}</h6>
        
                            </span>
        
        
                        )
                    }
                }, this);
        
                var getData = this.state.responseData;
        
                getData = getData.map(function (value, index) {
                    if (value.success == false) {
                        return (
                            <span key={index} className="errormsg" id="log-errmsg" >
        
                                <h6 id="errormsg" >{value.message}</h6>
                            </span>
        
        
                        )
                    } else {
                        return (
                            <span key={index} className="errormsg err-success" id="log-errmsg" >
        
                                <h6 id="errormsg" > {value.message}</h6>
                            </span>
        
        
                        )
                    }
        
                })
                return (
                    <div>
                        {this.handleRedirect()}
                        <Nav />
                        <div className="login-box">
                            <div className="login-logo">
                                <a href="/"><b>Event </b> Planner</a>
                            </div>
                            <div class="container-login100">
                                <p className="login-box-msg">Vendor Regristration</p>
        
                                {getData}
        
                                <form class='' className="login100-form validate-form flex-sb flex-w" onSubmit={this.handleSignup.bind(this)}>
        
                                    <div className="row form-group has-feedback">
                                        <Col>
                                            <FormGroup>
                                                <Label for='fullname'>Full Name</Label>
                                                <input className="form-control" type="text" id="fullname" ref="fullname" placeholder="Full Name" required />
                                                <span class="glyphicon glyphicon-user form-control-feedback"></span>
                                            </FormGroup>
                                        </Col>
                                    </div>
                                    <div className="row form-group has-feedback">
                                        <Col>
                                            <FormGroup>
                                                <Label for='contact'>Phone number</Label>
                                                <input className="form-control" type="contact" id="contact" ref="contact" placeholder="Enter PhoneNumber" required />
        
                                                <span class="glyphicon glyphicon-phone form-control-feedback"></span>
                                            </FormGroup>
                                        </Col>
                                    </div>
                                    <div className="row form-group has-feedback">
                                        <Col>
                                            <FormGroup>
                                                <Label for='location'>Location</Label>
                                                <select className="form-control form-select" name="location" ref="location">
                                                    <option>Kathmandu</option>
                                                    <option>Biratnagar</option>
                                                    <option>Dharan</option>
                                                </select>
                                            </FormGroup>
                                        </Col>
                                    </div>
                                    <div className="row form-group has-feedback">
                                        <Col>
                                            <FormGroup>
                                                <Label for='business_type'>Business Type</Label>
                                                <select className="form-control form-select" name="business_type" ref="business_type">
                                                <option>Venues</option>
                                                <option>Professional</option>
                                                </select>
                                            </FormGroup>
                                        </Col>
                                    </div>
                                    <div className="row form-group has-feedback">
                                        <Col>
                                            <FormGroup>
                                                <Label for='email'>Email</Label>
                                                <input className="form-control" type="email" id="email" onChange={this.emailHandler.bind(this)} ref="email" placeholder="Enter Email" required />
        
                                                <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                                            </FormGroup>
                                        </Col>
                                    </div>
                                    {checkemail}
        
                                    <div className="row form-group has-feedback">
                                        <Col>
                                            <FormGroup>
                                                <Label for='password'>Password</Label>
                                                <input className="form-control" type="password" ref="password" onChange={this.passwordChangeHandler.bind(this)} id="password" placeholder="Enter Password" required />
        
                                                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                                            </FormGroup>
                                        </Col>
                                    </div>
                                    <div className="row form-group has-feedback">
                                        <Col>
                                            <FormGroup>
                                                <Label for='cpassword'>Confirm Password</Label>
                                                <input className="form-control" type="password" ref="cpassword" onChange={this.passwordChangeHandler.bind(this)} id="cpassword" placeholder="Re-Enter Password" required />
        
                                                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                                            </FormGroup>
                                        </Col>
                                    </div>
                                    <div className="row form-group">
                                        <input type="checkbox"></input> <span>I agree to the Tearns and Conditions </span>
                                    </div>
                                               <div class="row form-group">
              
                                               <div class="form-group">
                                               <Link to="/Vendorlogin" >Already Have an Account?</Link>
                                               </div >
        
                                            <div class="form-group">
                                            <button className="btn btn-primary btn-block btn-flat">Sign Up</button>
                                               </div>
                                            
                                          </div>
                                </form>
                            </div>
                        </div>
                    </div>
        
        
        
                )
            }
        
        }
        