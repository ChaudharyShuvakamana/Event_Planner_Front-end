import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import Navi from '../Navi'
import {
    Container, Col, Form, FormGroup, Label, Input, Button, FormText
} from 'reactstrap';
import { Link } from 'react-router-dom';


class Addbusiness extends React.Component {
    constructor() {
        super()
        this.state = {
            id: "",
            businessname: '',
            businesstype: '',
            phone: '',
            address: '',
            email: '',
            description: '',
            price:'',
            Image: '',
            isadded: true,
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleImageChange = (e) => {
        this.setState({
            Image: e.target.files[0]
        })
    };


    addbusiness = (e) => {
        e.preventDefault();
        //


        let postdata = new FormData();
        postdata.append('businessname', this.state.businessname);
        postdata.append('businesstype', this.state.businesstype);
        postdata.append('phone', this.state.phone);
        postdata.append('price', this.state.price);
        postdata.append('address', this.state.address);
        postdata.append('email', this.state.email);
        postdata.append('description', this.state.description);


        postdata.append('Img', this.state.Image);

        postdata.append('Image', this.state.Image.name);



        console.log(this.state.Image.name);

        axios.post('http://localhost:4000/business', postdata, this.state.config)
            .then((response) => {
                console.log(response.data);
                
                localStorage.setItem('token', response.data.token)
                this.setState({
                    //this values should match with the value of model class of API
                    //install cors in api
                    businessname: this.state.businessname,
                    businesstype: this.state.businesstype,
                    price:this.state.price,
                    phone: this.state.phone,
                    address: this.state.address,
                    email: this.state.email,
                    description: this.state.description,
                    Image: this.state.Image

                });



            }).catch((err) => console.log(err));
            setTimeout(function() {
                window.location.reload()
                alert("Successfully Added");
               }, 1000);
    }
    render() {
        //if (this.state. isadded === true) {
        // alert("user added successfully")
        // return <Redirect to='../Managebusiness' />
        //}

        return (
            <div>
                <div className="content-wrapper">
                    <section id="candidates" className="content-header">
                        <div className="container">
                            <div className="row">
                                <Navi />

                                <div className="col-md-9 bg-white padding-2">
                                    <form className="form validate-form flex-sb flex-w">
                               

                                        <div className="box-header with-border">
                                            <h3 className="box-title">Add new businesss</h3>
                                        </div>
                                        <div className="box-body">
                                            <div className="container-fluid">

                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="businessname" placeholder="Enter business Name" onChange={this.handleChange} required />

                                                </div>
                                                <div className="form-group">

                                                    <input type="text" className="form-control" name="businesstype" placeholder="Enter business Type" onChange={this.handleChange} required />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="phone" placeholder="Enter number" onChange={this.handleChange} required />
                                                </div>
                                             
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="address" placeholder="Enter Address" onChange={this.handleChange} required />

                                                </div>


                                                <div className="form-group row">
                                                    <div className="col-md-6">
                                                        <input type="text" className="form-control" name="email" placeholder="Enter Email" onChange={this.handleChange} required />
                                                    </div>
                                                    <div className="col-md-6">
                                                    <input type="text" className="form-control" name="price" placeholder="Enter price" onChange={this.handleChange} required />
                                         
                                                    </div>
                          
                                                </div>

                                                <div className="form-group row">
                                                    <textarea name="description" className="form-control" rows="4" cols="50" onChange={this.handleChange}></textarea>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="container-fluid">
                                            <input type="file" name="Image" className="form-control" placeholder="choose image" onChange={this.handleImageChange} required />
                                            <div className="preview-div">

                                            </div>
                                            <div className="box-footer">
                                                <div className="pull-right">
                                                    <button class="btn btn-primary" onClick={this.addbusiness} type="submit">Add business</button>
                                                </div>
                                            </div>
                                        </div>
                                

                                </form>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            </div>
      
 

        )
    }
}
export default Addbusiness