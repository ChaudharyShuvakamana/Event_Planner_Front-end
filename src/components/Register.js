import React from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import {
    Container, Col, Form, FormGroup, Label, Input, Button, FormText
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            fullname: '',
            phone: '',
            address: '',
            user_type: 'vendor',
            isRegistered: true,
            redirect : false,

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    Register = (e) => {
        e.preventDefault();
        console.log(this.state);

        axios.post('http://localhost:4000/register', this.state)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token)
                this.setState({
                    //this values should match with the value of model class of API
                    //install cors in api
                    fullname: this.state.fullname,
                    email: this.state.email,
                    address: this.state.address,
                    password: this.state.password,
                    user_type: this.state.user_type,
                });
               


            }).catch((err) => console.log(err));
            setTimeout(function() {
                window.location.reload()
                alert("Successfully Registered");
               }, 1000);
    }
  

    render() {

        return (
            <div>
                <div className="login-box">
                    <div className="login-logo">
                        <a href="/"><b>Event </b> Planner</a>
                    </div>
                    <div class="container-login100">
                        <p className="login-box-msg">Vendor Regristration</p>

                        <form onSubmit = {this.Register} className="login100-form validate-form flex-sb flex-w">

                            <div className="row form-group has-feedback">
                                <Col>
                                    <FormGroup>
                                        <Label for='fullname'>Full Name</Label>
                                        <input className="form-control" type="text" value={this.state.fullname} onChange={(event) => this.setState({ fullname: event.target.value })}
                                            placeholder="Enter Fullname" name="fullname" required />
                                        <span class="glyphicon glyphicon-user form-control-feedback"></span>
                                    </FormGroup>
                                </Col>
                            </div>
                            <div className="row form-group has-feedback">
                                <Col>
                                    <FormGroup>
                                        <Label for='Address'>Address</Label>
                                        <input className="form-control" type="text" value={this.state.address} onChange={(event) => this.setState({ address: event.target.value })}
                                            placeholder="Enter Adress" name="address" required />
                                        <span class="glyphicon glyphicon-globe form-control-feedback"></span>
                                    </FormGroup>
                                </Col>
                            </div>
                            <div className="row form-group has-feedback">
                                <Col>
                                    <FormGroup>
                                        <Label for='phonenumber'>phone number</Label>
                                        <input className="form-control" type="text" value={this.state.phone} onChange={(event) => this.setState({ phone: event.target.value })}
                                            placeholder="Enter phone number" name="phone" required />
                                        <span class="glyphicon glyphicon-phone form-control-feedback"></span>
                                    </FormGroup>
                                </Col>
                            </div>
                            <div className="row form-group has-feedback">
                                <Col>
                                    <FormGroup>
                                        <Label for='email'>Email</Label>
                                        <input className="form-control" type="email" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })}
                                            placeholder="Enter email" name="email" required />
                                        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                                    </FormGroup>
                                </Col>
                            </div>
                            <div className="row form-group has-feedback">
                                <Col>
                                    <FormGroup>
                                        <Label for='password'>Password</Label>
                                        <input className="form-control" type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })}
                                            placeholder="Enter Password" name="password" required />
                                        <input type="hidden" value={this.state.usertype} onChange={(event) => this.setState({ usertype: event.target.value })}
                                            name="user_type" required />
                                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                                    </FormGroup>
                                </Col>
                            </div>

                            <div className="row form-group">
                                <input type="checkbox"></input> <span>I agree to the Tearns and Conditions </span>
                            </div>
                            <div class="row form-group">

                                <div class="form-group">
                                    <Link to="/login" >Already Have an Account?</Link>
                                </div >

                                <div class="form-group">
                                    <button className="btn btn-primary btn-block btn-flat" type="submit">Register</button>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </div>



        )
    }

}




export default Register