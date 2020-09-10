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
      businesss:[],
      bbusiness:"",
      user: {},
      fullname: '',
      address: '',
      email: '',
      number: "",
      from: "",
      to: "",
      // business_id:'',
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
        axios.get("http://localhost:3000/findbusiness")
          .then((response) => {
            console.log(response.data)
            this.setState({ 
              businesss: response.data
             });


          })

      })
  }


  handleChange = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }

  postbbusiness = (e) => {
    // alert(this.state.bbusiness)
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
      // business_id: this.state.business_id
    }
    // alert(this.state.business_id)
    axios.post('http://localhost:3000/postbbusiness', data, this.state.config)
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





  render() {
    //post design foreach loop
    const photoblog = this.state.businesss.map((businesss) => {
      return (
        <div className='row post'>

<table id="customers">
                  
                  <tr>
    <th>business Image</th>               
    <th>business Name</th>
    <th>business Type</th>
    <th>business price</th>
    <th>Phone</th>
    <th>Address </th>
    <th>Email</th>
    <th>Description</th>
  </tr>
              
  <tr >
  <img src={"http://localhost:3000/image/" + businesss.image} style = {{width : "80px" , marginLeft:"5px", height: "80px"}}/>
   <td>{businesss.businessname}</td>
    <td>{businesss.businesstype}</td>
    <td>{businesss.price}</td>
    <td>{businesss.phone}</td>
    <td>{businesss.address}</td>
    <td>{businesss.email}</td>
     <td>{businesss.description}</td>
     


  </tr>
           </table>
           <div className="pull-right">

          <button type="button" className="btn btn-primary" style={{ marginTop: 15 }} data-toggle="modal" data-target="#myModal"> <i className="fa fa-home" ></i> Book business</button>
          <div id="myModal" class="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <form >
                    <div className="form-group">
                      <h3>Book business</h3>
                      {/* <label>business Id</label>
                      <input className="form-control" type="text" placeholder="business id *" value={businesss._id} name="business_id" onChange={this.handleChange} />
                      */}
                      <label>Full name</label>
                      <input className="form-control" type="text" id= "fullname" placeholder="Full name *" value={this.state.user.fullname} name="fullname" onChange={this.handleChange} />
                      <label>Address</label>
                      <input className="form-control" type="text" id= "address" placeholder="Address *" name="address" value={this.state.user.address} onChange={this.handleChange} />
                      <label>Phone</label>
                      <input className="form-control" type="text" id= "number" placeholder="number *" name="number" value={this.state.user.number} onChange={this.handleChange} />
                      <label>Email</label>
                      <input className="form-control" type="text" id= "email" placeholder="Email *" name="email" value={this.state.user.email} onChange={this.handleChange} />
                      <label>Eventname</label>
                      <input className="form-control" type="text"  id= "eventname" placeholder="Eventname *" name="eventname" onChange={this.handleChange} />
                      <label>From</label>
                      <input className="form-control" type="date" id= "from" placeholder="From *" name="from" onChange={this.handleChange} />
                      <label>To</label>
                      <input className="form-control" type="date" id= "to" placeholder="To *" name="to" onChange={this.handleChange} />
                    </div>
                    
                  </form>
                  <div className="modal-footer">
                    <button type="button" id="bookbusiness" className="btn btn-primary" style={{ marginTop: 15 }} onClick={this.postbbusiness}> <i className="fa fa-home" ></i> Book business</button>

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

                      <h3 className="mb-3 color-blue"><b>User businesss</b></h3>
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