import React from 'react'
import axios from 'axios';
import Navi from '../Navi'
import {
  Container, Col, Form, FormGroup, Label, Input, Button, FormText
} from 'reactstrap'



class Updateuser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: "",
      fullname: '',
      address: '',
      email: '',
      password: '',
      number: '',
      user_data: [],
      config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      }
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
  // componentDidMount() {

  //     axios.get("http://localhost:4000/users/single/" + this.props.match.params.id).then(
  //         res => {
  //             console.log(res.data)
  //             this.setState({
  //                 //teacher_data : res.data,
  //                 fullname: res.data.fullname,
  //                 address: res.data.address,
  //                 email: res.data.email,
  //                 number: res.data.number,
  //                 password: res.data.password


  //             })

  //         })
  // }
  UpdateData = () => {
    const data = {
      fullname: this.state.fullname,
      address: this.state.address,
      email: this.state.email,
      number: this.state.number,
      password: this.state.password
    }

    axios.put("http://localhost:4000/user/" + this.state.id, data,
      data)
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
                      <h3 className="box-title">Edit profile</h3>
                    </div>
                    <div className="box-body">
                      <div className="container-fluid">

                        <div className="form-group">
                          <Label for='fullname'>Fullname</Label>
                          <input type="text" className="form-control" value={this.state.fullname}
                            onChange={(event) => this.setState({ fullname: event.target.value })} />
                        </div>
                        <div className="form-group">
                          <Label for='email'>Email</Label>
                          <input type="text" className="form-control" value={this.state.email}
                            onChange={(event) => this.setState({ email: event.target.value })} />
                        </div>
                        <div className="form-group">
                          <Label for='address'>Address</Label>
                          <input type="text" className="form-control" value={this.state.address}
                            onChange={(event) => this.setState({ address: event.target.value })} />
                        </div>
                        <div className="form-group">
                          <Label for='number'>Number</Label>
                          <input type="text" className="form-control" value={this.state.number}
                            onChange={(event) => this.setState({ number: event.target.value })} />
                        </div>
                        <div className="form-group">
                          <Label for='password'>Password</Label>
                          <input type="password" className="form-control" value={this.state.password}
                            onChange={(event) => this.setState({ password: event.target.value })} />
                        </div>


                      </div>


                      <div className="container-fluid">

                        <div className="box-footer">
                          <div className="pull-right">
                            <button type="button" onClick={this.UpdateData} className="btn btn-flat btn-primary">Update Profile</button>
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
export default Updateuser
