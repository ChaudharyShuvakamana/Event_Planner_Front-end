import React, { Component } from 'react';
import axios from 'axios';

class Adminpost extends Component {



  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
    this.state = {
      all_comments :[],
          comment:"",
          user_id : this.props.post.user_id._id,
          post_id : this.props.post._id,
          config: {
              headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
          }
      }

      console.log(this.props.post)
  }

  handleChange = (e) => {
    this.setState(
        { [e.target.name]: e.target.value }
    )
  }

    render() {

        return (

            <div className="row post">
            <div className="col-md-12 color-white">
            <img src={"http://localhost:3000/image/" + this.props.post.user_id.images}  style={{marginTop:15}} className="img-circle" height="45px" width="40px" />
                <a href=""><strong>{this.props.post.user_id.fullname }</strong></a>
              
            </div>
            <div className="col-md-12">
                <p>{this.props.post.status}</p>
            </div>

            <div className="col-md-12"> 
                <img src={"http://localhost:3000/image/" + this.props.post.image} className="img-responsive post-img" width="100%" />
            </div>
       
        </div>
                 )
    }
}
export default Adminpost;