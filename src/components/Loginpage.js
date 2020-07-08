import React, { Component }from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';

import {
  Container, Col, Form, FormGroup, Label, Input, button, FormText
} from 'reactstrap'


class Loginpage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: '',
        user_type:'',
        isLoggedIn: false
    }
}
handleChange = (e) => {
    this.setState(
        { [e.target.name]: e.target.value }
    )
}
submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login', this.state)
        .then((response) => {
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user_type', response.data.user.user_type)
            // alert(response.data.user.user_type)
            this.setState({ isLoggedIn: true })

            

        }).catch((err) => console.log(err.response))
    this.setState({ email: '', password: '' })
}
render() {
// alert(localStorage.getItem('user_type'))
    if (this.state.isLoggedIn === true && localStorage.getItem('user_type')=="user") {
        return <Redirect to='/Editprofile' />
    }  if (this.state.isLoggedIn === true && localStorage.getItem('user_type')=="vendor" ) {
        return <Redirect to='/venue' />
    }
    return (
   <div>
<div className="login-box">
  <div className="login-logo">
  <a href="/"><b>Event </b> Planner</a>
  </div>
  <div class="container-login100">
    <p className="login-box-msg">Vendor Login</p>
    <form onSubmit = {this.submitForm} class="login100-form validate-form flex-sb flex-w">     
          <div className="form-group has-feedback">
                    <Col>
                        <FormGroup>
                            <Label for='email'>Email</Label>
                            <Input type='email'  class="form-control" name='email' id='email' value={this.state.email} onChange={this.handleChange} required/>
                            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </FormGroup>
                    </Col>
                    </div>
                    <div class="form-group has-feedback">
                    <Col>
                        <FormGroup>
                            <Label for='password'>Password</Label>
                            <Input type='password' class="form-control" name='password' id='password' value={this.state.password} onChange={this.handleChange} required/>
                            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                        </FormGroup>
                    </Col>
                    </div>
                    
                    <div className="form-group">
                                    <input type="checkbox"></input> <span>Remember me </span>
                                </div>
                    <div class="row">
                    <div class="col-xs-8">
                                        <p><a href="Register">Create Account</a></p>
                                    </div >
        {/* <div class="col-xs-4">
        <button class="btn btn-primary btn-block btn-flat" color="primary" type="submit">Submit</button>
                    
                
        </div> */}
        <div class="col-xs-4">
        <button type="submit" className="btn btn-primary btn-block btn-flat" >Submit</button>
                    
                
        </div>
       
      </div>
                 
</form>
 

 </div>
 
           </div>
           </div>
            
           
        )
       }
       

}
export default Loginpage
