import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import axios from 'axios'
import {
    Container, Col, Form, FormGroup, Label, Input, Button, FormText
  } from 'reactstrap'




class Login extends React.Component {
    state = {
        email: '',
        password: ''

    }
    login = () => {
        //    alert("test")
        const userdata = {
            email: this.state.email,
            password: this.state.password

        }
        axios.post("http://localhost:4000/login", userdata).then((Response) => {
            console.log(Response.data)
            localStorage.setItem('token', Response.data.token)
            localStorage.setItem('user_type', Response.data.user.user_type)
            localStorage.setItem('user_id', Response.data.user._id)

            localStorage.getItem('token')
            localStorage.getItem('user_type')


            if (localStorage.getItem('token') != null && localStorage.getItem('user_type') === "admin") {

                window.location.href = './user/userHead'
            }
            if (localStorage.getItem('token') != null && localStorage.getItem('user_type') === "vendor") {
                window.location.href = '/addvenue'
            }
        })

    }
    render() {
        return (
            <div>
                <div className="login-box">
                    <div className="login-logo">
                        <a href="/"><b>Event </b> Planner</a>
                    </div>
                    <div class="container-login100">
                        <p className="login-box-msg">Vendor Login</p>


                        <form class='' className="login100-form validate-form flex-sb flex-w">
                            <div className="form-group has-feedback">
                                <Col>
                                    <FormGroup>
                                        <Label for='email'>Email</Label>
                                        <input type="text" className = "form-control" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} placeholder="Enter Email" name="email" required />


                                        <span class="glyphicon glyphicon-user form-control-feedback"></span>
                                    </FormGroup>
                                </Col>

                            </div>
                            <div className="form-group has-feedback">
                                <Col>
                                    <FormGroup>
                                        <Label for='password'>Password</Label>
                                        <input type="password"className = "form-control" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} placeholder="Enter Password" name="password" required />

                                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                                    </FormGroup>
                                </Col>
                                <div className="form-group">
                                    <input type="checkbox"></input> <span>Remember me </span>
                                </div>
                                <div class="row">

                                    <div class="col-xs-8">
                                        <p><a href="Register">Create Account</a></p>
                                    </div >

                                    <div class="col-xs-4">
                                        <button className="btn btn-primary btn-block btn-flat" onClick={this.login} type="submit">Login</button><br />
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
export default Login