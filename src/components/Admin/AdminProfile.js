import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import Navi from '../Admin/AdminNavi';

class Updateuser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: "",
      fullname: '',
      address: '',
      number: '',
      email: '',
      user: '',
      password: '',
      config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      }
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3000/userlogincheck', this.state.config)
      .then((response) => {
        //S alert(response.data.fname)
        this.setState({
          user: response.data,
          id: response.data._id,
          fullname: response.data.fullname,
          address: response.data.address,
          number: response.data.number,
          email: response.data.email,
          password: response.data.password
        })

      })
  }
  UpdateData = () => {
    const data = {
      fullname: this.state.fullname,
      address: this.state.address,
      number: this.state.number,
      email: this.state.email,
      password: this.state.password
    }
    axios.put("http://localhost:3000/userupdates/" + this.state.id, data).then(
      setTimeout(function () {
        window.location.reload()
        alert("Successfully updated");
      }, 1000)
    )
  }
  handlechange = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }


  render() {
    return (
      <div >

        <div className="content-wrapper">

          <section id="candidates" className="content-header">
            <div className="container">
              <div className="row">
                <Navi />
                <div className="col-md-9 bg-white padding-2">
                 
                  <form className="form validate-form flex-sb flex-w">
                  <div className="box-header with-border">
                      <h3 className="box-title">Edit profile</h3>
                    </div>
                    <div className="box-body">
                      <div className="container-fluid">
                        <div className="form-group">
                          <label for="fullname">Full Name</label>
                          <input type="text" className="form-control" id="fullname" name="fullname" placeholder="Full Name" value={this.state.fullname} onChange={this.handlechange} />
                        </div>
                        <div className="form-group">
                          <label for="address">Address</label>
                          <input type="text" className="form-control input-lg" id="address" name="address" placeholder="Address" value={this.state.address} onChange={this.handlechange} />
                        </div>
                        <div className="form-group">
                          <label for="number">Phone number</label>
                          <input type="number" name="number" id="number" className="form-control input-lg" placeholder="Number" value={this.state.number} onChange={this.handlechange} />
                        </div>
                        <div className="form-group">
                          <label for="email">Email address</label>
                          <input type="email" className="form-control input-lg" id="email" placeholder="Email" value={this.state.user.email} readonly />
                        </div>
                        <div className="form-group">
                          <label for="password">Password</label>
                          <input type="password" className="form-control input-lg" id="password" placeholder="password" value={this.state.user.password} readonly />
                        </div>

                        <div className="form-group">
                          <button id="updateprofile" type="button" onClick={this.UpdateData} className="btn btn-flat btn-primary">Update Profile</button>
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
