import axios from 'axios'
import React from 'react'

import {NavLink,Route,Switch,Redirect} from 'react-router-dom'

class Navi extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      name: '',
      user: {},
      config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },

        
      }
    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/logincheck', this.state.config)
      .then((response) => {
        //alert(response.data._id);
        this.setState({
          id: response.data._id,
          user: response.data,
          fullname: response.data.fullname,
          email: response.data.email,
        })
      })
  }

  LogOut = () => {
    //delete token in browser and logout from backend
    axios.post('http://localhost:4000/logout')
    localStorage.removeItem('token');
    


  }

  render() {       
    if (this.state.config.headers.Authorization === "Bearer null") {
    alert('Login! First')
    return <Redirect to='/Login' />
}

    return (
      <div className="col-md-3">
        <div className="box box-solid">
          <div className="box-header with-border">
            <h3 className="box-title">Welcome, <i>{this.state.user.fullname}</i> <b></b></h3>
          </div>
          <div className="box-body no-padding">
            <ul className="nav nav-pills nav-stacked">
              <li><a href="Addvenue"><i className="fa fa-home"></i> Add venue</a></li>
              <li><a href="Addbusiness"><i className="fa fa-suitcase"></i> Add Business</a></li>
              <li><a href="Updateuser"><i className="fa fa-user"></i> Edit Profile</a></li>
              <li><a href="Managebusiness"><i className="fa fa-list"></i> Manage business</a></li>
              <li><a href="Managevenue"><i className="fa fa-th-list"></i> Manage venue</a></li>
              <li><a href="Login" onClick={this.LogOut}><i className="fa fa-arrow-circle-o-right"></i> Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

    )
  }


}
export default Navi