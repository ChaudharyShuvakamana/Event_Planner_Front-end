import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {



  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
    this.state = {
      all_comments: [],
      comment: "",
      eventname: "",
      fullname: "",
      address: "",
      phone: "",
      from: "",
      to: "",
      email: "",
      user_id: this.props.business.user_id._id,
      business_id: this.props.business._id,
      config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      }
    }

    console.log(this.props.venue)
  }

  handleChange = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }


  postcomment = (e) => {
    // alert(this.state.comment)
    e.preventDefault();

    const data = {
      user_id: this.props.business.user_id._id,
      fullname: this.state.fullname,
      address: this.state.address,
      phone: this.state.phone,
      email: this.state.email,
      eventname: this.state.eventname,
      from: this.state.from,
      to: this.state.to,
      business_id: this.state.business_id
    }
    axios.post('http://localhost:3000/postbooking', data, this.state.config)
      .then(response => {
        console.log(response.data.successmsg)
        // window.location.reload();
        this.setState({
          success: response.data.successmsg
        });
        setTimeout(function () {
          window.location.reload()
          alert("Successfully Booked business");
        }, 1000);
      })
      .catch(error => {
        this.setState({
          error: "Something went wrong. Try again!"
        })
        console.log(error.response.data.errmsg)
      })
  }
  componentDidMount() {
    // alert(this.props.post._id)
    axios.get('http://localhost:3000/getbookingbybusinessid/' + this.props.business._id, this.state.config)
      .then(res => {
        console.log(res.data)
        //alert(res.data)
        this.setState({
          all_comments: res.data,
          user_id: res.data.user_id,
          fullname: res.data.fullname,
          address: res.data.address,
          phone: res.data.phone,
          email: res.data.email,
          eventname: res.data.eventname,
          from: res.data.from,
          to: res.data.to,

        });
      })
    // alert(this.state.all_comments)
  }


  render() {


//     const commentbox = this.state.all_comments.map((venue) => {
//       return (
//         <div className="comment-box">
//               <table id="customers">

// <tr>
//   <th>Fullname</th>
//   <th>Address</th>
//   <th>Phone number</th>
//   <th>Email</th>
//   <th>Eventname</th>
//   <th>From</th>
//   <th>To</th>
// </tr>

// <tr >
//            <td>{venue.fullname}</td> 
//            <td>{venue.address}</td> 
//            <td>{venue.phone}</td> 
//            <td>{venue.email}</td> 
//            <td>{venue.eventname}</td> 
//            <td>{venue.date}</td> 
//            <td>{venue.date2}</td> 
// </tr>
// </table>
//         </div>

//       )

//     })

    return (

      <div className="row post">

        <table id="customers">

          <tr>
            <th>Business Image</th>
            <th>Business Name</th>
            <th>Business Type</th>
            <th>Phone</th>
            <th>Address </th>
            <th>Email</th>
            <th>price</th>
            <th>Description</th>
          </tr>

          <tr >
            <img src={"http://localhost:3000/image/" + this.props.business.image} style={{ width: "100px", marginLeft: "5px", height: "100px" }} />
            <td>{this.props.business.businessname}</td>
            <td>{this.props.business.businesstype}</td>
            <td>{this.props.business.phone}</td>
            <td>{this.props.business.address}</td>
            <td>{this.props.business.email}</td>
            <td>{this.props.business.price}</td>
            <td>{this.props.business.description}</td>



          </tr>
        </table>
        <div className="pull-right">

          <button type="button" className="btn btn-primary" style={{ marginTop: 15 }} data-toggle="modal" data-target="#myModal"> <i className="fa fa-home" ></i> Book Business</button>
          <div id="myModal" class="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <form >
                    <div className="form-group">
                      <h3>Book Business</h3>
                      <label>Full name</label>
                      <input className="form-control" type="text" placeholder="Full name *" name="fullname" onChange={this.handleChange} />
                      <label>Address</label>
                      <input className="form-control" type="text" placeholder="Address *" name="address" onChange={this.handleChange} />
                      <label>Phone</label>
                      <input className="form-control" type="text" placeholder="Phone *" name="phone" onChange={this.handleChange} />
                      <label>Email</label>
                      <input className="form-control" type="text" placeholder="Email *" name="address" onChange={this.handleChange} />
                      <label>Eventname</label>
                      <input className="form-control" type="text" placeholder="Eventname *" name="eventname" onChange={this.handleChange} />
                      <label>From</label>
                      <input className="form-control" type="date" placeholder="From *" name="from" onChange={this.handleChange} />
                      <label>To</label>
                      <input className="form-control" type="date" placeholder="To *" name="to" onChange={this.handleChange} />
                    </div>
                    
                  </form>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" style={{ marginTop: 15 }} onClick={this.postcomment}> <i className="fa fa-home" ></i> Book Business</button>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>





        <div>


         
        </div>
        {/* {commentbox} */}
      </div>
    )
  }
}
export default Post;