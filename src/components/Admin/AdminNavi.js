import axios from 'axios'
import React from 'react'

class AdminNavi extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      singleFeed: {},
      post_status: '',
      profileimage: '',
      name: '',
      post: [],
      user: {},
      config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      }
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3000/logincheck', this.state.config)
      .then((response) => {
        //alert(response.data._id);
        this.setState({
          id: response.data._id,
          user: response.data,
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          gender: response.data.gender,
          dob: response.data.dob
        })
      })
  }

  LogOut = () => {
    //delete token in browser and logout from backend
    axios.post('http://localhost:3000/logout')
    localStorage.removeItem('token')


  }

  render() {

    return (
      <div className="col-md-3">
        <div className="box box-solid">
          <div className="box-header with-border">
            <h3 className="box-title">Welcome, <i>{this.state.user.fullname}</i><b></b></h3>
          </div>
          <div className="box-body no-padding">
            <ul className="nav nav-pills nav-stacked">
              <li><a href="AdminDashboard"><i className="fa fa-dashboard"></i>Dashboard</a></li>
              <li><a href="UserDetails"><i className="fa fa-user"></i> User Detail</a></li>
              <li><a href="VenueDetails"><i className="fa fa-home"></i> Venue Detail</a></li>
              <li><a href="BusinessDetails"><i className="fa fa-suitcase"></i> Business Detail</a></li>
              <li><a href="PostDetails"><i className="fa fa-book"></i> Post Detail</a></li>
              <li><a href="BvenueDetails"><i className="fa fa-book"></i> Venue booklist</a></li>
              <li><a href="BbusinessDetails"><i className="fa fa-book"></i> Business booklist</a></li>
              <li><a href="Adminprofilee"><i className="fa fa-retweet"></i> Admin Detail</a></li>
              <li><a href="Login" onClick={this.LogOut}><i className="fa fa-arrow-circle-o-right"></i> Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

    )
  }


}
export default AdminNavi