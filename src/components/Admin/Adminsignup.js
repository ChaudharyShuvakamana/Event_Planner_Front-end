import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import {
  Container, Col, Form, FormGroup, Label, Input, Button, FormText
} from 'reactstrap'


class Adminsignup extends React.Component{
  constructor(){
    super();
    this.state = {
      'firstname' : '',
      'lastname' : '',
      'phonenumber' : '',
      'dob' : '',
      'gender' : '',
      'email' : '',
      'password' : '',
      redirect : false,
    }
  }

  sendUser = (e) =>{
    e.preventDefault();
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phonenumber: this.state.phonenumber,
      location:this.state.location,
      email: this.state.email,
      password: this.state.password
    }
    axios.post('http://localhost:3000/api/admin/register',data).then(() => {

    this.setState({
      redirect : true
    })
    })



  }

  handleRedirect(){
   if(this.state.redirect){
     return <Redirect to='/login'/>
   }
 }

       render(){

        return(
            <div>
              {this.handleRedirect()}
<div className="login-box">
  <div className="login-logo">
    <a href="/"><b>Event </b> Planner</a>
  </div>
  <div class="container-login100">
    <p className="login-box-msg">Admin Registration</p>

          <form onSubmit = {this.sendUser} class="login100-form validate-form flex-sb flex-w">     
          <div className="form-group has-feedback">
                    <Col>
                        <FormGroup>
                            <Label for='firstname'>First Name</Label>
                            <input className="form-control" type="text" alue={this.state.firstname} onChange={(event)=>
                        this.setState({firstname: event.target.value})} placeholder="First name *" required/>
                          <span class="glyphicon glyphicon-user form-control-feedback"></span>
                        </FormGroup>
                    </Col>

                    </div>      
                        <div className="form-group has-feedback">
                       <Col>
                        <FormGroup>
                            <Label for='lastname'>Last Name</Label>
                            <input className="form-control" type="text" value={this.state.lastname} onChange={(event)=>
                        this.setState({lastname: event.target.value})} placeholder="Last name *" required/>
                          <span class="glyphicon glyphicon-user form-control-feedback"></span>
                        </FormGroup>
                    </Col>
                        </div>

                        <div className="form-group has-feedback">
                        <Col>
                        <FormGroup>
                            <Label for='phonenumber'>phonenumber</Label>
                            <input className="form-control" type="text" value={this.state.phonenumber} onChange={(event)=>
                        this.setState({phonenumber: event.target.value})} placeholder="Phone phonenumber *" required/>
                          <span class="glyphicon glyphicon-phone form-control-feedback"></span>
                        </FormGroup>
                    </Col>
                        </div>
                        <div className="form-group has-feedback">
                       <Col>
                        <FormGroup>
                            <Label for='location'>location</Label>
                            <input className="form-control" type="text" value={this.state.location} onChange={(event)=>
                        this.setState({location: event.target.value})} placeholder="location *" required/>
                          <span class="glyphicon glyphicon-user form-control-feedback"></span>
                        </FormGroup>
                    </Col>
                        </div>

                       
                <div className="form-group has-feedback">
                        <Col>
                        <FormGroup>
                            <Label for='date'>Email</Label>
                            <input className="form-control" type="email" value={this.state.email} onChange={(event)=>
                        this.setState({email: event.target.value})} placeholder="Email *" required/>
						<span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </FormGroup>
                    </Col>
               </div>
               <div className="form-group has-feedback">
                        <Col>
                        <FormGroup>
                            <Label for='password'>password</Label>
                            <input className="form-control" type="password" value={this.state.password} onChange={(event)=>
                        this.setState({password: event.target.value})} placeholder="Set A Password *" required/>
						<span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </FormGroup>
                    </Col>
               </div>
               <div class="row">
        <div class="col-xs-8">
          <a href="login">Already have an Account ?</a>
        </div>

        <div class="col-xs-4">
        <button type="submit" className="btn btn-primary btn-block btn-flat" >Sign up</button>
                    
                
        </div>
        {/* <div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Register
						</button>
					</div>
        */}
      </div>
				
			
                    </form>
					</div>
          

 
 
  </div>			
</div>
       

        )
       }
    }
       export default Adminsignup
