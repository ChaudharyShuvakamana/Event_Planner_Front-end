import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import {
  Container, Col, Form, FormGroup, Label, Input, Button, FormText
} from 'reactstrap'


class Signuppage extends React.Component {
  constructor() {
    super();
    this.state = {
      'fullname': '',
      'address': '',
      'number': '',
      'email': '',
      'password': '',
      redirect: false,
    }
  }

  sendUser = (e) => {
    e.preventDefault();
    const data = {
      fullname: this.state.fullname,
      address: this.state.address,
      number: this.state.number,
      email: this.state.email,
      password: this.state.password
    }
    axios.post('http://localhost:3000/register', data).then(() => {

      this.setState({
        redirect: true
      })
    })



  }

  handleRedirect() {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
  }

  render() {

    return (
      <div>
        {this.handleRedirect()}
        <div className="login-box">
          <div className="login-logo">
            <a href="/"><b>Event </b><b /> Planner</a>
          </div>
          <div class="container-login100">
            <p className="login-box-msg">Vendor Registration</p>

            <form onSubmit={this.sendUser} class="login100-form validate-form flex-sb flex-w">
              <div className="form-group has-feedback">
                <Col>
                  <FormGroup>
                    <Label for='fullname'>Full Name</Label>
                    <input className="form-control" id="fullname" type="text" value={this.state.fullname} onChange={(event) =>
                      this.setState({ fullname: event.target.value })} placeholder="Full name *" required />
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                  </FormGroup>
                </Col>

              </div>
              <div className="form-group has-feedback">
                <Col>
                  <FormGroup>
                    <Label for='address'>Address</Label>
                    <input className="form-control" type="text" id="address" value={this.state.address} onChange={(event) =>
                      this.setState({ address: event.target.value })} placeholder="Address *" required />
                    <span class="glyphicon glyphicon-globe form-control-feedback"></span>
                  </FormGroup>
                </Col>
              </div>

              <div className="form-group has-feedback">
                <Col>
                  <FormGroup>
                    <Label for='number'>Phone number</Label>
                    <input className="form-control" type="text" id="number" value={this.state.number} onChange={(event) =>
                      this.setState({ number: event.target.value })} placeholder="Phone number *" required />
                    <span class="glyphicon glyphicon-phone form-control-feedback"></span>
                  </FormGroup>
                </Col>
              </div>

              <div className="form-group has-feedback">
                <Col>
                  <FormGroup>
                    <Label for='date'>Email</Label>
                    <input className="form-control" type="email" id="email" value={this.state.email} onChange={(event) =>
                      this.setState({ email: event.target.value })} placeholder="Email *" required />
                    <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                  </FormGroup>
                </Col>
              </div>
              <div className="form-group has-feedback">
                <Col>
                  <FormGroup>
                    <Label for='password'>password</Label>
                    <input className="form-control" type="password" id="password" value={this.state.password} onChange={(event) =>
                      this.setState({ password: event.target.value })} placeholder="Set A Password *" required />
                    <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                  </FormGroup>
                </Col>
              </div>
              <div className="form-group">
                <input type="checkbox"></input> <span>I agree to the Tearns and Conditions </span>
              </div>
              <div class="row form-group">

                <div class="col-xs-8">
                  <a id="loginh" href="login">Already have an Account ?</a>
                </div>

                <div class="col-xs-4">
                  <button id="signup" type="submit" className="btn btn-primary btn-block btn-flat" >Sign up</button>


                </div>

              </div>

            </form>
          </div>




        </div>
      </div>


    )
  }
}
export default Signuppage
