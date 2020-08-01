import React from 'react'
import Navi from './User/UserNavi';
import axios from 'axios'
import { Redirect } from 'react-router';
import '../css/Table.css'
import {NavLink} from 'react-router-dom'
class Newsfeedpage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      id: "",
      name: '',
      venues:[],
      bvenue:"",
      user: {},
      fullname: '',
      address: '',
      email: '',
      number: "",
      from: "",
      to: "",
      // venue_id:'',
      description:'',
      eventname:"", 
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
          user_id: response.data._id,
          user: response.data,
          fullname: response.data.fullname,
          email: response.data.email,
          address: response.data.address,
          number: response.data.number

        })
        //alert(response.data._id)
        axios.get("http://localhost:3000/findpost")
          .then((response) => {
            console.log(response.data)
            this.setState({ 
              venues: response.data
             });


          })

      })
  }


  handleChange = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }

  postbvenue = (e) => {
    // alert(this.state.bvenue)
    this.setState(
      { [e.target.name]: e.target.value }
    )
    e.preventDefault();

    const data = {
      user_id: this.state.user_id,
      fullname: this.state.fullname,
      address: this.state.address,
      number: this.state.number,
      email: this.state.email,
      eventname: this.state.eventname,
      from: this.state.from,
      to: this.state.to,
      // venue_id: this.state.venue_id
    }
    // alert(this.state.venue_id)
    axios.post('http://localhost:3000/postbvenue', data, this.state.config)
      .then(response => {
        console.log(response.data.successmsg)
        // window.location.reload();
        this.setState({
          success: response.data.successmsg
        });
        setTimeout(function () {
          window.location.reload()
          alert("Successfully Booked venue");
        }, 1000);
      })
      .catch(error => {
        this.setState({
          error: "Something went wrong. Try again!"
        })
        console.log(error.response.data.errmsg)
      })
  }





  render() {
    //post design foreach loop
    const photoblog = this.state.venues.map((venues) => {
      return (
        <div className='row post'>

<table id="customers">
                  
                  <tr>
    <th>Venue Image</th>               
    <th>venue Name</th>
    <th>venue Type</th>
    <th>Phone</th>
    <th>Address </th>
    <th>Email</th>
    <th>Description</th>
  </tr>
              
  <tr >
  <img src={"http://localhost:3000/image/" + venues.image} style = {{width : "80px" , marginLeft:"5px", height: "80px"}}/>
   <td>{venues.venuename}</td>
    <td>{venues.venuetype}</td>
    <td>{venues.phone}</td>
    <td>{venues.address}</td>
    <td>{venues.email}</td>
     <td>{venues.description}</td>
     


  </tr>
           </table>
           <div className="pull-right">

          <button type="button" className="btn btn-primary" style={{ marginTop: 15 }} data-toggle="modal" data-target="#myModal"> <i className="fa fa-home" ></i> Book venue</button>
          <div id="myModal" class="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <form >
                    <div className="form-group">
                      <h3>Book venue</h3>
                      {/* <label>Venue Id</label>
                      <input className="form-control" type="text" placeholder="Venue id *" value={venues._id} name="venue_id" onChange={this.handleChange} />
                      */}
                      <label>Full name</label>
                      <input className="form-control" type="text" placeholder="Full name *" value={this.state.user.fullname} name="fullname" onChange={this.handleChange} />
                      <label>Address</label>
                      <input className="form-control" type="text" placeholder="Address *" name="address" value={this.state.user.address} onChange={this.handleChange} />
                      <label>Phone</label>
                      <input className="form-control" type="text" placeholder="number *" name="number" value={this.state.user.number} onChange={this.handleChange} />
                      <label>Email</label>
                      <input className="form-control" type="text" placeholder="Email *" name="email" value={this.state.user.email} onChange={this.handleChange} />
                      <label>Eventname</label>
                      <input className="form-control" type="text" placeholder="Eventname *" name="eventname" onChange={this.handleChange} />
                      <label>From</label>
                      <input className="form-control" type="date" placeholder="From *" name="from" onChange={this.handleChange} />
                      <label>To</label>
                      <input className="form-control" type="date" placeholder="To *" name="to" onChange={this.handleChange} />
                    </div>
                    
                  </form>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" style={{ marginTop: 15 }} onClick={this.postbvenue}> <i className="fa fa-home" ></i> Book venue</button>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
      )
    })
    return (
      <div>

        <div className="content-wrapper" style={{ marginleft: "0 px" }}>


          <section id="candidates" className="content-header">
            <div className="container">
              <div className="row">
                <Navi />
                <div className="col-md-9 bg-white padding-2">
                  <form action="#" method="post" enctype="multipart/form-data" className="p-5 bg-white">
                    <div className="col-md-12">

                      <h3 className="mb-3 color-blue"><b>User venues</b></h3>
                      {photoblog}

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
export default Newsfeedpage