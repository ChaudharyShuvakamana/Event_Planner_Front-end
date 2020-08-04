import axios from 'axios'
import React from 'react'

class Navi extends React.Component {
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
    axios.get('http://localhost:3000/userlogincheck', this.state.config)
      .then((response) => {
        //alert(response.data._id);
        this.setState({
          id: response.data._id,
          user: response.data,
          fname: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
        })
      })
  }

  LogOut = () => {
    //delete token in browser and logout from backend
    axios.post('http://localhost:3000/userlogout')
    localStorage.removeItem('token')


  }

  render() {

    return (
      <div className="col-md-3">
        <div className="box box-solid">
          <div className="box-header with-border">
            <h3 className="box-title">Welcome, <i>{this.state.user.fullname}</i> <b></b></h3>
          </div>
          <div className="box-body no-padding">
            <ul className="nav nav-pills nav-stacked">

              <li><a href="Newsfeed"><i className="fa fa-dashboard"></i> Newsfeed</a></li>
              <li><a href="Blog"><i className="fa fa-envelope"></i> Post Blog</a></li>
              <li><a href="Mypost"><i className="fa fa-retweet"></i> My post</a></li>
              <li><a href="Edituser"><i className="fa fa-user"></i> Edit Profile</a></li>
              <li><a href="Bookingvenue"><i className="fa fa-home"></i> Book Venues</a></li>
              <li><a href="Bookingbusiness"><i className="fa fa-suitcase"></i> Book Business</a></li>
              <li><a href="Venuebookedlist"><i className="fa fa-bars"></i> Venue book list</a></li>
              <li><a href="businessbookedlist"><i className="fa fa-book"></i> Business book list</a></li>
              <li><a href="userlogin" onClick={this.LogOut}><i className="fa fa-arrow-circle-o-right"></i> Logout</a></li>

            </ul>
          </div>
        </div>
      </div>

    )
  }


}
export default Navi