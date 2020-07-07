import React from 'react'
import axios from 'axios';
import Navi from '../Navi'
import {
    Container, Col, Form, FormGroup, Label, Input, Button, FormText
  } from 'reactstrap'
  
class Updatevenue extends React.Component {
    state = {
        venuename: '',
        venuetype: '',
        pricepernight: '',
        email: '',
        phone: '',
        address: '',
        id:"",

        venue_data: [],
        user_data: [],
        config: {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        }
        
    }
    

 


componentDidMount() {
axios.get('http://localhost:4000/logincheck', this.state.config)
.then((res) => {
//S alert(response.data.fname)
this.setState({
user_data: res.data,
id: res.data._id,
fullname: res.data.fullname,
address: res.data.address,
email: res.data.email,
number: res.data.number,
password: res.data.password
})

})
}

    componentDidMount() {

        axios.get("http://localhost:4000/venue/single/" + this.state.id).then(
            res => {
                console.log(res.data)
                this.setState({
                    venuename: res.data.venuename,
                    venuetype: res.data.venuetype,
                    pricepernight: res.data.pricepernight,
                    email: res.data.email,
                    phone: res.data.phone,
                    address: res.data.address,





                })

            })
    }
    UpdateData = () => {
        const data = {
            venuename: this.state.venuename,
            venuetype: this.state.venuetype,
            pricepernight: this.state.pricepernight,
            address: this.state.address,
            email: this.state.email,
            phone: this.state.phone,


        }

        axios.put("http://localhost:4000/venue/" + this.props.match.params.id,
            data)
        window.location.reload()
        alert("update sucessfully")

    }
    render() {
        return (
<div>
        <div className="content-wrapper">
          <section id="candidates" className="content-header">
            <div className="container">
              <div className="row">
                <Navi />

                <div className="col-md-9 bg-white padding-2">
                  <form >

                    <div className="box-header with-border">
                      <h3 className="box-title">Update venue</h3>
                    </div>
                    <div className="box-body">
                      <div className="container-fluid">

                        <div className="form-group">
                          <Label for='venuename'>venue name</Label>
                          <input type="text" className="form-control"  value={this.state.venuename}
                            onChange={(event) => this.setState({ venuename: event.target.value })} />
                        </div>
                        <div className="form-group">
                          <Label for='venuetype'>venuetype</Label>
                          <input type="text" className="form-control"  value={this.state.venuetype}
                            onChange={(event) => this.setState({ venuetype: event.target.value })} />
                        </div>
                        <div className="form-group">
                          <Label for='pricepernight'>Price</Label>
                          <input type="text" className="form-control"  value={this.state.pricepernight}
                            onChange={(event) => this.setState({ pricepernight: event.target.value })} />
                        </div>
                        <div className="form-group">
                          <Label for='email'>Email</Label>
                          <input type="text" className="form-control"  value={this.state.email}
                            onChange={(event) => this.setState({ email: event.target.value })} />
                        </div>
                        <div className="form-group">
                          <Label for='address'>Address</Label>
                          <input type="text" className="form-control"  value={this.state.address}
                            onChange={(event) => this.setState({ address: event.target.value })} />
                        </div>
                        <div className="form-group">
                          <Label for='phone'>Phone number</Label>
                          <input type="text" className="form-control"  value={this.state.phone}
                            onChange={(event) => this.setState({ phone: event.target.value })} />
                        </div>

                      </div>


                      <div className="container-fluid">

                        <div className="box-footer">
                          <div className="pull-right">
                            <button type="button" onClick={this.UpdateData} className="btn btn-flat btn-primary">Update venue</button>
                          </div>
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
export default Updatevenue
